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

// 引入路由模块
import router from "./router/router.js";

new Vue({
  // 在vue中注册路由
  router,
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




