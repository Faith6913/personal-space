<template>
  <div class="to-top-container" v-show="show" @click="handlerClick">Top</div>
</template>

<script>
import eventBus from "@/eventBus";
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handlerClick() {
      eventBus.$emit("toTop");
    },
    showButton() {
      this.show = true;
    },
    hideButton() {
      this.show = false;
    },
  },
  mounted() {
    eventBus.$on("showToTop", this.showButton);
    eventBus.$on("hideToTop", this.hideButton);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 999;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
</style>
