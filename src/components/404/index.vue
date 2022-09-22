<template>
  <div class="error-conatiner">
    <img :src="errorUrl" alt="" />
  </div>
</template>

<script>
import Error404 from "@/assets/404.jpg";
export default {
  data() {
    return {
      errorUrl: Error404,
    };
  },
};
</script>

<style scoped lang="less">
.error-conatiner {
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
