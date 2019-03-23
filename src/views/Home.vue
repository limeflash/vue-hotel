<template>
  <v-container grid-list-lg>
    <v-layout align-center justify-center row>
      <v-flex xs10 md12 lg12 sm10>
        <h1>{{ headText + " " + title1 }}</h1>
        <v-carousel color="green">
          <v-carousel-item v-for="article in articles" :key="article.id" :src="article.imageSrc">
            <v-layout align-center justify-center row fill-height>
              <v-btn large color="green" :to="'/article/' + article.id">{{ article.title }}</v-btn>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
        <v-flex ma-3>
          <p>{{ homeText1 }}</p>
          <p>{{ homeText2 }}</p>
        </v-flex>
        <home-card></home-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Misc from "@/mixins/Misc.js"
import Text from "@/mixins/Text.js"
export default {
  name: "Home",
  mixins: [Misc, Text],
  computed: {
    articles() {
      return this.$store.getters.articles
    },
    infos() {
      return this.$store.getters.infos
    },
  },
}
</script>
