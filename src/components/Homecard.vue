<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="cardOne of cardOnes" :key="cardOne.id">
        <v-card>
          <v-img :src="cardOne.imageSrc" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{cardOne.title}}</h3>
              <div>{{cardOne.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat :to="'/cardOne/' + cardOne.id">Open</v-btn>
            <v-btn :disabled="!$store.getters.isUserLoggedIn" block class="primary">Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Misc from "@/mixins/Misc.js"
export default {
  mixins: [Misc],
  data() {
    return {
      cardOnes: [
        {
          title: "First card",
          description: "Hello i am description",
          imageSrc:
            "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2FSunrise-Image-Pictures.jpg&f=1",
          id: "123"
        },
        {
          title: "Second card",
          description: "Hello i am description",
          imageSrc:
            "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.francetvinfo.fr%2Fimage%2F759m0z183-6a26%2F1500%2F843%2F8522307.jpg&f=1",
          id: "1234"
        },
        {
          title: "Third card",
          description: "Hello i am description",
          imageSrc:
            "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.pratique.fr%2Fimages%2Funsized%2Fre%2Frenard-2-0.jpg&f=1",
          id: "12345"
        }
      ]
    }
  }
}
</script>

<style scoped>
.homeCard {
  background-color: green;
  width: 100px;
}
</style>
