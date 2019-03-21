<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $route.name }} page</h1>'
        <v-form v-if="$store.getters.isUserLoggedIn">
          <v-text-field v-model="title" id="title" label="title" type="text" reaquired></v-text-field>
          <v-btn @click="clickone" color="success">Submit data</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import * as fb from "firebase"
var db = fb.firestore()
export default {
  name: "CreateRoom",
  data() {
    return {
        title: "",
        description: "",
        data: 2019
    }
  },
  methods: {
    clickone() {
      db.collection("article")
        .add({
          title: this.title,
          description: this.description,
          data: this.data
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id)
        })
        .catch(function(error) {
          console.error("Error adding document: ", error)
        })
    }
  }
}
</script>
