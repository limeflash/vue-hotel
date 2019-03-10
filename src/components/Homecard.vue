<template>
  <v-container grid-list-md text-xs-center>
    <v-layout 4 row wrap></v-layout>
  </v-container>
</template>

<script>
import Misc from "@/mixins/Misc.js"
export default {
  mixins: [Misc]
}
</script>

<style scoped>
.homeCard {
  background-color: green;
  width: 100px;
}
</style>
