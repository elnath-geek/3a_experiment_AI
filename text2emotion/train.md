# train

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