<template>
  <v-app light>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
.anger {
  font-family: 'とがりて';
}
.fear {
  font-family: 'はきだめ';
}
.joy {
  font-family: 'けいおん';
}
.love {
  font-family: 'りいポップ';
}
.sadness {
  font-family: '851チカラヨワク';
}
.surprize {
  font-family: 'GNkill';
}
</style>
