<template>
  <div class="to-top-container">
    Top
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 999;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
}
</style>
