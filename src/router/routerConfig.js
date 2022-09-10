import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail";
const routes = [
  // 路由规则
  // 当匹配到路径 / 时，渲染 Home 组件
  { name: "Home", path: "/", component: Home },
  // 当匹配到路径 /blog 时，渲染 Blog 组件
  { name: "Blog", path: "/blog", component: Blog },
  { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog },
  // { name: "MomoBlog", path: "/blog/:id", component: Blog },
  { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
  { name: "About", path: "/about", component: About },
  { name: "Project", path: "/project", component: Project },
  { name: "Message", path: "/message", component: Message },
];
const mode = "history";

export default {
  mode,
  routes,
};
