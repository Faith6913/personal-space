import Vue from 'vue'
import App from './App.vue'
import "./styles/var.less";
import Test from "./components/Icon/test.vue";

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  render: h => h(Test),
}).$mount('#app')
