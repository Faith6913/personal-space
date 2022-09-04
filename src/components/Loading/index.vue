<template>
  <div>
    <img
      v-if="isLoading"
      src="@/assets/loading.svg"
      alt="Loading-svg"
      class="loading-container"
    />
  </div>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>
