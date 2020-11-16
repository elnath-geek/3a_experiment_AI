# train

https://github.com/scikit-learn/scikit-learn/blob/0fb307bf3/sklearn/metrics/_classification.py#L1825
- Current Learning rate:
- Average Training loss:
- Validation Accuracy:
- Validation MCC Accuracy:
- precision: tp / (tp + fp)
- recall: tp / (tp + fn)
- f1-score: 2 * precision * recall /  precision + recall
- micro avg: Calculate metrics globally by counting the total true positives,
            false negatives and false positives.
   - 全てのlabelsが現れていたら、accuracy 

- macro avg: Calculate metrics for each label, and find their unweighted
            mean.  This does not take label imbalance into account.

## 最初のバージョン

Validation Accuracy:  0.9260912698412699

Epoch 1

    Current Learning rate:  1.3333333333333333e-05
	Average Training loss:  0.4089954572979553
	Validation Accuracy:  0.9226190476190477
	Validation MCC Accuracy:  0.9009434582796358

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   0.500000  1.000000  0.666667         1
         joy   1.000000  0.857143  0.923077         7
        love   1.000000  1.000000  1.000000         1
     sadness   1.000000  1.000000  1.000000         3
    surprise   1.000000  1.000000  1.000000         1

    accuracy                       0.937500        16
         avg   0.916667  0.976190  0.931624        16

Epoch 2

	Current Learning rate:  6.666666666666667e-06
	Average Training loss:  0.1124807191652049
	Validation Accuracy:  0.9310515873015873
	Validation MCC Accuracy:  0.9113152494471456

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   1.000000  1.000000  1.000000         2
         joy   1.000000  1.000000  1.000000         4
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  0.875000  0.933333         8
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.666667  0.645833  0.655556        16
\# mi avg = micro avg : valに無いラベルがある時

\# ma avg = macro avg

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.0786577103391528
	Validation Accuracy:  0.9260912698412699
	Validation MCC Accuracy:  0.9038699077686044

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         6
        fear   1.000000  0.333333  0.500000         3
         joy   1.000000  1.000000  1.000000         3
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         4
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.875000  0.875000  0.875000        16
      ma avg   0.666667  0.555556  0.583333        16
      
## neutral

Validation Accuracy:  0.9453125

Epoch 1

	Current Learning rate:  1.3333333333333333e-05
	Average Training loss:  0.4520670290453677
	Validation Accuracy:  0.9345005580357143
	Validation MCC Accuracy:  0.915978945264565

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   0.333333  1.000000  0.500000         1
         joy   1.000000  1.000000  1.000000         1
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         1
    surprise   0.000000  0.000000  0.000000         2

      mi avg   0.714286  0.714286  0.714286         7
      ma avg   0.476190  0.571429  0.500000         7

Epoch 2

	Current Learning rate:  6.666666666666667e-06
	Average Training loss:  0.12495995417027775
	Validation Accuracy:  0.93701171875
	Validation MCC Accuracy:  0.9187159486941725

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   1.000000  1.000000  1.000000         1
         joy   0.000000  0.000000  0.000000         0
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         2
    surprise   1.000000  1.000000  1.000000         2

      mi avg   1.000000  1.000000  1.000000         7
      ma avg   0.571429  0.571429  0.571429         7

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.0834128340028606
	Validation Accuracy:  0.9453125
	Validation MCC Accuracy:  0.9287271511153847

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   1.000000  1.000000  1.000000         2
         joy   1.000000  1.000000  1.000000         1
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         3
    surprise   0.000000  0.000000  0.000000         0

      mi avg   1.000000  1.000000  1.000000         7
      ma avg   0.571429  0.571429  0.571429         7

## learning rate

Validation Accuracy:  0.8487103174603174

Epoch 1

	Current Learning rate:  1.3333333333333332e-06
	Average Training loss:  1.0740005004998845
	Validation Accuracy:  0.7584325396825397
	Validation MCC Accuracy:  0.6775326369238549

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   1.000000  1.000000  1.000000         1
         joy   0.750000  1.000000  0.857143         6
        love   0.000000  0.000000  0.000000         2
     sadness   1.000000  1.000000  1.000000         6
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.875000  0.875000  0.875000        16
      ma avg   0.625000  0.666667  0.642857        16

