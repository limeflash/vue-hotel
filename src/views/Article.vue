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
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn :disabled="!$store.getters.isUserLoggedIn" class="success">Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    article() {
      const id = this.id
      return this.$store.getters.articlesById(id)
    },
  },
}
</script>
