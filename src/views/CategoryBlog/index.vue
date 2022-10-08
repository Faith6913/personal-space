<template>
  <div class="category-blog-container">
    <Layout>
      <template>
        <div class="category-blog-list-container">
          <BlogList :isCategoryed="true" />
        </div>
      </template>
      <template #right class="rightList">
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "@/views/Blog/components/BlogCategory.vue";
import BlogList from "@/views/Blog/components/BlogList.vue";
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
  data() {
    return {
      categoryId: "",
    };
  },
  created() {
    this.categoryId = this.$route.params.categoryId;
  },
};
</script>

<style lang="less" scoped>
.category-blog-container {
  .category-blog-list-container {
    height: 100vh;
  }
  .rightList {
    overflow-y: scroll;
  }
}
</style>