Epoch 2

	Current Learning rate:  6.666666666666666e-07
	Average Training loss:  0.623925631200865
	Validation Accuracy:  0.8263888888888888
	Validation MCC Accuracy:  0.7699933462090661

              precision    recall  f1-score   support
       anger   0.000000  0.000000  0.000000         1
        fear   0.500000  0.500000  0.500000         2
         joy   0.888889  0.888889  0.888889         9
        love   0.000000  0.000000  0.000000         1
     sadness   0.400000  1.000000  0.571429         2
    surprise   0.000000  0.000000  0.000000         1

    accuracy                       0.687500        16
         avg   0.298148  0.398148  0.326720        16

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.4965856789907384
	Validation Accuracy:  0.8487103174603174
	Validation MCC Accuracy:  0.8017582864263783

              precision    recall  f1-score   support
       anger   1.000000  0.750000  0.857143         4
        fear   1.000000  1.000000  1.000000         3
         joy   0.800000  1.000000  0.888889         4
        love   1.000000  0.500000  0.666667         2
     sadness   0.750000  1.000000  0.857143         3
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.875000  0.875000  0.875000        16
      ma avg   0.758333  0.708333  0.711640        16

## AdamW; correct_bias=True

### correct_biasとは

わからない。初期の勾配に関して修正している？
https://github.com/huggingface/transformers/blob/master/src/transformers/optimization.py
https://qiita.com/exp/items/99145796a87cc6cd47e1

Validation Accuracy:  0.9250992063492064

Epoch 1

	Current Learning rate:  1.3333333333333333e-05
	Average Training loss:  0.5588733975115509
	Validation Accuracy:  0.9216269841269841
	Validation MCC Accuracy:  0.9000203033682267

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   1.000000  0.666667  0.800000         3
         joy   1.000000  1.000000  1.000000         5
        love   1.000000  1.000000  1.000000         1
     sadness   1.000000  1.000000  1.000000         5
    surprise   0.500000  1.000000  0.666667         1

    accuracy                       0.937500        16
         avg   0.916667  0.944444  0.911111        16

Epoch 2

	Current Learning rate:  6.666666666666667e-06
	Average Training loss:  0.1473668265697376
	Validation Accuracy:  0.9260912698412699
	Validation MCC Accuracy:  0.9048111249693389

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   0.666667  1.000000  0.800000         2
         joy   1.000000  1.000000  1.000000         6
        love   1.000000  1.000000  1.000000         1
     sadness   1.000000  0.800000  0.888889         5
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.777778  0.800000  0.781481        16

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.09783681923420984
	Validation Accuracy:  0.9250992063492064
	Validation MCC Accuracy:  0.9022487778982247

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   0.500000  1.000000  0.666667         1
         joy   1.000000  0.857143  0.923077         7
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         4
    surprise   1.000000  0.666667  0.800000         3
    accuracy                       0.875000        16
         avg   0.750000  0.753968  0.731624        16

## scheduler

### warmupの値に関してまとめ

len(train_dataloader) = 563なので、
563*3 = 1689(step?)
warmupは50~200くらいでいいのでは

## warmupstep:50 (linear)

Validation Accuracy:  0.935515873015873

Epoch 1

	Current Learning rate:  1.3740085417937767e-05
	Average Training loss:  0.42655447814249653
	Validation Accuracy:  0.9255952380952381
	Validation MCC Accuracy:  0.904160682675573

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   1.000000  1.000000  1.000000         1
         joy   1.000000  0.875000  0.933333         8
        love   0.500000  1.000000  0.666667         1
     sadness   1.000000  1.000000  1.000000         4
    surprise   1.000000  1.000000  1.000000         1

    accuracy                       0.937500        16
         avg   0.916667  0.979167  0.933333        16

Epoch 2

	Current Learning rate:  6.8700427089688835e-06
	Average Training loss:  0.11736757832961438
	Validation Accuracy:  0.9370039682539683
	Validation MCC Accuracy:  0.9179886317778463

              precision    recall  f1-score   support
       anger   0.333333  1.000000  0.500000         1
        fear   1.000000  0.500000  0.666667         2
         joy   1.000000  1.000000  1.000000         7
        love   1.000000  1.000000  1.000000         3
     sadness   1.000000  0.666667  0.800000         3
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.875000  0.875000  0.875000        16
      ma avg   0.722222  0.694444  0.661111        16

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.08114308171755044
	Validation Accuracy:  0.935515873015873
	Validation MCC Accuracy:  0.9159387804357433
              precision    recall  f1-score   support

       anger   0.500000  1.000000  0.666667         2
        fear   1.000000  0.666667  0.800000         3
         joy   1.000000  0.833333  0.909091         6
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  0.750000  0.857143         4
    surprise   1.000000  1.000000  1.000000         1

    accuracy                       0.812500        16
         avg   0.750000  0.708333  0.705483        16

