<template>
  <p class="btn">Hello World</p>
</template>

<script>
const axios = require('axios')

export default {
  name: 'MainPage',
  methods: {
    doSomething() {
      axios.post('http://localhost:3000/upload/').then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
  }
}
</script>

<style>

</style>