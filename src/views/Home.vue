<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ headText + " " + title1 }}</h1>
        <v-img
          :src="
            'http://villa-edem.com/userfiles/image/img_top/IMG_7319_cr1401373290.jpg'
          "
        ></v-img>
        <v-flex>
          <div>
            <p>{{ homeText1 }}</p>
            <p>{{ homeText2 }}</p>
          </div>
        </v-flex>
        <h1>Order</h1>
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
  mixins: [Misc, Text]
}
</script>
