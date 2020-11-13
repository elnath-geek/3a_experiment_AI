<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const response = await context.$axios.get('http://localhost:3000/api')
    return {
      message: response.data.message
    }
  }
}
</script>
