import numpy as np
import pandas as pd

def suggest(emotions, k=3):
    stamp = pd.read_csv("Stamp.csv")
    dist = []
    for _, e in stamp.iterrows():
      dist.append(np.dot(e[1:], emotions) / (np.linalg.norm(e[1:]) * np.linalg.norm(emotions)))
    index = np.array(dist).argsort()[::-1][:k]
    stamps = []
    for i in index:
      stamps.append(stamp.iat[i,0])
    return stamps