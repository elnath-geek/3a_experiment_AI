import torch
from transformers import BertTokenizer, BertConfig,AdamW, BertForSequenceClassification,get_linear_schedule_with_warmup

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

import os
import io

def main():
    device = torch.device("cpu")

    df = pd.read_csv("../archive/train_small.txt", delimiter=';', header=None, names=['sentence','label'])
    df['label'].unique()
    labelencoder = LabelEncoder()
    df['label_enc'] = labelencoder.fit_transform(df['label'])
    print(df[['label','label_enc']].drop_duplicates(keep='first'))


    sentence = [ input("input an english sentence : ") ]
    print(sentence)

    # Set the maximum sequence length. The longest sequence in our training set is 47, but we'll leave room on the end anyway. 
    MAX_LEN = 256
    ## Import BERT tokenizer, that is used to convert our text into tokens that corresponds to BERT library
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased',do_lower_case=True)
    input_id = [tokenizer.encode(sent, add_special_tokens=True,max_length=MAX_LEN, padding=True, truncation=True) for sent in sentence]
    t_input_id = torch.Tensor(input_id).long()

    attention_mask = []
    attention_mask = [[float(i>0) for i in seq] for seq in input_id]
    t_attention_mask = torch.Tensor(attention_mask).long()

    # Load BertForSequenceClassification, the pretrained BERT model with a single linear classification layer on top. 
    model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=6).to(device)
    model.zero_grad()
    model.eval()
    model.load_state_dict(torch.load("working_160/model/fineTuneModel.pt"))

    with torch.no_grad():
        output = model(t_input_id, token_type_ids=None, attention_mask=t_attention_mask)
        output = output[0].to('cpu').numpy().flatten()
        print(sentence)
        print('anger, feay, joy, love, sadness, surprise')
        print(output)
            
if __name__ == "__main__":
    main()
