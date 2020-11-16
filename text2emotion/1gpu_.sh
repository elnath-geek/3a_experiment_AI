#!/bin/sh
#SBATCH -p p
#SBATCH -t 12:00:00
#SBATCH --gres=gpu:3
export PATH=/usr/local/cuda/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH

python3 train_text2emotion_neutral.py