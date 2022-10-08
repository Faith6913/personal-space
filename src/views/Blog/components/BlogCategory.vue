<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="appList || []" @select="handlerSelect" v-if="!!appList" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchAPI from "@/mixins/fetchData";
import { getBlogtypes } from "@/api/blog.js";
export default {
  mixins: [fetchAPI([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    appList() {
      if (!this.data) {
        return;
      }
      const totleArticleCount = this.data.reduce((prev, cur) => {
        return cur.articleCount + prev;
      }, 0);
      const result = [
        { name: "全部", id: -1, articleCount: totleArticleCount },
        ...this.data,
      ];
      return result.map((it) => {
        return {
          isSelcet: it.id === this.categoryId ? true : false,
          ...it,
          aside: `${it.articleCount}篇`,
        };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogtypes();
    },
    handlerSelect(item) {
      if (item.isSelcet) {
        return;
      }
      const query = {
        page: +this.$route.query.page || 1,
        limit: +this.$route.query.limit || 10,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
        });
      }
      this.$router.push({
        name: "CategoryBlog",
        query,
        params: {
          categoryId: item.id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