## warmupstep:100 (linear)

Validation Accuracy:  0.9295634920634921

Epoch 1

	Current Learning rate:  1.41724354940214e-05
	Average Training loss:  0.44225161388304685
	Validation Accuracy:  0.9290674603174603
	Validation MCC Accuracy:  0.9070281019486818

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   1.000000  1.000000  1.000000         1
         joy   1.000000  1.000000  1.000000         4
        love   1.000000  1.000000  1.000000         2
     sadness   1.000000  1.000000  1.000000         6
    surprise   0.000000  0.000000  0.000000         0

      mi avg   1.000000  1.000000  1.000000        16
      ma avg   0.833333  0.833333  0.833333        16

Epoch 2

	Current Learning rate:  7.0862177470107e-06
	Average Training loss:  0.10723199137547723
	Validation Accuracy:  0.9285714285714286
	Validation MCC Accuracy:  0.905844988839375

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   0.666667  1.000000  0.800000         2
         joy   1.000000  1.000000  1.000000         5
        love   1.000000  1.000000  1.000000         1
     sadness   1.000000  0.800000  0.888889         5
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.777778  0.800000  0.781481        16

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.07415922803946541
	Validation Accuracy:  0.9295634920634921
	Validation MCC Accuracy:  0.9079318907306595

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   0.000000  0.000000  0.000000         0
         joy   1.000000  0.888889  0.941176         9
        love   0.500000  1.000000  0.666667         1
     sadness   1.000000  1.000000  1.000000         3
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.583333  0.648148  0.601307        16

## cosine

Validation Accuracy:  0.9300595238095238

Epoch 1

	Current Learning rate:  1.5000000000000002e-05
	Average Training loss:  0.365624655699804
	Validation Accuracy:  0.9236111111111112
	Validation MCC Accuracy:  0.899694679533077

              precision    recall  f1-score   support
       anger   0.000000  0.000000  0.000000         0
        fear   0.000000  0.000000  0.000000         0
         joy   0.750000  0.750000  0.750000         8
        love   0.666667  0.500000  0.571429         4
     sadness   1.000000  1.000000  1.000000         2
    surprise   0.666667  1.000000  0.800000         2

      mi avg   0.750000  0.750000  0.750000        16
      ma avg   0.513889  0.541667  0.520238        16

Epoch 2

	Current Learning rate:  5.000000000000003e-06
	Average Training loss:  0.11084010411007578
	Validation Accuracy:  0.9305555555555556
	Validation MCC Accuracy:  0.9098016105552621

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         4
        fear   1.000000  1.000000  1.000000         2
         joy   1.000000  0.666667  0.800000         3
        love   0.666667  1.000000  0.800000         2
     sadness   1.000000  1.000000  1.000000         5
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.777778  0.777778  0.766667        16

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.07396722066201283
	Validation Accuracy:  0.9300595238095238
	Validation MCC Accuracy:  0.9081884978553773

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   0.666667  1.000000  0.800000         2
         joy   1.000000  1.000000  1.000000         8
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  0.750000  0.857143         4
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.611111  0.625000  0.609524        16

## cosine with hard restarts

Validation Accuracy:  0.933531746031746

Epoch 1

	Current Learning rate:  2e-05
	Average Training loss:  0.3395771654273117
	Validation Accuracy:  0.9310515873015873
	Validation MCC Accuracy:  0.9103568392687627

              precision    recall  f1-score   support
       anger   0.666667  1.000000  0.800000         2
        fear   0.000000  0.000000  0.000000         0
         joy   1.000000  1.000000  1.000000         4
        love   1.000000  1.000000  1.000000         2
     sadness   1.000000  0.875000  0.933333         8
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.611111  0.645833  0.622222        16

Epoch 2

	Current Learning rate:  2e-05
	Average Training loss:  0.13252240073326213
	Validation Accuracy:  0.9365079365079365
	Validation MCC Accuracy:  0.9173390705008809

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   0.000000  0.000000  0.000000         0
         joy   1.000000  1.000000  1.000000         8
        love   1.000000  1.000000  1.000000         2
     sadness   1.000000  1.000000  1.000000         3
    surprise   1.000000  1.000000  1.000000         1

      mi avg   1.000000  1.000000  1.000000        16
      ma avg   0.833333  0.833333  0.833333        16

