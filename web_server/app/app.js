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
  'linear-gradient(transparent 90%, #DB5A32 90%)', // anger
  'linear-gradient(transparent 90%, #CE7FFA 90%)', // fear
  'linear-gradient(transparent 90%, #F4EA5B 90%)', // joy
  'linear-gradient(transparent 90%, #FC74EF 90%)', // love
  'linear-gradient(transparent 90%, #526CFF 90%)', // sadness
  'linear-gradient(transparent 90%, #62D96E 90%)', // surprize
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
    style.fontSize = Math.round(14 + 1.2*(max_vec_val - 3)) + 'px';
    style.background = background_style[max_val_index]
  }
  if(max_vec_val > 5){ // fontFamily 変えるのどうしよう…
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

    const return_data = {
      sender: 'Alice',
      background_color: 'default',
      messages: [],
    }

    const pyshell = new PythonShell('./src/text2emotion.py');
    let receive_buffer = ''
    pyshell.send(en_sentence);
    pyshell.on('message', (python_out)=>{
      // console.log(python_out);
      if( python_out == 'end' ){

        res.status(200).send(return_data)
      } else if('vec_end') {
        vector = receive_buffer.split(',').map(Number)
        console.log(vector)
        for(let i=0; i<ja_split_sentence.length; i++) {
          return_data.messages.push({
            text: ja_split_sentence[i],
            vector: vector.slice(i*6, (i+1)*6), // 6次元ベクトル
            style: styleGen(vector.slice(i*6, (i+1)*6)),
          })
        }
      } else {
        receive_buffer += python_out
      }
    })
  }).catch( err => {
    console.log(err)
  })
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
