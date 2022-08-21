<template>
  <div class="root">
    <Avatar
      url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg"
      :size="100"
    />
    <Avatar
      url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg"
      :size="600"
    />
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
export default {
  name: "App",
  components: {
    Avatar,
  },
};
</script>

<style></style>
