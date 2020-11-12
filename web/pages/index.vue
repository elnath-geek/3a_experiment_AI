<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-for="talk in talk_datum" :key="talk">
        <v-card-subtitle>{{ talk.sender }}</v-card-subtitle>
        <v-card-text>
          <span v-for="message in talk.messages" :key="message" :style="message.style">
            {{message.text}}
          </span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
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
                font_size: '14px',
                color: 'black',
              },
              text: 'ここまでが1人の発言。',
              vector: [1,1,1,1,1,1], // 6次元ベクトル
              style: {
                // font: 'default',
                font_size: '20px',
                color: 'blue',
              },
            }
          ]
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
              text: 'サンプルデータだけでめんどい。',
              vector: [1,1,1,1,1,1], // 6次元ベクトル
              style: {
                // font: 'default',
                font_size: '14px',
                color: 'black',
              },
            }
          ]
        }
      ]
    }
  }
}
</script>
