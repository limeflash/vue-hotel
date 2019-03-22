export default {
  state: {
    articles: [
      {
        imageSrc:
          "https://images.pexels.com/photos/1933180/pexels-photo-1933180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "sasasa",
        description: "ddadadada",
        data: new Date().toISOString().slice(0, 10),
        id: Math.round(Math.random() * 10000 + 40),
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/1933180/pexels-photo-1933180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "sasasa",
        description: "ddadadada",
        data: new Date().toISOString().slice(0, 10),
        id: Math.round(Math.random() * 10000 + 20),
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/1933180/pexels-photo-1933180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "sasasa",
        description: "ddadadada",
        data: new Date().toISOString().slice(0, 10),
        id: Math.round(Math.random() * 10000 + 10),
      },
    ],
  },
  mutations: {
    createArticle(state, payload) {
      state.articles.push(payload)
    },
  },
  actions: {},
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
