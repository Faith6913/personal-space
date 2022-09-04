import Vue from "vue";
import App from "./App.vue";
import "./mock";
import "./styles/var.less";
import "./styles/global.less";
import { showMessage } from "@/utils";
Vue.config.productionTip = false;
Vue.prototype.showMessage = showMessage;

// 全局注册自定义指令
import vloading from "@/directives/loading";
Vue.directive("loading", vloading);
import router from "./router/router.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

