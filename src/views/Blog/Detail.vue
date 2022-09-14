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
import { getBlogContentById } from "@/api/blog.js";
import BlogComment from "./components/BlogComment";
import eventBus from "@/eventBus.js";
export default {
  name: "Detail",
  mixins: [fetchAPI({})],
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
    handlerToTop() {
      // 回到顶部
      if (!this.$refs.container) {
        window.alert("未获取到dom元素");
      }
      this.$refs.container.scrollTop = 0;
      location.hash = "";
    },
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", (e) => {
      // 根据滚动的距离抛出回到顶部的事件
      if (e.target.scrollTop >= 1000) {
        eventBus.$emit("showToTop");
      } else {
        eventBus.$emit("hideToTop");
      }
      eventBus.$emit("blogScroll");
      if (
        Math.abs(
          e.target.scrollTop + e.target.clientHeight - e.target.scrollHeight
        ) <= 1
      ) {
        eventBus.$emit("scrollToBottom");
      }
    });
    eventBus.$on("toTop", this.handlerToTop);
  },
  destroyed() {
    eventBus.$off("toTop", this.handlerToTop);
    eventBus.$emit("hideToTop");
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
