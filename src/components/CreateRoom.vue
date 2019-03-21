<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $route.name }} page</h1>'
        <h2
          v-if="$store.getters.isUserLoggedIn && $store.getters.user.id == 'FWOzZPgZnAfFQEwEfqeR0rQHQmV2'"
        >Admin</h2>
        <h2>User uid = {{$store.getters.user.id}}</h2>
        <v-form
          mb-3
          v-if="$store.getters.isUserLoggedIn && $store.getters.user.id == 'FWOzZPgZnAfFQEwEfqeR0rQHQmV2'"
        >
          <v-text-field v-model="title" id="title" label="Title" type="text" reaquired></v-text-field>
          <v-textarea
            v-model="description"
            id="description"
            label="Description"
            type="text"
            reaquired
          ></v-textarea>
          <v-text-field v-model="data" id="data" label="Date" type="date" reaquired></v-text-field>
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
      data: new Date().toISOString().slice(0, 10)
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
