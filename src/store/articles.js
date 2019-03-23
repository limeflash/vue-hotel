import * as fb from "firebase"

class Article {
  constructor(
    title,
    data,
    description,
    imageSrc = " ",
    id = null,
    ownerId,
    cost
  ) {
    this.title = title
    this.data = data
    this.description = description
    this.imageSrc = imageSrc
    this.id = id
    this.ownerId = ownerId
    this.cost = cost
  }
}
export default {
  state: {
    articles: [],
  },
  mutations: {
    createArticle(state, payload) {
      state.articles.push(payload)
    },
  },
  actions: {
    async createArticle({ commit, getters }, payload) {
      commit("clearError")
      commit("setLoading", true)
      try {
        const NewArticle = new Article(
          payload.title,
          payload.data,
          payload.description,
          payload.imageSrc,
          payload.id,
          getters.user.id,
          payload.cost
        )
        const article = await fb
          .database()
          .ref("articles")
          .push(NewArticle)
        commit("createArticle", {
          ...NewArticle,
          id: "article" + Math.floor(Math.random() * 1000),
        })
        commit("setLoading", false)
      } catch (error) {
        commit("setError", error.message)
        commit("setLoading", false)
        throw error
      }
    },
  },
  getters: {
    articles(state) {
      return state.articles
    },
    articlesById(state) {
      return articleId => {
        return state.articles.find(article => article.id === articleId)
      }
    },
  },
}
