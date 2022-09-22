<template>
  <img
    class="avatar-container"
    :src="url"
    alt="Avatar"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
    @load="handlerLoad"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    handlerLoad() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style lang="less" scope>
.avatar-container {
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>
