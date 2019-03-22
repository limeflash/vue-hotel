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
    createArticle({ commit }, payload) {
      commit("createArticle", payload)
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
