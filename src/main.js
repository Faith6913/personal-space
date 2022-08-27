import Vue from "vue";
import App from "./App.vue";
import "./styles/var.less";
import "./styles/global.less";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "./views/Home";
import Blog from "./views/Blog";
import About from "./views/About";
import Project from "./views/Project";
import Message from "./views/Message";

Vue.config.productionTip = false;
const router = new VueRouter({
  routes: [
    // 路由规则
    // 当匹配到路径 / 时，渲染 Home 组件
    { path: "/", component: Home },
    // 当匹配到路径 /blog 时，渲染 Blog 组件
    { path: "/blog", component: Blog },
    { path: "/about", component: About },
    { path: "/code", component: Project },
    { path: "/chat", component: Message },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
