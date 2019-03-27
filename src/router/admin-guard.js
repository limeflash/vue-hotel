import store from "../store"
export default function(to, from, next) {
  if (store.getters.user.id == "GVULyMdrfqUndt7bhZ11VVis3Cm1") {
    next()
  } else {
    next("/?admin=false")
  }
}
