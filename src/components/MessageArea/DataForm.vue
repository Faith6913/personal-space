<template>
  <form class="data-form-container">
    <input type="text" class="nickname" placeholder="用户昵称"/>
    <span class="err">请填写昵称</span>
    <textarea type="area" class="content" placeholder="输入内容"></textarea>
    <span class="err">请填写内容</span>
    <button class="submit">提交</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.data-form-container {
  width: 100%;
  height: 300px;
  background-color: rgb(235, 201, 116);
  padding: 10px;
  display: flex;
  flex-direction: column;
  .nickname {
    width: 300px;
    height: 20px;
  }
  .content{
    width: 600px;
    height: 300px;
  }
}
</style>
