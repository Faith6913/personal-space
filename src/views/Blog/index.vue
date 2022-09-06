<template>
  <div class="blog-container">
    <Layout>
      <template>
        <BlogList />
      </template>
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
};
</script>

<style lang="less" scoped></style>
