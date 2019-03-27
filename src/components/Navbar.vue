<template>
  <div class="login">
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
        <!-- <v-btn :color="colorWhite" flat :to="{ name: 'Contact' }">Contact-us</v-btn> -->
        <v-btn
          v-if="$store.getters.isUserLoggedIn"
          :color="colorWhite"
          flat
          :to="{ name: 'MyArticles' }"
        >Our hotel rooms</v-btn>
        <v-btn
          :color="colorWhite"
          v-if="$store.getters.isUserLoggedIn && $store.getters.user.id == 'GVULyMdrfqUndt7bhZ11VVis3Cm1'"
          flat
          :to="{ name: 'CreateRoom' }"
        >Create rooms</v-btn>
      </v-toolbar-items>
      <div class="auth" v-if="!this.$store.getters.isUserLoggedIn">
        <v-btn
          :to="{ name: 'Registration' }"
          :color="colorLightGreen"
          class="subheading font-weight-bold"
        >Registration</v-btn>
        <v-btn
          :to="{ name: 'Login' }"
          :color="colorLightGreen"
          class="subheading font-weight-bold"
        >Login</v-btn>
      </div>
      <div class="auth" v-if="this.$store.getters.isUserLoggedIn">
        <v-btn @click="onLogout()" :color="colorLightGreen" class="subheading font-weight-bold">
          <v-flex>
            Log-out
            <i class="fas fa-sign-out-alt"></i>
          </v-flex>
        </v-btn>
      </div>
    </v-toolbar>
  </div>
</template>
<script>
import Colors from "@/mixins/Colors.js"
export default {
  mixins: [Colors],
  props: ["title"],
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser")
      this.$router.push("/")
    },
  },
}
</script>
<style scoped>
h1 {
  color: white;
}
</style>
