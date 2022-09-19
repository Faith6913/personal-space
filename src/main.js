import Vue from "vue";
import App from "./App.vue";
import "./mock";
import "./styles/var.less";
import "./styles/global.less";
import { showMessage } from "@/utils";
import store from "./store";
store.dispatch("setting/fetchSetting");

Vue.config.productionTip = false;
Vue.prototype.$showMessage = showMessage;

// 全局注册自定义指令
import vloading from "@/directives/loading";
import vlazy from "@/directives/lazy";
Vue.directive("loading", vloading); // 加载中指令
Vue.directive("lazy", vlazy); // 图片懒加载指令

// 引入路由模块
import router from "./router/router.js";

new Vue({
  // 在vue中注册路由
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 测试一下博客远程数据获取
// import { getBlogtypes, getBlogs } from "@/api/blog.js";
// console.log("------ Test -------");
// getBlogtypes().then((resp)=>{
//   console.log("博客分类",resp);
// });
// getBlogs(2, 20, 2).then((resp)=>{
//   console.log("博客",resp);
// });
// import { getBlogContentById } from "@/api/blog.js";
// console.log("-------  Test  --------");
// getBlogContentById('4B15914c-eFD5-048B-B43c-AE4c31bC9E97').then((resp) => {
//   console.log(resp);
// });

// 测试新封装的API接口
// import * as blogAPI from "@/api/blog.js";
// blogAPI
//   .getBlogContentById("4B15914c-eFD5-048B-B43c-AE4c31bC9E97")
//   .then((resp) => {
//     console.log("博客文章详情: ", resp);
//   });

// blogAPI
//   .postComment({
//     nickname: "我的昵称",
//     content: "这是一个测试评论的文本",
//     blogId: 1,
//   })
//   .then((resp) => {
//     console.log("提交评论", resp);
//   });

// blogAPI.getComments("123123").then((resp) => {
//   console.log("获取的评论:", resp);
// });

// 测试事件总线接口
// import eventBus from "./eventBus";

// function handler1(data){
//   console.log("handler1", data);
// }

// function handler2(data){
//   console.log("handler2", data);
// }

// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;

// 测试函数防抖功能
// import debounce from "@/utils/debounce";
// const newSum = debounce(sum, 1000);
// window.newSum = newSum;
// function sum(a, b) {
//   console.log(a + b);
// }
// newSum(43, 34);
// newSum(43, 34);
// newSum(43, 34);
// newSum(43, 34);
// newSum(43, 34);
// newSum(43, 34);
// newSum(4233, 34);
// newSum(43, 34);
// newSum(43, 34);

// 测试获取全局设置接口
// import getSetting from "@/api/setting";
// getSetting().then((resp) => {
//   console.log(resp);
// });

// 测试关于我的数据接口
// import getAbout from "@/api/about";
// getAbout().then((resp) => {
//   console.log(resp);
// });

// 测试项目的数据接口
// import getProject from "@/api/project";
// getProject().then((resp) => {
//   console.log(resp);
// });