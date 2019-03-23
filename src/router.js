import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Nfound from "@/views/404.vue"
import Contact from "@/views/Contact.vue"
import Article from "@/views/Article.vue"
import MyArticles from "@/views/MyArticles.vue"
import Login from "@/components/auth/Login.vue"
import Registration from "@/components/auth/Registration.vue"
import CreateRoom from "./components/CreateRoom.vue"
import AuthGuard from "./router/auth-guard"

Vue.use(Router)

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
      beforeEnter: AuthGuard,
    },
    {
      path: "/myarticles",
      name: "MyArticles",
      component: MyArticles,
      beforeEnter: AuthGuard,
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
