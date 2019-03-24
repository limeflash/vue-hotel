import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store/index"
import Vuelidate from "vuelidate"

import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"

import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css" // Ensure you are using css-loader

import * as fb from "firebase"

import NavBar from "@/components/Navbar.vue"
import HomeCard from "@/components/Homecard.vue"
import FooterSide from "@/components/Footer.vue"

export const eventBus = new Vue()
Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(eventBus)

Vue.component("NavBar", NavBar)
Vue.component("HomeCard", HomeCard)
Vue.component("FooterSide", FooterSide)

const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

new Vue({
  router,
  store,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyCj7_zW6zcLhXGPkr3H2XWF_a1oo6oqNO0",
      authDomain: "vuejs-kurs1.firebaseapp.com",
      databaseURL: "https://vuejs-kurs1.firebaseio.com",
      projectId: "vuejs-kurs1",
      storageBucket: "vuejs-kurs1.appspot.com",
    }),
      fb.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.dispatch("autoLoginUser", user)
        }
      })
    const db = fb.database()
    const articlesRef = db.ref("articles")
    this.$store.dispatch("fetchArticles")
  },
  render: h => h(App),
}).$mount("#app")
