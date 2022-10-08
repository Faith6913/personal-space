import Vue from "vue";
import VueRouter from "vue-router";
import config from "./routerConfig";
import titleControl from "@/utils/titleControl";
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
if (!window.VueRouter) {
  // 没有使用传统的方式引入VueRouter
  Vue.use(VueRouter);
}
const router = new VueRouter(config);

// 每次进到一个网站之后，设置一下网站标签的路由标题
router.afterEach((to, from) => {
  titleControl.setRouterTitle(to.meta.title);
});

export default router;
