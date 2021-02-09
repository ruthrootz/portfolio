import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      articles: [
        {
            title : "test 1",
            publishDate : "1-1-2000",
            text : "testing, testing",
            tags : ["Reading", "Books"],
        },
        {
            title : "test 2",
            publishDate : "1-1-2000",
            text : "testing, testing",
            tags : ["Running"],
        },
        {
            title : "test 3",
            publishDate : "1-1-2000",
            text : "testing, testing",
            tags : ["Tech", "Productivity"],
        },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
