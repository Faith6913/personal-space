<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handler"
      :duration="2000"
    />
    <!-- <ImageLoader
      src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/6609c93d70cf3bc7b90e748bdf00baa1cd112a4e.jpg"
      placeholder="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/6609c93d70cf3bc7b90e748bdf00baa1cd112a4e.jpg"
      @load="handler"
      :duration="2000"
    /> -->
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handler() {
      console.log("图片加载完成，ImageLoader组件的hander事件触发");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.test-container {
  .self-center();
  width: 600px;
  height: 400px;
  border: 2px solid #008c8c;
}
</style>
