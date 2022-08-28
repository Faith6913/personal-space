import Vue from "vue";
import App from "./App.vue";
import "./styles/var.less";
import "./styles/global.less";
Vue.config.productionTip = false;

// 向组件实例注入成员
// Vue.prototype.sayHello = function (){
//   console.log("hello !");
// };
import router from "./router/router.js";

// 原生的Js创建一个元素，纯DOM操作
// 一般在vue框架中很少用得到
// import styles from "@/styles/message.module.less";
// import getComponentRootDom from "@/utils/getComponentRootDom";
// import Icon from "@/components/Icon";
// const div = document.createElement("div");
// const i = getComponentRootDom(Icon, { type: "home" });
// console.log(i);
// div.classList.add(styles.message);
// div.innerText = "daefae";
// document.body.appendChild(div);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
