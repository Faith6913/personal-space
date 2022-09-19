<template>
  <div class="tag-container" ref="container">{{ info.tagName }}</div>
</template>

<script>
export default {
  props: {
    /*
        {
            tagName: "JavaScript",
            bgColor: "#0f0f0f"
        }
    */
    info: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.$refs.container.style.backgroundColor = `${this.info.bgColor}`;
  },
};
</script>

<style lang="less" scoped>
.tag-container {
  font-size: 12px;
  color: rgb(255, 255, 255);
  height: 15px;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  background-color: rgb(113, 241, 145);
}
</style>
