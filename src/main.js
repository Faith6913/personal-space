import Vue from "vue";
import App from "./App.vue";
import "./styles/var.less";
import "./styles/global.less";
Vue.config.productionTip = false;
import router from "./router/router.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
