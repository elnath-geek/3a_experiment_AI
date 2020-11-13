const express    = require('express');
const cors = require('cors')
const app        = express();
const bodyParser = require('body-parser');
const {PythonShell} = require('python-shell');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 3001; // port番号を指定

// GET http://localhost:3000/api/main
app.post('/api/main',function(req,res){
  // console.log(req.body.text)
  // console.log(unescape(req.body.text))
  const req_text = unescape(req.body.text)

  const pyshell = new PythonShell('./src/text2emotion.py');
  pyshell.send(req_text);
  pyshell.on('message', (ret)=>{
    console.log(ret);
    res.json({
      message: ret
    });
  })
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
