const express    = require('express');
const cors       = require('cors')
const app        = express();
const bodyParser = require('body-parser');
const {PythonShell} = require('python-shell');
const { text } = require('body-parser');
const axios = require('axios')
const qs = require("qs");

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 3001; // port番号を指定

function translate(text) {
  const url = 'https://script.google.com/macros/s/AKfycbwjPPfA-Br7ykp0wkujue6_STL3k9U8nYt1n_2XXOHXR_FpBmwo/exec'
  const params = qs.stringify({'text': text, 'source': 'ja', 'target': 'en'})
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  axios.get(url, params, headers).then(res => {
    console.log(res.data)
    rlist = res.data.split(/.*?[.!?]/)
    return rlist
  }).catch( err => {
    console.log(err)
  })
}

// GET http://localhost:3000/api/main
app.post('/api/main',function(req,res){
  console.log(req.body.text)

  const ja_sentence = req.body.text
  const ja_split_sentence = ja_sentence.split(/[。！？!?]/)
  console.log(ja_split_sentence)
  const en_sentence = translate(ja_sentence)
  console.log(en_sentence)

  // const pyshell = new PythonShell('./src/text2emotion.py');
  // pyshell.send(en_sentence);
  // pyshell.on('message', (ret)=>{
  //   console.log(ret);
  //   res.json({
  //     message: ret
  //   });
  // })
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
