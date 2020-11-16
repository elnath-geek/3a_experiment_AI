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
              <span v-for="message in talk.messages"
              :key="message.text"
              :style="message.style"
              :class="message.class">
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
              class: 'sadness',
              style: {
                fontFamily: "851チカラヨワク",
                fontSize: '16px',
                color: 'black',
                background: 'linear-gradient(transparent 90%, #FC74EF 90%)', // love
              },
            },
            {
              text: 'なんていうと思ったか！',
              vector: [6.4704595,0.056090813,-0.72478443,-2.3732667,-0.2728797,-1.33733], // 6次元ベクトル
              style: {
                fontFamily: 'メイリオ',
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

.sadness {
  font-family: '851チカラヨワク';
}
</style>
