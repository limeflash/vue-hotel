export default {
  state: {
    articles: [
      {
        imageSrc:
          "https://images.pexels.com/photos/1933180/pexels-photo-1933180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "sasasa",
        description: "ddadadada",
        data: new Date().toISOString().slice(0, 10),
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/1933180/pexels-photo-1933180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "sasasa",
        description: "ddadadada",
        data: new Date().toISOString().slice(0, 10),
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/1933180/pexels-photo-1933180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "sasasa",
        description: "ddadadada",
        data: new Date().toISOString().slice(0, 10),
      },
    ],
  },
  mutations: {
    createArticle(state, payload) {
      state.articles.push(payload)
    },
  },
  actions: {
    createArticle({ commit }, payload) {
      payload.id = "sasasasa"

      commit("createArticle", payload)
    },
  },
  getters: {
    articles(state) {
      return state.articles
    },
    myAds(state) {
      return state.articles
    },
    adById(state) {
      return articleId => {
        return state.articles.find(article => article.id === articleId)
      }
    },
  },
}
