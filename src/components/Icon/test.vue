<template>
  <div>
    <Icon type="home"/>
    <Avatar :url="'https://img0.baidu.com/it/u=800907297,778987443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'"/>
  </div>
</template>

<script>
import Icon from "./";
import Avatar from "../Avatar";
export default {
  name: "App",
  components: {
    Icon,
    Avatar
  },
};
</script>

<style scoped></style>