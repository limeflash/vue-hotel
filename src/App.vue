<template>
  <v-app>
    <v-parallax
      height="300"
      alt="parallax_cover"
      src="http://villa-edem.ru/wp-content/themes/your-clean-template/img/slide1.jpg"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-3 font-weight-bold">«{{ title1 }}»</h1>
        <h4 class="title">{{ subTitle1 }}</h4>
      </v-layout>
    </v-parallax>
    <nav-bar :title="title1"></nav-bar>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    <footer-side></footer-side>
  </v-app>
</template>
<script>
import Misc from "@/mixins/Misc.js"
export default {
  mixins: [Misc]
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
