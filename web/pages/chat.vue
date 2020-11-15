<template>
  <div>
    <head>
        <title>Chat App</title>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
        <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
        <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <div class="base_view ">
            <div class="title">
                {{ friendName }}さん
            </div>
            <div id="area" class="contents scroll">
            </div>
        </div>
            <div class="form-group" >
              <table>
                    <tr>
                        <td>
                            <input id="inp" type="text" name="name" class="newMessage form-control" autocomplete="nope" @keydown.enter.ctrl="pushMessage()">
                        </td>
                        <td width=80px>
                            <button type="submit" class="button" v-on:click="pushMessage()" >送信</button>
                        </td>
                    </tr>
                </table>
            </div>
    </body>
  </div>
</template>

<script>
export default {

  data() {
    return {
      friendName:null,
      myid:null,
      f1id:null,
      intervalID:null
    }
    },
    methods:{
        render(getJsonData){
          console.log('render')
          document.getElementById('area').innerHTML = '';
          for(var i in getJsonData){
              if(getJsonData[i].sender==this.myid){
                  var cts ="";

                  cts =  "<div class='myText'>";
                  cts += "  <div class='text'>"+ getJsonData[i].message + "</div>";
                  cts += "  <div class='date'>"+ getJsonData[i].timeStamp + "</div>";
                  cts += "</div>";
                  $('.contents').append(cts);
              } else {
                  var cts ="";
                  cts =  "<div class='flText'>"; 
                  cts += "  <figure><img src='images/" + this.f1id + ".jpg'/></figure>";
                  cts += "  <div class='flText-text'>";
                  cts += "    <div class='text'><span style='color:" + getJsonData[i].style.color + ";font-size:"+getJsonData[i].style.fontSize+";background:"+getJsonData[i].style.background+";'>"+ getJsonData[i].message + "</span></div>";
                  cts += "    <div class='date'>"+ getJsonData[i].timeStamp + "</div>";
                  cts += "  </div>";
                  cts += "</div>";
                  $('.contents').append(cts);
              }
          }
          var obj = document.getElementById('area');
          obj.scrollTop = document.getElementById('area').scrollHeight;

        },

        getMessages(){   
          console.log('getMessages')
          fetch('/api/messages')
              .then((data) => data.json())
              .then((json) => {
                  var getJsonData = json;
                  this.render(getJsonData);
              });
        },
        
        pushMessage(){
          console.log('pushMessage')
          var text = $(".newMessage").val();
          if (text !=''){
              fetch('/api/messages', {
                  method:"POST",
                  headers: {'Content-Type': 'application/json',},
                  body: JSON.stringify({sender:this.myid, mess: text}),
              })
              .then(() => {
                  this.getMessages();
                  document.getElementById('inp').value="";
              });
              
          }
        },
        setTimer(intervalTime) {
            var self = this;
            this.intervalID = setInterval(function(){self.getMessages()}, intervalTime);
        },
        beforeDestroy() {
          clearInterval(this.intervalID);
        }
    },
    mounted() {
      fetch('/api')
      .then( response => response.json())
      .then( jsonData => {this.friendName=jsonData.userID2;
                        this.myid=jsonData.userID1;
                        this.f1id=jsonData.userID2;
                        });
      this.getMessages()
      console.log('mounted')
      this.setTimer(3000);
    }
}
</script>

<style>
/* ベース部分 */
.base_view {
  padding:0;
  background: #729dda;
  overflow: hidden;
  margin: 20px auto;
  font-size: 80%;
}

/* タイトル部分 */
.base_view .title {
  background: #1b313f;
  padding: 10px;
  text-align: center;
  font-size: 150%;
  color: white;
}

/* 会話部分 */
.base_view .contents{
  padding: 10px;
  overflow: hidden;
  line-height: 135%;
}
  
.base_view .scroll {
  height: 400px;
  overflow-y: scroll;
}
  
/* 自分の会話 */
.base_view .myText {
  position: relative;
  display: block;
  margin: 5px 0;
  max-width: 75%;
  float: right;
  margin-right: 15px;
  clear: both;
}

/* 会話文 自分用*/
.base_view .myText .text {
  padding: 10px;
  border-radius: 20px;
  background-color: #81da45;
  margin: 0;
  margin-left: 80px;
}

/* 吹き出し 自分用*/
.base_view .myText .text::after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: -10px;
  top: 10px;
  border-left: 20px solid #81da45;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
 
/* 時刻自分用 */
.base_view .myText .date {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  text-align: right;
  left: -30px;
  bottom: 0px;
  font-size: 80%;
  color: white;
}



 /* 相手の会話 */
.base_view .flText {
  width: 100%;
  position: relative;
  display: block;
  margin-bottom: 5px;
  max-width: calc(100% - 120px);;
  clear: both;
}

/* アイコン */
.base_view .flText figure {
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}

/* 丸く切り抜く */
.base_view .flText figure img{
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

/* テキスト相手用 */
.base_view .flText .flText-text {
  float: left;
  margin-left: 70px;
}

.base_view .flText .flText-text .name {
  font-size: 80%;
  color: white;
}

/* 会話文相手用 */
.base_view .flText .text {
  margin: 0;
  position: relative;
  padding: 10px;
  border-radius: 20px;
  background-color: white;
}


/* 吹き出し相手用 */
.base_view .flText .text::after {
  content: '';
  position: absolute;
  display: block;
  width: 20;
  height: 0;
  left: -10px;
  top: 10px;
  border-right: 20px solid white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

/* 時刻相手用 */
.base_view .flText .date {
  content: '';
  position: relative;
  display: block;
  width: 100px;
  text-align: right;
  top: -20px;
  left: 100%;
  bottom: 0px;
  font-size: 80%;
  color: white;
}

 .form-group {
  background-color: white;
 }

</style>
