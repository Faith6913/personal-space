<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handlerSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  components: {
    RightList,
  },
  methods: {
    handlerSelect() {
      // 这里处理选中的isSelect属性，不光有点击，还要和本组件的兄弟组件BlogDetail之间进行通信
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
