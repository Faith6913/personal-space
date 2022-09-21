<template>
  <div>
    <img :src="loadingUrl" alt="Loading-svg" class="loading-container" />
  </div>
</template>
<script>
import loadingSVG from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingUrl: loadingSVG,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>
