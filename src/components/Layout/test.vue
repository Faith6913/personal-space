<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left"></div>
      </template>
      <template>
        <div class="main">
            main
        </div>
      </template>
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 100%;
  height: 100vh;
  background-color: #008b8b;
  .left {
    width: 150px;
    height: 100%;
    border: 1px solid red;
  }
  .right {
    width: 100px;
    height: 100%;
    border: 1px solid red;
  }
}
</style>
