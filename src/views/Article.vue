<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="article.imageSrc" height="370"></v-img>
          <v-card-text>
            <h1 class="text--primary">{{article.title}}</h1>
            <p>{{article.description}}</p>
            <h1>{{article.cost}}$</h1>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-if="$store.getters.isUserLoggedIn && $store.getters.user.id == 'GVULyMdrfqUndt7bhZ11VVis3Cm1'"
              @click="clickone"
              class="error"
              flat
            >Remove</v-btn>
            <v-btn :disabled="!$store.getters.isUserLoggedIn" class="success">Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import * as fb from "firebase"

export default {
  props: ["id"],
  computed: {
    article() {
      const id = this.id
      return this.$store.getters.articlesById(id)
    },
  },
  methods: {
    clickone() {
      const article = {
        title: this.title,
        description: this.description,
        imageSrc: this.imageSrc,
        id: this.id,
        data: this.data,
        cost: this.cost,
      }
      this.$store
        .dispatch("removeArticle", article)
        .then(() => {
          this.$router.push("/")
        })
        .catch(() => {})
    },
  },
}
</script>
