const express = require('express')
const cors       = require('cors')
const app = express()
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors())
var fs = require('fs');
const axios = require('axios')

var user1 = 'Wraith';
var user2 = 'Pathfinder';

var Chats = [];

//bot処理
/*
Chats.push({
    sender : user2,
    message : 'やあ！',
    vector: [ -2.0011816, -2.915759, 3.953413, 4.5045347, -1.828981, -3.1332562 ], // 6次元ベクトル
    style: {
        fontFamily: '',
        fontSize: '12px',
        color: 'red',
        background: 'linear-gradient(transparent 90%, #FC74EF 90%)', // love
    },
    timeStamp : getDateTime()
    });

var chatlen = 0
const timer = setInterval(function(){
    if(Chats.length>chatlen){
        chatlen = Chats.length
        if(Chats[chatlen-1].sender == user1){
            msgFooking(Chats[chatlen-1].message);
        }
    }
},1000);

function msgFooking(msg){
    Chats.push({
        sender : user2,
        message : msg + "だね。",
        vector: [ -2.0011816, -2.915759, 3.953413, 4.5045347, -1.828981, -3.1332562 ], // 6次元ベクトル
        style: {
            fontFamily: '',
            fontSize: '12px',
            color: 'black',
            background: 'linear-gradient(transparent 90%, #FC74EF 90%)', // love
        },
        timeStamp : getDateTime()
    });
}
//bot
*/

// クライアントに会話を返す
app.get('/messages', (req, res) => {
    res.json(Chats);
});

// 会話を登録
app.post('/messages', (req, res) => {
    var postData = req.body;
    console.log(postData)

    axios.post('http://localhost:3001/api/main', {
      text: postData.mess,
      sender: postData.sender
    })
    .then((ret) =>{
      console.log(ret.data)
      ret.data.map( data => {
        Chats.push(data)
      })
      res.json(postData);
    })
    .catch((err) => {
      console.log(err)
    })

});

// スタンプ一覧を返す
app.get('/stamps', (req, res) => {
	const stampDirPath = process.cwd()+'/static/images/stamps';
	fs.readdir(stampDirPath, (err, files) => {
	res.json(files);
  });
});

app.get('/stamps/suggested', (req, res) => {
  let stamps = ['mark_manpu15_shock.png','mark_face_jito.png']
	res.json(stamps);
});
// 提案されたスタンプ一覧を返す
app.post('/stamps/suggested', (req, res) => {
  // console.log(req.body.sender)
  // console.log(Chats)
  let stamps = []
  for(let i=Chats.length-1; i>=0; i--){
    if(Chats[i].sender == req.body.sender){
      stamps = Chats[i].stamps
      break;
    }
  }
  res.send(stamps);
});

// スタンプを登録
app.post('/messages/stamp', (req, res) => {
    var postData = req.body;
    Chats.push({
            sender : postData.sender,
            stampTitle : postData.stamp,
            timeStamp : getDateTime()
        })
    res.json(postData);
});

// 初期情報
app.get('/', (req, res) => {
  res.json({
         userID1: user1 ,
         userID2: user2 });
});

//日時取得
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
