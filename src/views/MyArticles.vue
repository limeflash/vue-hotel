<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-flex lg3 md3 ma-1 v-for="article of myArticles" :key="article.id">
        <v-card>
          <v-flex>
            <v-img :src="article.imageSrc" height="200px"></v-img>
          </v-flex>
          <v-card-title primary-title>
            <v-flex>
              <div>
                <h1 class="headline mb-1">{{article.title}}</h1>
                <div>{{article.description}}</div>
                <div>{{article.data}}</div>
                <div>
                  <h1>{{article.cost}}$</h1>
                </div>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-layout column>
              <v-btn :to="'/article/' + article.id">Open</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MyArticles",
  props: ["id"],
  computed: {
    myArticles() {
      return this.$store.getters.myArticles
    },
  },
}
</script>