Epoch 3

	Current Learning rate:  0.0
	Average Training loss:  0.10122121340507513
	Validation Accuracy:  0.933531746031746
	Validation MCC Accuracy:  0.9133225484857805

              precision    recall  f1-score   support
       anger   0.000000  0.000000  0.000000         0
        fear   1.000000  0.500000  0.666667         2
         joy   1.000000  1.000000  1.000000         5
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         8
    surprise   0.500000  1.000000  0.666667         1

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.583333  0.583333  0.555556        16
weighted avg   0.968750  0.937500  0.937500        16

## 良さげなものを組み合わせたもの

- epochs=5
- num_warmup_steps=40
- scheduler=cosine_with_hard_restartsschedule_with_warmup;3cycles

### 6vector

Epoch 1

	Current Learning rate:  7.959657130241231e-06
	Average Training loss:  0.38849709827459517
	Validation Accuracy:  0.9265873015873016
	Validation MCC Accuracy:  0.9040217697133999

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         2
        fear   1.000000  1.000000  1.000000         3
         joy   1.000000  1.000000  1.000000         2
        love   1.000000  1.000000  1.000000         2
     sadness   1.000000  1.000000  1.000000         7
    surprise   0.000000  0.000000  0.000000         0

      mi avg   1.000000  1.000000  1.000000        16
      ma avg   0.833333  0.833333  0.833333        16

Epoch 2

	Current Learning rate:  1.854189146174318e-05
	Average Training loss:  0.11045571533734802
	Validation Accuracy:  0.9350198412698413
	Validation MCC Accuracy:  0.9154179626765927

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   0.000000  0.000000  0.000000         0
         joy   1.000000  0.750000  0.857143         4
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         9
    surprise   0.000000  0.000000  0.000000         0

      mi avg   0.937500  0.937500  0.937500        16
      ma avg   0.500000  0.458333  0.476190        16

Epoch 3

	Current Learning rate:  2.2410236275141406e-06
	Average Training loss:  0.09844521396060608
	Validation Accuracy:  0.9320436507936508
	Validation MCC Accuracy:  0.9115287832161694

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   1.000000  1.000000  1.000000         4
         joy   1.000000  1.000000  1.000000         4
        love   1.000000  1.000000  1.000000         1
     sadness   1.000000  1.000000  1.000000         4
    surprise   0.000000  0.000000  0.000000         0

      mi avg   1.000000  1.000000  1.000000        16
      ma avg   0.833333  0.833333  0.833333        16

Epoch 4

	Current Learning rate:  1.3347404686853789e-05
	Average Training loss:  0.08268569584532276
	Validation Accuracy:  0.9320436507936508
	Validation MCC Accuracy:  0.9103210321066391

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   1.000000  1.000000  1.000000         2
         joy   1.000000  1.000000  1.000000         3
        love   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         5
    surprise   1.000000  1.000000  1.000000         3

      mi avg   1.000000  1.000000  1.000000        16
      ma avg   0.833333  0.833333  0.833333        16

Epoch 5

	Current Learning rate:  0.0
	Average Training loss:  0.06743377005122271
	Validation Accuracy:  0.9315476190476191
	Validation MCC Accuracy:  0.9103677235386679

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   0.500000  1.000000  0.666667         1
         joy   1.000000  1.000000  1.000000         5
        love   1.000000  1.000000  1.000000         1
     sadness   1.000000  1.000000  1.000000         5
    surprise   0.000000  0.000000  0.000000         1

    accuracy                       0.937500        16
      ma avg   0.750000  0.833333  0.777778        16

### 7vector

Epoch 1

	Current Learning rate:  7.948279274905677e-06
	Average Training loss:  0.4306978067884022
	Validation Accuracy:  0.93994140625
	Validation MCC Accuracy:  0.921997118777985

              precision    recall  f1-score   support
       anger   0.000000  0.000000  0.000000         0
        fear   1.000000  1.000000  1.000000         1
         joy   1.000000  1.000000  1.000000         4
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         1
    surprise   1.000000  1.000000  1.000000         1

      mi avg   1.000000  1.000000  1.000000         7
      ma avg   0.571429  0.571429  0.571429         7

Epoch 2

	Current Learning rate:  1.8537355279056116e-05
	Average Training loss:  0.11929642869346171
	Validation Accuracy:  0.93701171875
	Validation MCC Accuracy:  0.9183903001392849

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   1.000000  1.000000  1.000000         1
         joy   0.000000  0.000000  0.000000         0
        love   1.000000  1.000000  1.000000         1
     neutral   1.000000  1.000000  1.000000         2
     sadness   1.000000  1.000000  1.000000         2
    surprise   0.000000  0.000000  0.000000         0

      mi avg   1.000000  1.000000  1.000000         7
      ma avg   0.714286  0.714286  0.714286         7

