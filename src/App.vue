<template>
  <div class="icon">
    <Icon type="qq" />
    <Icon type="home" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import Icon from "./components/Icon";
export default {
  name: "App",
  components: {
    Avatar,
    Icon,
  },
};
</script>

<style scoped>
  .iconfont{
    font-size: 12px;
  }
</style>
