import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
const routes = [
  // 路由规则
  // 当匹配到路径 / 时，渲染 Home 组件
  { path: "/", component: Home },
  // 当匹配到路径 /blog 时，渲染 Blog 组件
  { path: "/blog", component: Blog },
  { path: "/about", component: About },
  { path: "/project", component: Project },
  { path: "/message", component: Message },
];
const mode = "history";

export default {
  mode,
  routes,
};
