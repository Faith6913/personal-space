import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail";
const routes = [
  // 路由规则
  // 当匹配到路径 / 时，渲染 Home 组件
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  // 当匹配到路径 /blog 时，渲染 Blog 组件
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
    meta: {
      title: "博客",
    },
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: Blog,
    meta: {
      title: "博客",
    },
  },
  {
    name: "BlogDetail",
    path: "/blog/:id",
    component: BlogDetail,
    meta: {
      title: "博客详情",
    },
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
    meta: {
      title: "项目&效果",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
    meta: {
      title: "留言板",
    },
  },
];
const mode = "history";

export default {
  mode,
  routes,
};
