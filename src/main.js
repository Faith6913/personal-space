import Vue from "vue";
import App from "./App.vue";
import "./mock";
import "./styles/var.less";
import "./styles/global.less";
import { showMessage } from "@/utils";
Vue.config.productionTip = false;
Vue.prototype.showMessage = showMessage;

import router from "./router/router.js";
import { getBanner } from "@/api/banner.js";
getBanner().then((n) => {
  console.log(n);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
