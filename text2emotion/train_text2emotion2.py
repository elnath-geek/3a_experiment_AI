import torch
from torch.utils.data import TensorDataset, DataLoader, RandomSampler, SequentialSampler
import torch.nn.functional as F
from transformers import BertTokenizer, BertConfig,AdamW, BertForSequenceClassification,get_linear_schedule_with_warmup
import transformers

import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix,classification_report
# Import and evaluate each test batch using Matthew's correlation coefficient
from sklearn.metrics import accuracy_score,matthews_corrcoef
from sklearn.preprocessing import LabelEncoder

from tqdm import tqdm, trange,tnrange,tqdm_notebook
import random
import os
import io

def main():
    device = torch.device("cuda")
    torch.cuda.empty_cache()

    df_train = pd.read_csv("../archive/train.txt", delimiter=';', header=None, names=['sentence','label'])
    df_test = pd.read_csv("../archive/test.txt", delimiter=';', header=None, names=['sentence','label'])
    df_val = pd.read_csv("../archive/val.txt", delimiter=';', header=None, names=['sentence','label'])

    df = pd.concat([df_train,df_test,df_val])
    df['label'].unique()

    labelencoder = LabelEncoder()
    df['label_enc'] = labelencoder.fit_transform(df['label'])
    df[['label','label_enc']].drop_duplicates(keep='first')
    df.rename(columns={'label':'label_desc'},inplace=True)
    df.rename(columns={'label_enc':'label'},inplace=True)

    ## create label and sentence list
    sentences = df.sentence.values

    # Set the maximum sequence length. The longest sequence in our training set is 47, but we'll leave room on the end anyway. 
    # In the original paper, the authors used a length of 512.
    MAX_LEN = 256

    ## Import BERT tokenizer, that is used to convert our text into tokens that corresponds to BERT library
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased',do_lower_case=True)
    input_ids = [tokenizer.encode(sent, add_special_tokens=True,max_length=MAX_LEN,pad_to_max_length=True, truncation=True) for sent in sentences]
    labels = df.label.values

    ## Create attention mask
    attention_masks = []
    ## Create a mask of 1 for all input tokens and 0 for all padding tokens
    attention_masks = [[float(i>0) for i in seq] for seq in input_ids]
    # print(attention_masks[2])

    train_inputs,validation_inputs,train_labels,validation_labels = train_test_split(input_ids,labels,random_state=41,test_size=0.1)
    train_masks,validation_masks,_,_ = train_test_split(attention_masks,input_ids,random_state=41,test_size=0.1)

    train_inputs = torch.tensor(train_inputs)
    validation_inputs = torch.tensor(validation_inputs)
    train_labels = torch.tensor(train_labels)
    validation_labels = torch.tensor(validation_labels)
    train_masks = torch.tensor(train_masks)
    validation_masks = torch.tensor(validation_masks)

    # Select a batch size for training. For fine-tuning BERT on a specific task, the authors recommend a batch size of 16 or 32
    batch_size = 32

    # Create an iterator of our data with torch DataLoader. This helps save on memory during training because, unlike a for loop, 
    # with an iterator the entire dataset does not need to be loaded into memory
    train_data = TensorDataset(train_inputs,train_masks,train_labels)
    train_sampler = RandomSampler(train_data)
    train_dataloader = DataLoader(train_data,sampler=train_sampler,batch_size=batch_size)

    validation_data = TensorDataset(validation_inputs,validation_masks,validation_labels)
    validation_sampler = RandomSampler(validation_data)
    validation_dataloader = DataLoader(validation_data,sampler=validation_sampler,batch_size=batch_size)

    # Load BertForSequenceClassification, the pretrained BERT model with a single linear classification layer on top. 
    model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=6).to(device)

    # Parameters:
    lr = 2e-5
    adam_epsilon = 1e-8

    # Number of training epochs (authors recommend between 2 and 4)
    epochs = 5

    num_warmup_steps = 40
    num_training_steps = len(train_dataloader)*epochs

    ### In Transformers, optimizer and schedules are splitted and instantiated like this:
    optimizer = AdamW(model.parameters(), lr=lr,eps=adam_epsilon,correct_bias=False)  # To reproduce BertAdam specific behavior set correct_bias=False
    # optimizer = AdamW(model.parameters(), lr=lr,eps=adam_epsilon,correct_bias=True)  # To reproduce BertAdam specific behavior set correct_bias=False
    #scheduler = get_linear_schedule_with_warmup(optimizer, num_warmup_steps=num_warmup_steps, num_training_steps=num_training_steps)  # PyTorch scheduler
    scheduler = transformers.get_cosine_with_hard_restarts_schedule_with_warmup(optimizer, num_warmup_steps=num_warmup_steps,
                                                             num_training_steps=num_training_steps, num_cycles=3)

    ## Store our loss and accuracy for plotting
    train_loss_set = []
    learning_rate = []

    # Gradients gets accumulated by default
    model.zero_grad()

    # tnrange is a tqdm wrapper around the normal python range
    for _ in tnrange(1,epochs+1,desc='Epoch'):
        print("<" + "="*22 + "Epoch {_} " + "="*22 + ">")
        # Calculate total loss for this epoch
        batch_loss = 0

        for step, batch in enumerate(train_dataloader):
            # Set our model to training mode (as opposed to evaluation mode)
            model.train()
            
            # Add batch to GPU
            batch = tuple(t.to(device) for t in batch)
            # Unpack the inputs from our dataloader
            b_input_ids, b_input_mask, b_labels = batch

            # Forward pass
            outputs = model(b_input_ids, token_type_ids=None, attention_mask=b_input_mask, labels=b_labels.long())
            loss = outputs[0]
            
            # Backward pass
            loss.backward()
            
            # Clip the norm of the gradients to 1.0
            # Gradient clipping is not in AdamW anymore
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            
            # Update parameters and take a step using the computed gradient
            optimizer.step()
            
            # Update learning rate schedule
            scheduler.step()

            # Clear the previous accumulated gradients
            optimizer.zero_grad()
            
            # Update tracking variables
            batch_loss += loss.item()

        # Calculate the average loss over the training data.
        avg_train_loss = batch_loss / len(train_dataloader)

        #store the current learning rate
        for param_group in optimizer.param_groups:
            print("\n\tCurrent Learning rate: ",param_group['lr'])
            learning_rate.append(param_group['lr'])
            
        train_loss_set.append(avg_train_loss)
        print('\n\tAverage Training loss: ',avg_train_loss)

        model_save_folder = 'model/'
        tokenizer_save_folder = 'tokenizer/'

        path_model = os.path.join('working2/', model_save_folder)
        path_tokenizer = os.path.join('working2/', tokenizer_save_folder)

        ## Now let's save our model and tokenizer to a directory
        model.save_pretrained(path_model)
        tokenizer.save_pretrained(path_tokenizer)

        model_save_name = 'fineTuneModel.pt'
        path = path_model = os.path.join(path_model, model_save_name)
        torch.save(model.state_dict(),path)
            
        # Validation

        # Put model in evaluation mode to evaluate loss on the validation set
        model.eval()

        # Tracking variables 
        eval_accuracy,eval_mcc_accuracy,nb_eval_steps = 0, 0, 0

        # Evaluate data for one epoch
        for batch in validation_dataloader:
            # Add batch to GPU
            batch = tuple(t.to(device) for t in batch)
            # Unpack the inputs from our dataloader
            b_input_ids, b_input_mask, b_labels = batch
            # Telling the model not to compute or store gradients, saving memory and speeding up validation
            with torch.no_grad():
            # Forward pass, calculate logit predictions
                logits = model(b_input_ids, token_type_ids=None, attention_mask=b_input_mask)
            
            # Move logits and labels to CPU
            logits = logits[0].to('cpu').numpy()
            label_ids = b_labels.to('cpu').numpy()

            pred_flat = np.argmax(logits, axis=1).flatten()
            labels_flat = label_ids.flatten()
            
            df_metrics=pd.DataFrame({'Epoch':epochs,'Actual_class':labels_flat,'Predicted_class':pred_flat})
            
            tmp_eval_accuracy = accuracy_score(labels_flat,pred_flat)
            tmp_eval_mcc_accuracy = matthews_corrcoef(labels_flat, pred_flat)
            
            eval_accuracy += tmp_eval_accuracy
            eval_mcc_accuracy += tmp_eval_mcc_accuracy
            nb_eval_steps += 1

        print('\n\tValidation Accuracy: ', eval_accuracy/nb_eval_steps)
        print('\n\tValidation MCC Accuracy: ', eval_mcc_accuracy/nb_eval_steps)
        print(classification_report(df_metrics['Actual_class'].values, df_metrics['Predicted_class'].values,
              target_names=sorted(df["label_desc"].unique()),
              labels=np.arange(len(df["label_desc"].unique())), digits=6))
    print("train finished")

if __name__ == "__main__":
    main()