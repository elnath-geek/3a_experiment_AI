const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var ejs = require("ejs");
app.engine('ejs',ejs.renderFile);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//IDを設定
var myID = '01';
var f1ID = '02';

//会話格納用（スタンプや画像はまだ）
var Chats = [];

//  最初の挨拶
Chats.push({
    sender : f1ID,
    message : 'やあ！',
    vector: [ -2.0011816, -2.915759, 3.953413, 4.5045347, -1.828981, -3.1332562 ], // 6次元ベクトル
    style: {
        fontFamily: '',
        fontSize: '20px',
        color: 'red',
        background: 'linear-gradient(transparent 90%, #FC74EF 90%)', // love
    },
    timeStamp : getDateTime()
    });


// クライアントからgetされると会話全件をjsonで返す
app.get('/messages', (req, res) => {
    res.json(Chats);
});

// 会話内容がポストされれば、それを登録する
app.post('/messages', (req, res) => {
    var postData = req.body;

    Chats.push({
            sender : myID,
            message : postData.mess,
            vector: [ -2.0011816, -2.915759, 3.953413, 4.5045347, -1.828981, -3.1332562 ], // 6次元ベクトル
            style: {
                fontFamily: '',
                fontSize: '20px',
                color: 'black',
                background: 'linear-gradient(transparent 90%, #FC74EF 90%)',
            },
            timeStamp : getDateTime()
        })
        .then((postData) => {
            res.json(postData);
        })
        .catch((err) => {
            res.send(err);
        });
});

// （暫定）1秒ごとに新しいメッセージを検索する
var chatlen = 0
const timer = setInterval(function(){
    if(Chats.length>chatlen){
        chatlen = Chats.length
        if(Chats[chatlen-1].sender == '01'){
            msgFooking(Chats[chatlen-1].message);
        }
    }
},1000);

// （暫定）ECHOさんの処理
function msgFooking(msg){
    Chats.push({
        sender : f1ID,
        message : msg + "だね。",
        vector: [ -2.0011816, -2.915759, 3.953413, 4.5045347, -1.828981, -3.1332562 ], // 6次元ベクトル
        style: {
            fontFamily: '',
            fontSize: '20px',
            color: 'black',
            background: 'linear-gradient(transparent 90%, #FC74EF 90%)', // love
        },
        timeStamp : getDateTime()
    });
}

// ルートアクセス時にベースの画面を返す
// 友達の名前とそれぞれのIDをEJSでHTMLに埋め込む
app.get('/', (req, res) => {
  res.json({frendName: 'Bot' ,
         myidf: myID ,
         fiidf: f1ID });
});

// 日時の整形処理
function getDateTime(){
    var date = new Date();

    var year_str = date.getFullYear();
    var month_str = date.getMonth();
    var day_str = date.getDate();
    var hour_str = date.getHours();
    var minute_str = date.getMinutes();
    var second_str = date.getSeconds();

    month_str = ('0' + month_str).slice(-2);
    day_str = ('0' + day_str).slice(-2);
    hour_str = ('0' + hour_str).slice(-2);
    minute_str = ('0' + minute_str).slice(-2);
    second_str = ('0' + second_str).slice(-2);

    format_str = 'YYYY/MM/DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);
    format_str = format_str.replace(/ss/g, second_str);

    return format_str;

}

module.exports = {
  path: '/api',
  handler: app
}