<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $route.name }} page</h1>'
        <h2>Admin</h2>
        <h2>User uid = {{$store.getters.user.id}}</h2>
        <v-form mb-3>
          <v-text-field
            v-model="title"
            id="title"
            label="Title (example: Room #12)"
            type="text"
            reaquired
          ></v-text-field>
          <v-layout row>
            <v-text-field
              v-model="imageSrc"
              id="imageSrc"
              label="Img url (example: http://example.jpg)"
              type="text"
              reaquired
            ></v-text-field>
            <h3>or</h3>
            <v-btn color="green" class="white--text" @click="triggerUpload">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display:none;"
              accept="image/*"
              @change="onFileChange"
            >
            <v-flex>
              <img :src="imageSrc" height="100" v-if="imageSrc">
            </v-flex>
          </v-layout>
          <v-textarea
            v-model="description"
            id="description"
            label="Enter some description here"
            type="text"
            counter
          ></v-textarea>
          <v-text-field v-model="data" id="data" label="Date" type="date" reaquired></v-text-field>
          <v-layout>
            <v-text-field
              v-model="cost"
              id="cost"
              label="Cost (example: 1000)"
              type="number"
              @input="$v.cost.$touch()"
              @blur="$v.cost.$touch()"
              reaquired
            ></v-text-field>
            <h1>$</h1>
          </v-layout>
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
// import { required, maxLength } from "vuelidate/lib/validators"
export default {
  name: "CreateRoom",
  data() {
    return {
      title: "",
      description: "",
      data: new Date().toISOString().slice(0, 10),
      cost: 1000,
      image: null,
      imageSrc: "",
    }
  },
  methods: {
    clickone() {
      const article = {
        title: this.title,
        description: this.description,
        imageSrc: this.imageSrc,
        id: this.id,
        data: this.data,
        cost: this.cost,
      }
      this.$store
        .dispatch("createArticle", article)
        .then(() => {
          this.$router.push("/")
        })
        .catch(() => {})
    },
    triggerUpload() {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
  },
}
</script>
