<template>
  <div class="blog-list-container">
    <ul class="article-preview-container">
      <ArticlePre :articleObject="blogs[0]" />
      <ArticlePre :articleObject="blogs[1]" />
      <ArticlePre :articleObject="blogs[3]" />
      <ArticlePre :articleObject="blogs[5]" />
      <ArticlePre :articleObject="blogs[4]" />
      <ArticlePre :articleObject="blogs[6]" />
      <ArticlePre :articleObject="blogs[7]" />
    </ul>
    <!-- 下面写分页插件 -->
    <!-- <Pager
      :current="curPage"
      :total="410"
      :limit="30"
      :visibleNumber="10"
      @pageChange="handlePageChange($event)"
      class="pager"
    /> -->
  </div>
</template>

<script>
import ArticlePre from "./ArticlePre.vue";
import Pager from "@/components/Pager";
import * as getDataMethods from "@/api/blog.js";
export default {
  data() {
    return {
      total: null,
      blogs: [],
    };
  },
  components: {
    Pager,
    ArticlePre,
  },
  async created() {
    const blogArticles = await getDataMethods.getBlogs();
    console.log(blogArticles);
    this.total = blogArticles.total;
    this.blogs = blogArticles.rows;
  },
  methods: {
    // handlePageChange(newPage) {
    //   console.log(
    //     `这里是父组件，本函数用于处理分页子组件的点击事件,以达到显示第${newPage}页的效果`
    //   );
    //   this.curPage = newPage;
    // },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.blog-list-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  .article-preview-container {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
  }
  .pager {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
