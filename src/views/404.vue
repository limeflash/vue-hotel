<template>
  <div class="404">
    <h1>Please do not enter this error page! It make you error!</h1>
    <router-link to="/">Go back to home</router-link>
    <div id="errBlock"></div>
    {{ evilFun() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "'/public/download.jpeg'"
    }
  },
  methods: {
    evilFun: () => {
      for (let i = 0; i < 1000; i++) {
        var eField = document.getElementById("errBlock").createELement("div")
        return eField
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
