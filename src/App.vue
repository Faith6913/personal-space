<template>
  <div class="icon">
    <Icon type="qq" />
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
    color: red;
  }
</style>
