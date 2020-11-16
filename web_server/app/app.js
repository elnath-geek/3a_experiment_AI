const express    = require('express');
const cors       = require('cors')
const app        = express();
const bodyParser = require('body-parser');
const {PythonShell} = require('python-shell');
const { text } = require('body-parser');
const axios = require('axios')

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 3001; // port番号を指定

const background_style = [
  'linear-gradient(transparent 90%, #E0422D 90%)', // anger
  'linear-gradient(transparent 90%, #CE7FFA 90%)', // fear
  'linear-gradient(transparent 90%, #F4EA5B 90%)', // joy
  'linear-gradient(transparent 90%, #FC74EF 90%)', // love
  'linear-gradient(transparent 90%, #526CFF 90%)', // sadness
  'linear-gradient(transparent 90%, #62D96E 90%)', // surprize
]

const fontfamily_style = [
  'anger', // anger
  'fear', // fear
  'joy', // joy
  'love', // love
  'sadness', // sadness
  'surprize', // surprize
]

function styleGen(vector) {
  const style = {
    fontFamily: '',
    fontSize: '14px',
    color: 'black',
    background: '',
  }
  const max_vec_val = vector.reduce((a,b) => {return Math.max(a,b)})
  const max_val_index = vector.indexOf(max_vec_val)
  if(max_vec_val > 3){
    style.fontSize = Math.round(14 + 1.5*(max_vec_val - 3)) + 'px';
    style.background = background_style[max_val_index]
  }
  if(max_vec_val > 2){
    style.fontFamily = fontfamily_style[max_val_index]
  }

  return style
}

// GET http://localhost:3000/api/main
app.post('/api/main',function(req,res){
  console.log(req.body.text)
  const url = 'https://script.google.com/macros/s/AKfycbwjPPfA-Br7ykp0wkujue6_STL3k9U8nYt1n_2XXOHXR_FpBmwo/exec'

  const ja_sentence = req.body.text
  const ja_split_sentence = ja_sentence.split(/(?<=[。！？!?])/)
  // console.log(ja_split_sentence)

  axios.get(url, {
    params: {
      text: ja_sentence,
      source: "ja",
      target: "en",
    }
  }).then(translate_data => {
    const en_sentence = translate_data.data.text
    // console.log("en_sentence", en_sentence)

    const return_data = []

    const pyshell = new PythonShell('./src/text2emotion.py');
    let receive_buffer = ""
    pyshell.send(en_sentence);
    pyshell.on('message', (python_out)=>{
      console.log(python_out);
      if( python_out == 'end' ){
        image_array = receive_buffer.split(" ")
        console.log(image_array)
        for(let i=0; i<ja_split_sentence.length; i++) {
          return_data[i].stamps = image_array.slice(i*3, (i+1)*3)
        }
        res.status(200).send(return_data)
      } else if( python_out == 'vec_end') {
        vector = receive_buffer.split(',').map(Number)
        console.log(vector)
        for(let i=0; i<ja_split_sentence.length; i++) {
          return_data.push({
            sender: req.body.sender,
            message: ja_split_sentence[i],
            vector: vector.slice(i*6, (i+1)*6), // 6次元ベクトル
            style: styleGen(vector.slice(i*6, (i+1)*6)),
            stamps: [],
            timeStamp: getDateTime(),
          })
        }
        receive_buffer = ''
      } else {
        receive_buffer += python_out
      }
    })
  }).catch( err => {
    console.log(err)
  })
});

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

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
