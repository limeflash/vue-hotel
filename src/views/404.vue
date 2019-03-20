<template>
  <div class="404">
    <v-layout>
      <v-flex>
        <v-layout row wrap>
          <v-img
            src="https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg"
            aspect-ratio="4"
          ></v-img>
        </v-layout>
        <h1>Please do not enter this error page! It make you error!</h1>
        <v-btn class="white--text" color="red" to="/">GO HOME</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Colors from "@/mixins/Colors.js"
export default {
  name: "404",
  mixins: [Colors]
}
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
h1 {
  color: red;
}
</style>
