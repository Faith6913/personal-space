<template>
  <div class="blog-comment-container">
    <DataForm @submit="handlerSubmit" />
    <h3>
      {{ title }}
      <span>{{ subtitle }}</span>
    </h3>
    <CommentsList :list="list" />
    <div class="loading-conatiner">
      <div class="loading" v-loading="isListLoading"></div>
    </div>
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
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
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
  methods: {
    handlerSubmit(nickname, content, callback) {
      this.$emit("submit", nickname, content, callback);
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  width: 100%;
  .loading-conatiner {
    position: relative;
  }
}
</style>
