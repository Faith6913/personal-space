<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" />
    </div>
    <template #right class="rightList">
      <BlogToc :toc="data.toc? data.toc:[]" v-loading="isLoading" v-if="data"/>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
import fetchAPI from "@/mixins/fetchData";
import { getBlogContentById } from "@/api/blog.js";
export default {
  mixins: [fetchAPI({})],
  components: {
    Layout,
    BlogToc,
    BlogDetail,
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
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
