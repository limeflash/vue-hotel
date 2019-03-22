import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Nfound from "@/views/404.vue"
import Contact from "@/views/Contact.vue"
import Article from "@/components/Homecard.vue"
// import Login from "./components/Login.vue"
// import Registration from "./components/Registration.vue"
Vue.use(Router)

const Login = resolve => {
  require.ensure(["./components/auth/Login.vue"], () => {
    resolve(require("./components/auth/Login.vue"))
  })
}

const Registration = resolve => {
  require.ensure(["./components/auth/Registration.vue"], () => {
    resolve(require("./components/auth/Registration.vue"))
  })
}

const CreateRoom = resolve => {
  require.ensure(["./components/CreateRoom.vue"], () => {
    resolve(require("./components/CreateRoom.vue"))
  })
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/article/:id",
      name: "article",
      props: true,
      component: Article,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    },
    {
      path: "/create",
      name: "CreateRoom",
      component: CreateRoom,
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/registration",
      name: "Registration",
      component: Registration,
    },
    {
      path: "*",
      name: "fof",
      component: Nfound,
    },
  ],
})
