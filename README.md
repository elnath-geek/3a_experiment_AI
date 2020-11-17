# 概要
3Aの後期実験、人工知能演習の自由課題用のレポジトリです。  
G5：山本 恒輔、坂本 祐輝、荒木 航太  

授業で使った演習用コード(day2, day3, day4)はgitignoreしてあります。

# 環境
このアプリに必要な動作環境は以下の通りです。
|主要モジュール|バージョン|備考| 
|:--|:--|:--|
|node | 12.15.0|他のバージョンは動作非検証です。アプリ自体をnuxtで作成しており、Node実行環境が必要です。|
|pytorch | 1.5.0 or 1.5.1|1.4.0以下ではモデルの読み込みでエラーがでると思います。|
|transformers| 3.4.0 / 2.5.1| 感情ベクトル6次元なら3.4.0、neutralを含めたコードはモデルの関係で2系（istに合わせて2.5.1推奨）でしか動作しませんでした。 |
|フォント| - | web/assets/fonts/ からインストールしないと反映されません。|
|その他|enviroment/pip_list_output.txt|必要に応じてpip install, npm install をお願いします。|

学習モデルは容量の関係でgithubに上がらなかったので、手元で学習させるか、以下のググドラリンク（https://drive.google.com/drive/folders/184SoXCuATJA3eZ7HBhU2H79m-Lc8_KFY?usp=sharing）からダウンロードして、  
**web_server/src/ フォルダに保存してください。** web_server/src/text2emotion*.js 50行目付近で読み込んでいます。

環境がととのっていれば、
```terminal 1
cd web
npm install
npm run dev 
```
```terminal 2
cd web_server
npm install
node app/app.js
```
を打った後、localhost:3000/chat, localhost:3000/chat2 を開くと双方向通信ができます。
// npm install は初回のみ必要 

neutralが含まれたモデルを動かすためのコードは、_7とサフィックスされています。
実行にあたっては、該当のモデルの準備、transformersのバージョン変更をしたうえで、
```terminal 2
cd web_server
node app/app_7.js
```
を打ち込んでみてください。

それぞれのターミナルで出力がありますので、適宜動作確認できると思います。

# フォルダ説明

 - archive ... 訓練に使用したデータが入っています。train_***.txtは試しに学習する際に使いました。
 - enviroment ... 実行に必要な環境について書かれています。
 - text2emotion ... 文章から感情ベクトルを生成するモデルのための処理が集まっています。
    - train_text2emotion*.py ... modelの学習と保存を行います。実行前に working/model/ フォルダと、 working/tokenizer/ フォルダを生成しないと学習結果が保存されずにエラーが出ます。ファイルサイズの関係でgitignoreしているので、自分の環境で学習するか以下のリンクからモデルをダウンロードしてください。https://drive.google.com/drive/folders/184SoXCuATJA3eZ7HBhU2H79m-Lc8_KFY?usp=sharing
    - test_text2emotion*.py ... modelのテスト用コードです。入力が日本語のもの、英語のもの、複数文に対応しているもの、感情ベクトルにneutralが追加してあるもの、といろんな種類がありますがファイル名で判断できると思っています。
    - Stamp*.csv ... スタンプをサジェストするのに必要なデータです。
    - working* ... 自動でgitignoreされる、モデルを保存するためのフォルダです。学習する際は各自で作成してください。
 - web ... トークアプリを作成するためのコード群です。自動生成が大半なので、実行に関係あるフォルダだけ記述します。
    - assets, static ... 実行に必要な素材置き場です。
    - layouts/defaut.vue, pages ... 画面の表示、フォントファミリーの指定をしています。
    - server/index.js ... トークアプリでボタンを押したときの処理が書かれています。

 - web_server ... 主にアプリから来た文章を変換・整形するためのコードです。
    - app/app*.js ... 入力された文章をpythonに投げ、出力をもとに文章装飾をしています。
    - src/ ... pythonでベクトル変換をするのに必要なコードが入っています。_7のサフィックスはneutralが追加されたときのためのコードです。**学習済みモデルをこのフォルダに入れないと動きません。詳細はweb_server/src/text2emotion*.js 50行目付近を参考にしてください。**




