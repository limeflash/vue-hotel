<template>
  <div :title="title1" class="home">
    <h1>{{ headText + " " + title1 }}</h1>
    <home-card></home-card>
  </div>
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
