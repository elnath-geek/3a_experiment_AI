from torch.utils.data import TensorDataset, DataLoader, RandomSampler, SequentialSampler
import torch.nn.functional as F
from transformers import BertTokenizer, BertConfig,AdamW, BertForSequenceClassification,get_linear_schedule_with_warmup

import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix,classification_report
# Import and evaluate each test batch using Matthew's correlation coefficient
from sklearn.metrics import accuracy_score,matthews_corrcoef

from tqdm import tqdm, trange,tnrange,tqdm_notebook
import random
import os
import io

device = torch.device("cuda:0")

df_train = pd.read_csv("../archive/train.txt", delimiter=';', header=None, names=['sentence','label'])
df_test = pd.read_csv("../archive/test.txt", delimiter=';', header=None, names=['sentence','label'])
df_val = pd.read_csv("../archive/val.txt", delimiter=';', header=None, names=['sentence','label'])

df = pd.concat([df_train,df_test,df_val])
df['label'].unique()

