<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-show="!isLoading"/>
      <BlogComment v-show="!isLoading" title="评论" subtitle="(72)"/>
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
import BlogComment from "@/components/MessageArea";
export default {
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
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
