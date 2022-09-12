<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside" v-show="blog.category">
      <span>日期: {{ blog.createDate }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <!-- 因为blog属性是在updated的hook上执行的，因此会出现undefined的情况，所以在此添加一个判断排除默认情况 -->
      <a href="">分类: {{ blog.category ? blog.category.id : 0 }}</a>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  h1 {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
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
}
</style>
