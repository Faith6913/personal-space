<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="container">
      <BlogDetail :blog="data" v-if="!isLoading" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right class="rightList">
      <BlogToc
        :toc="data.toc ? data.toc : []"
        v-loading="isLoading"
        v-if="data"
      />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
import fetchAPI from "@/mixins/fetchData";
import toTopAPI from "@/mixins/toTop";
import { getBlogContentById } from "@/api/blog.js";
import BlogComment from "./components/BlogComment";
// import eventBus from "@/eventBus.js";
export default {
  name: "Detail",
  // 混合，第一个是获取数据的一些代码
  // 第二个是给有滚动的元素添加回到顶部效果，原先写的代码就可以删除了
  mixins: [fetchAPI({}), toTopAPI],
  components: {
    Layout,
    BlogToc,
    BlogDetail,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const blog = await getBlogContentById(this.$route.params.id);
      return blog;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
</style>
