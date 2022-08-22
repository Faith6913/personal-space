<template>
  <div class="iconfont-container">
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
.iconfont-container {
  color: red;
}
</style>
