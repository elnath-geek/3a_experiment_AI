<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container v-for="talk in talk_datum" :key="talk.sender">
        <v-card>
          <v-card-subtitle>
            <v-icon role="img">mdi-account</v-icon>
            {{ talk.sender }}
          </v-card-subtitle>
          <v-card-text class="textarea">
            <span v-for="message in talk.messages" :key="message.text" :style="message.style">
              {{message.text}}
              <!-- {{message.vector}} -->
            </span>
            <br>
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
        <!-- {{text}} -->
      </v-container>
    </v-col>
  </v-row>
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
              text: 'ここは日本語の文章。',
              vector: [1,1,1,1,1,1], // 6次元ベクトル
              style: {
                // font: 'default',
                fontSize: '14px',
                color: 'black',
              },
            },
            {
              text: 'ここまでが1人の発言。',
              vector: [1,1,1,1,1,1], // 6次元ベクトル
              style: {
                // font: 'default',
                fontSize: '20px',
                color: 'blue',
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
              vector: [1,1,1,1,1,1], // 6次元ベクトル
              style: {
                // font: 'default',
                fontSize: '14px',
                color: 'red',
              },
            },
            {
              text: 'サンプルデータだけでめんどい。',
              vector: [1,1,1,1,1,1], // 6次元ベクトル
              style: {
                // font: 'default',
                fontSize: '14px',
                color: 'black',
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
    }
  }
}
</script>
<style lang="scss" scoped>
.textarea{
  line-height: 1.5;
}
</style>
