<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside" v-show="blog.category">
      <span>日期: {{ this.formatDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <!-- 因为blog属性是在updated的hook上执行的，因此会出现undefined的情况，所以在此添加一个判断排除默认情况 -->
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >分类: {{ blog.category ? blog.category.name : "无分类" }}</RouterLink
      >
    </div>
    <div v-html="blog.htmlContent" v-highlight class="markdown-body"></div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import formatDate from "@/utils/formatDate";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(timeTem) {
      return formatDate(timeTem);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  font-family: "Times New Roman", Times, serif;
  h1 {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-family: "Times New Roman", Times, serif;
  }
  .aside {
    width: 100%;
    height: 20px;
    margin-bottom: 20px;
    span,
    a {
      margin-right: 20px;
      color: darken(@gray, 10%);
      font-size: 14px;
    }
    a {
      cursor: pointer;
      &:hover {
        color: @primary;
      }
    }
  }
  .markdown-body {
    font-family: "Times New Roman", Times, serif;
  }
}
</style>
