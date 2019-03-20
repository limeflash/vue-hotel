import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Nfound from "@/views/404.vue"
import Contact from "@/views/Contact.vue"
import Login from "./components/Login.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: Contact
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "*",
      name: "404",
      component: Nfound
    }
  ]
})
