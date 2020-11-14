<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-container v-for="talk in talk_datum" :key="talk.sender">
          <v-card>
            <v-card-subtitle>
              <v-icon role="img">mdi-account</v-icon>
              {{ talk.sender }}
            </v-card-subtitle>
            <v-card-text>
              <span v-for="message in talk.messages" :key="message.text" :style="message.style">
                {{message.text}}
              </span>
            </v-card-text>
          </v-card>
        </v-container>
        <v-container>
          <v-textarea
            auto-grow
            rows="1"
            v-model="text"
            placeholder="ここに入力してください"
            @keydown.enter.ctrl="submit"></v-textarea>
          {{text}}
        </v-container>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  Components: {
    Logo,
  },
  data() {
    return {
      text: '',
      talk_datum: [
        {
          sender: 'Alice',
          background_color: 'default',
          messages: [
            {
              text: '好きだよ！',
              vector: [ -2.0011816, -2.915759, 3.953413, 4.5045347, -1.828981, -3.1332562 ], // 6次元ベクトル
              style: {
                fontFamily: '',
                fontSize: '16px',
                color: 'black',
                background: 'linear-gradient(transparent 90%, #FC74EF 90%)', // love
              },
            },
            {
              text: 'なんていうと思ったか！',
              vector: [6.4704595,0.056090813,-0.72478443,-2.3732667,-0.2728797,-1.33733], // 6次元ベクトル
              style: {
                fontFamily: '',
                fontSize: '18px',
                color: 'black',
                background: 'linear-gradient(transparent 90%, #E0422D 90%)', // anger
              },
            },
          ],
        },
        {
          sender: 'Bob',
          background_color: 'default',
          messages: [
            {
              text: '１文ごとにstyleの設定が必要。',
              vector: [4.5369635,1.2375491,-0.29684916,-2.321845,0.5516241,-2.8189578,7.7515764], // 6次元ベクトル
              style: {
                fontFamily: '',
                fontSize: '16px',
                color: 'black',
                background: 'linear-gradient(transparent 90%, #E0422D 90%)', // anger
              },
            },
            {
              text: 'サンプルデータだけでめんどい。',
              vector: [7.751577, -0.7661498, -1.3227923, -1.7455888, -1.062233, -1.2605869], // 6次元ベクトル
              style: {
                fontFamily: '',
                fontSize: '20px',
                color: 'black',
                background: 'linear-gradient(transparent 90%, #E0422D 90%)', // anger
              },
            }
          ]
        }
      ]
    }
  },
  methods: {
    submit(){
      console.log(this.text)

      axios.post('http://localhost:3001/api/main', {
        text: this.text,
      })
      .then((res) =>{
        console.log(res.data)
        this.talk_datum.push(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      this.text = ''
    }
  }
}
</script>
<style lang="scss" scoped>
    .textarea{
      position: fixed;
      bottom: 20px;
    }


    #your_container{
        /* 高さや幅など、好きな様に設定
        bms_messages_containerの方で、縦横いっぱいに広がってくれるので、
        ここで充てた高さと横幅がそのままスタイルになる仕組み */

        height:600px;/*ここはご自由に*/
        width: 50%;/*ここはご自由に*/
    }
    /* チャットの外側部分① */
    #bms_messages_container{
        height: 100%;/*your_containerに対して100%になる */
        width: 100%;/*your_containerに対して100%になる */
        background-color: #eee;
    }

    /* ヘッダー部分② */
    #bms_chat_header {
        padding: 6px;/*隙間調整*/
        font-size: 16px;
        height: 34px;
        background: #ddd;
        border: 1px solid #ccc;
    }
        /* ステータスマークとユーザー名 */
        #bms_chat_user_status {
            float: left;/* bms_chat_headerに対して左寄せ */
        }
        /* ステータスマーク */
        #bms_status_icon {
            float: left;/* bms_chat_user_statusに対して左寄せ */
            line-height: 2em;/*高さ調整*/
        }
        /* ユーザー名 */
        #bms_chat_user_name {
            float: left;/* bms_chat_user_statusに対して左寄せ */
            line-height: 2em;/*高さ調整*/
            padding-left: 8px;
        }

    /* タイムライン部分③ */
    #bms_messages {
        overflow: auto;/* スクロールを効かせつつ、メッセージがタイムラインの外に出ないようにする */
        height:100%;/*テキストエリアが下に張り付く様にする*/
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        background-color: #eee;
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2) inset;/*ヘッダーの下に影を入れる*/
    }
        /* メッセージ全般のスタイル */
        .bms_message {
            margin: 0px;
            padding: 0 14px;/*吹き出しがタイムラインの側面にひっつかない様に隙間を開ける*/
            font-size: 16px;
            word-wrap: break-word;/* 吹き出し内で自動で改行 */
            white-space: normal;/*指定widthに合わせて、文字を自動的に改行*/
        }
            .bms_message_box{
                margin-top: 20px;/*上下の吹き出しがひっつかない様に隙間を入れる*/
                max-width: 100%;/*文字が長くなった時に吹き出しがタイムラインからはみ出さない様にする*/
                font-size: 16px;
            }
                .bms_message_content{
                    padding: 20px;/*文字や画像（コンテンツ）の外側に隙間を入れる*/
                }
            /* メッセージ１（左側） */
            .bms_left {
                float: left;/*吹き出しをbms_messagesに対して左寄せ*/
                line-height: 1.3em;
            }
                .bms_left .bms_message_box {
                    color: #333;/*テキストを黒にする*/
                    background: #fff;
                    border: 2px solid #13178E;
                    border-radius: 30px 30px 30px 0px;/*左下だけ尖らせて吹き出し感を出す*/
                    margin-right: 50px;/*左側の発言だとわかる様に、吹き出し右側に隙間を入れる*/
                }
            /* メッセージ２（右側） */
            .bms_right {
                float: right;/*吹き出しをbms_messagesに対して右寄せ*/
                line-height: 1.3em;
            }
                .bms_right .bms_message_box {
                    color: #fff;/*テキストを白にする*/
                    background: #13178E;
                    border: 2px solid #13178E;
                    border-radius: 30px 30px 0px 30px;/*右下だけ尖らせて吹き出し感を出す*/
                    margin-left: 50px;/*右側の発言だとわかる様に、吹き出し左側に隙間を入れる*/
                }
            /* 回り込みを解除 */
            .bms_clear {
                clear: both; /* 左メッセージと右メッセージの回り込み(float)の効果の干渉を防ぐために必要（これが無いと、自分より下のメッセージにfloatが影響する） */
            }

    /* テキストエリア、送信ボタン④ */
    #bms_send {
        background-color:#eee;/*タイムラインの色と同じにする*/
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        height: 48px;
        padding: 4px;
    }
        #bms_send_message{
            width: calc(100% - 75px);/*常に送信ボタンの横幅を引いたサイズに動的に計算*/
            line-height: 16px;
            height: 48px;
            padding: 14px 6px 0px 6px;/*文字がテキストエリアの中心になる様に隙間調整*/
            border: 1px solid #ccc;
            border-radius: 4px;/*角丸*/
            text-align: left;/*文字を左寄せ*/
            box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.2) inset;/*内側に影を入れてテキストエリアらしくした*/
            box-sizing: border-box;/*paddingとborderの要素の高さと幅の影響をなくす（要素に高さと幅を含める）*/

        }
        #bms_send_btn {
            width: 72px;
            height: 48px;
            font-size: 16px;
            line-height: 3em;
            float: right;/*bms_sendに対して右寄せ*/
            color: #fff;
            font-weight: bold;
            background: #bcbcbc;
            text-align: center;/*文字をボタン中央に表示*/
            border: 1px solid #bbb;
            border-radius: 4px;/*角丸*/
            box-sizing: border-box;/*paddingとborderの要素の高さと幅の影響をなくす（要素に高さと幅を含める）*/
        }
        #bms_send_btn:hover {
            background: #13178E; /*マウスポインタを当てた時にアクティブな色になる*/
            cursor: pointer;/*マウスポインタを当てた時に、カーソルが指の形になる*/
        }
</style>
