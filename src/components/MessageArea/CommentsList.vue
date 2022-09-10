<template>
  <ul class="comments-list-container">
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.comments-list-container {
  width: 100%;
  box-sizing: border-box;
  background-color: darken(rgb(157, 157, 238), 10%);
  .item{
    width: 90%;
    height: 100px;
    background-color: #008c8c;
    margin: 10px auto;
  }
}
</style>
