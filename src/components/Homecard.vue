<template>
  <v-container frid-list-lg>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md4 sm5 lg3 v-for="article of articles" :key="article.id">
        <v-card>
          <v-flex>
            <v-img :src="article.imageSrc" height="200px"></v-img>
          </v-flex>
          <v-card-title primary-title>
            <v-flex>
              <div>
                <h3 class="headline mb-0">{{article.title}}</h3>
                <div>{{article.description}}</div>
                <div>{{article.data}}</div>
                <div>
                  <h1>{{article.cost}}$</h1>
                </div>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-flex>
              <v-layout>
                <v-btn :to="'/home/' + article.id">Open</v-btn>
                <v-btn :disabled="!$store.getters.isUserLoggedIn" block class="primary">Order</v-btn>
              </v-layout>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import * as fb from "firebase"
// var db = fb.firestore()
import Misc from "@/mixins/Misc.js"
export default {
  props: ["id"],
  mixins: [Misc],
  computed: {
    articles() {
      return this.$store.getters.articles
    },
  },
}
</script>

<style scoped>
.homeCard {
  background-color: green;
  width: 100px;
}
</style>
