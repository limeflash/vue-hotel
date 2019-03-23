import * as fb from "firebase"

class Article {
  constructor(
    title,
    description,
    data,
    ownerId,
    imageSrc = "",
    cost = null,
    id = null
  ) {
    this.title = title
    this.description = description
    this.data = data
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.cost = cost
    this.id = id
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
    loadArticles(state, payload) {
      state.articles = payload
    },
  },
  actions: {
    async createArticle({ commit, getters }, payload) {
      commit("clearError")
      commit("setLoading", true)
      try {
        const NewArticle = new Article(
          payload.title,
          payload.description,
          payload.data,
          getters.user.id,
          payload.imageSrc,
          payload.cost
        )
        const article = await fb
          .database()
          .ref("articles")
          .push(NewArticle)
        commit("createArticle", {
          ...NewArticle,
          id: article.key,
        })
        console.log(article)
        commit("setLoading", false)
      } catch (error) {
        commit("setError", error.message)
        commit("setLoading", false)
        throw error
      }
    },
    async fetchArticles({ commit }) {
      commit("clearError")
      commit("setLoading", true)
      const resultArticles = []
      try {
        const fbVal = await fb
          .database()
          .ref("articles")
          .once("value")
        const articles = fbVal.val()
        Object.keys(articles).forEach(key => {
          const article = articles[key]
          resultArticles.push(
            new Article(
              article.title,
              article.description,
              article.data,
              article.ownerId,
              article.imageSrc,
              article.cost,
              key
            )
          )
        })
        commit("loadArticles", resultArticles)
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
    myArticles(state) {
      return state.articles
    },
  },
}
