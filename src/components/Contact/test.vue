<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
    components:{
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.test-container{
    width: 250px;
    background-color: @dark;
    margin-top: 100px;
    font-size: 16px;
}
</style>