Epoch 3

	Current Learning rate:  2.2373584634177826e-06
	Average Training loss:  0.10433310108923849
	Validation Accuracy:  0.9425920758928571
	Validation MCC Accuracy:  0.9245385683816978

              precision    recall  f1-score   support
       anger   0.000000  0.000000  0.000000         0
        fear   0.000000  0.000000  0.000000         0
         joy   1.000000  1.000000  1.000000         2
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         4
    surprise   0.000000  0.000000  0.000000         1

      mi avg   0.857143  0.857143  0.857143         7
      ma avg   0.285714  0.285714  0.285714         7

Epoch 4

	Current Learning rate:  1.3344666248983427e-05
	Average Training loss:  0.08439898188430521
	Validation Accuracy:  0.943359375
	Validation MCC Accuracy:  0.9269604322175398

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         3
        fear   1.000000  1.000000  1.000000         2
         joy   1.000000  1.000000  1.000000         1
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   1.000000  1.000000  1.000000         1
    surprise   0.000000  0.000000  0.000000         0

      mi avg   1.000000  1.000000  1.000000         7
      ma avg   0.571429  0.571429  0.571429         7

Epoch 5

	Current Learning rate:  0.0
	Average Training loss:  0.06987047429820147
	Validation Accuracy:  0.94189453125
	Validation MCC Accuracy:  0.9246983632196787

              precision    recall  f1-score   support
       anger   1.000000  1.000000  1.000000         1
        fear   0.000000  0.000000  0.000000         0
         joy   1.000000  1.000000  1.000000         3
        love   0.000000  0.000000  0.000000         0
     neutral   0.000000  0.000000  0.000000         0
     sadness   0.000000  0.000000  0.000000         0
    surprise   1.000000  1.000000  1.000000         3

      mi avg   1.000000  1.000000  1.000000         7
      ma avg   0.428571  0.428571  0.428571         7

### test

彼はすぐに怒る。震え上がるほど驚いた。とても楽しかった。愛しています。久しぶりに映画を見て泣いた。すごいびっくりした。これは普通の文章です。

#### 6

anger,fear,joy,love,sadness,surprise

[ **1.** -0.27817067 -0.55422854 -0.74066313 -0.02495716 -0.66522618]

[ 0.02791669  **0.94802284** -0.29262326 -0.77764956 -0.24898918 -0.47673535]

[-0.22255776 -0.6419545   **1.**        -0.48942057 -0.45224468 -0.43107986]

[-0.7104996  -0.96441523  0.72581959  **0.75610693** -0.12992102 -0.83565736]

[ 0.18488377 -0.53411563  0.10170836 -0.44571535  **0.7882158**  -1.        ]

[-0.45489903 -0.33506107 -0.08170045 -0.49171189 -0.65753841  **0.95584162**]

[-0.25512193  0.05891072  <u>0.96220231</u> -0.7412649  -0.26292316 -0.43906069]

#### 7

anger,fear,joy,love,sadness,surprise,neutral

[**1.0**, 0.26611433426539105, -0.5849466721216837, -0.7892959912618002, -0.39055323600769043, -0.8388388951619467, -0.3223688205083211]

[0.3483161926269531, **0.42267608642578125**, -0.5932149092356364, -0.7788832187652588, -0.9782595634460449, 0.0055481741825739546, <u>0.5571238994598389</u>]

[0.007994923740625381, -0.8162984848022461, **0.5089516639709473**, -0.5211163361867269, -0.8625255425771078, -0.10985128084818523, <u>0.7214287122090658</u>]

[-0.46113165219624835, -1.0, 0.5488624175389608, **0.5653338034947714**, -0.24298473199208578, -0.9773627916971842, 0.19945021470387778]

[0.15553400913874307, -0.3934965928395589, -0.19072020053863525, -0.7566467126210531, **0.7184802691141764**, -0.943925142288208, -0.1550851364930471]

[-0.3169090946515401, -0.3499046564102173, -0.2507408658663432, -0.2070910930633545, -1.0, **0.724457581837972**, 0.43071595827738446]

[-0.17771536111831665, -0.21556222438812256, -0.06316315631071727, -0.2505715489387512, -0.8753894964853922, -0.0038782010475794473, **0.9316442807515463**]