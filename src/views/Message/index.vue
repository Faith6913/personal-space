<template>
  <div class="message-container" ref="container">
    <h1>留言板</h1>
    <button @click="handler">Click</button>
  </div>
</template>

<script>
import { showMessage, getComponentRootDom } from "@/utils";
export default {
  methods: {
    handler() {
      console.log("处理一下点击事件");
      showMessage({
        content: "感谢您, 评论成功 ~",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: () => {
          console.log("消息弹窗结束啦~");
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  background-color: lightcoral;
}
</style>
