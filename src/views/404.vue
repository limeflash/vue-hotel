<template>
  <div class="404">
    <h1>Please do not enter this error page! It make you error!</h1>
    <v-btn block class="white--text" :color="colorGreen" to="/">GO HOME</v-btn>
  </div>
</template>

<script>
import Colors from "@/mixins/Colors.js"
export default {
  mixins: [Colors]
}
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
