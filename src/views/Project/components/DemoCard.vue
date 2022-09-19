<template>
  <div class="demo-card-container"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "@/styles/var.less";
.demo-card-container {
  height: 240px;
  background-color: rgb(255, 255, 255);
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1) translateY(-10px);
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
