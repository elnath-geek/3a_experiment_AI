import torch
from transformers import BertTokenizer, BertConfig,AdamW, BertForSequenceClassification,get_linear_schedule_with_warmup

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

import os, io, sys, codecs
# sys.stdin = codecs.getreader('utf-8')
import requests
import re

def suggest(emotions, k=3):
    stamp = pd.read_csv("src/Stamp.csv")
    dist = []
    for _, e in stamp.iterrows():
      dist.append(np.dot(e[1:], np.array(emotions)) / (np.linalg.norm(e[1:]) * np.linalg.norm(emotions)))
    index = np.array(dist).argsort()[::-1][:k]
    stamps = []
    for i in index:
      stamps.append(stamp.iat[i,0])
      #stamps.append((stamp.iat[i,0], dist[i]))
    return stamps

def main():
    device = torch.device("cpu")
    en_sentence = sys.stdin.readline()
    en_split_sentence = np.array(re.findall("[.!?]", en_sentence))
    # print("python-shell", type(en_split_sentence))
    # print("python-shell", en_split_sentence)

    # Set the maximum sequence length. The longest sequence in our training set is 47, but we'll leave room on the end anyway.
    MAX_LEN = 256
    ## Import BERT tokenizer, that is used to convert our text into tokens that corresponds to BERT library
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased',do_lower_case=True)
    input_id = [tokenizer.encode(sent, add_special_tokens=True,max_length=MAX_LEN, pad_to_max_length=True, truncation=True) for sent in en_split_sentence]
    # print(input_id)
    t_input_id = torch.Tensor(input_id).long()

    attention_mask = []
    attention_mask = [[float(i>0) for i in seq] for seq in input_id]
    t_attention_mask = torch.Tensor(attention_mask).long()

    # Load BertForSequenceClassification, the pretrained BERT model with a single linear classification layer on top.
    model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=7).to(device)
    model.zero_grad()
    model.eval()
    model.load_state_dict(torch.load("./src/fineTuneModel_7.pt"))

    with torch.no_grad():
        output = model(t_input_id, token_type_ids=None, attention_mask=t_attention_mask)
        output = output[0].to('cpu').numpy()
        # print('  anger,      fear,      joy,       love,      sadness,   surprise')
        print(','.join( map(str, output.flatten()) ))
        print('vec_end')
        for o in output:
            print(*suggest(o))
            print(" ")
        print('end')

if __name__ == "__main__":
    main()
