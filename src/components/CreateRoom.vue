<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $route.name }} page</h1>'
        <h2>Admin</h2>
        <h2>User uid = {{$store.getters.user.id}}</h2>
        <v-form mb-3>
          <v-text-field v-model="title" id="title" label="Title" type="text" reaquired></v-text-field>
          <v-text-field v-model="imageSrc" id="imageSrc" label="Img" type="text" reaquired></v-text-field>
          <v-textarea
            v-model="description"
            id="description"
            label="Description"
            type="text"
            reaquired
          ></v-textarea>
          <v-text-field v-model="data" id="data" label="Date" type="date" reaquired></v-text-field>
          <v-text-field v-model="cost" id="cost" label="Cost" type="number" reaquired></v-text-field>
          <v-btn :loading="loading" @click="clickone" color="success">Submit data</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import * as fb from "firebase"
// var db = fb.firestore()
export default {
  name: "CreateRoom",
  data() {
    return {
      title: "Room #",
      description: "This is",
      data: new Date().toISOString().slice(0, 10),
      cost: 1000,
    }
  },
  methods: {
    clickone() {
      const article = {
        title: this.title,
        description: this.description,
        data: this.data,
        imageSrc: this.imageSrc,
        id: this.id,
        cost: this.cost,
      }
      this.$store
        .dispatch("createArticle", article)
        .then(() => {
          this.$router.push("/")
        })
        .catch(() => {})
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
  },
}
</script>
