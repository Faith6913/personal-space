import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import projects from "./projects";
if (!window.Vuex) {
  // 没有使用传统的方式引入Vuex
  Vue.use(Vuex);
}
// Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    projects,
  },
  strict: true,
});

export default store;
