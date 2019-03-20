<template>
  <div>
    <h1>{{ $route.name }} page</h1>

    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="email"
        id="email"
        class="form-control"
        label="E-mail"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        :error-messages="emailErrors"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        id="password"
        class="form-control"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        @click:append="show1 = !show1"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        :error-messages="passwordErrors"
        counter
        reaquired
      ></v-text-field>
      <v-checkbox id="checkbox" label="Do you agree?" required></v-checkbox>
      <v-btn
        block
        :disabled="$v.$invalid || loading"
        :loading="loading"
        color="success"
        @click="onSubmit"
      >Sign In</v-btn>
    </v-form>
  </div>
</template>
<script>
// @ is an alias to /src
import { required, minLength, email } from "vuelidate/lib/validators"
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      show2: false,
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch("loginUser", user)
        .then(() => {
          this.$router.push("/")
        })
        .catch(() => {})
      // console.log("Pass2", this.passwordRepeat)
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push("Must be valid e-mail")
      !this.$v.email.required && errors.push("E-mail is required")
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push("Password is required")
      !this.$v.password.minLength && errors.push("Must be at least 8")
      return errors
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  }
}
</script>
