<template>
  <v-toolbar :color="colorGreen">
    <a href="/">
      <v-icon :color="colorLightGreen">fa fa-home</v-icon>
    </a>
    <v-toolbar-title>
      <h1 class="title font-weight-black" :color="colorWhite">{{ title }}</h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn icon>
        <v-icon :color="colorWhite">fa fa-search</v-icon>
      </v-btn>
      <v-btn :color="colorWhite" flat to="/">Home</v-btn>
      <v-btn :color="colorWhite" flat :to="{ name: 'About' }">About</v-btn>
      <v-btn :color="colorWhite" flat :to="{ name: 'Contact' }"
        >Contact-us</v-btn
      >
    </v-toolbar-items>
    <v-auth>
      <v-btn :color="colorLightGreen" class="subheading font-weight-bold"
        >Registration</v-btn
      >
      <v-btn :color="colorLightGreen" class="subheading font-weight-bold"
        >Login</v-btn
      >
    </v-auth>
  </v-toolbar>
</template>
<script>
import Colors from "@/mixins/Colors.js"
export default {
  mixins: [Colors],
  props: ["title"]
}
</script>
<style scoped>
h1 {
  color: white;
}
</style>
