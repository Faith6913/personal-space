import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
configure({
  trickleSpeed: 30,
  showSpinner: false,
  parent: "body",
});
function delay(ms) {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, ms);
  });
}

function getPageComponent(pageCompResolve) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageCompResolve();
    done();
    return comp;
  };
}

const routes = [
  // 路由规则
  // 当匹配到路径 / 时，渲染 Home 组件
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import("@/views/Home")),
    meta: {
      title: "首页",
    },
  },
  // 当匹配到路径 /blog 时，渲染 Blog 组件
  {
    name: "Blog",
    path: "/blog",
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
      title: "博客",
    },
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
      title: "博客",
    },
  },
  {
    name: "BlogDetail",
    path: "/blog/:id",
    component: getPageComponent(() => import("@/views/Blog/Detail")),
    meta: {
      title: "博客详情",
    },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import("@/views/About")),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import("@/views/Project")),
    meta: {
      title: "项目&效果",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import("@/views/Message")),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "404",
    path: "/*",
    component: getPageComponent(() => import("@/components/404")),
  },
];
const mode = "history";

export default {
  mode,
  routes,
};

// /* webpackChunkName: message */
