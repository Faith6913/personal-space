<template>
  <div class="blog-comment-container">
    <DataForm />
    <h3>
      {{ title }}
      <span>{{ subtitle }}</span>
    </h3>
    <CommentsList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import CommentsList from "./CommentsList.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    CommentsList,
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  width: 100%;
}
</style>
