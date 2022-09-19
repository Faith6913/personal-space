import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import projects from "./projects";
Vue.use(Vuex);

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
