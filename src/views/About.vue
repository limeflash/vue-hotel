<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $route.name }} page</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Text from "@/mixins/Text.js"
export default {
  name: "About",
  mixins: [Text]
}
</script>
