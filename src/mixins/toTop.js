/**
 * 当某个区域进行滚动的时候，这里混入一些相关的 "回到顶部" 配置
 * 需要将进行操作的dom设置属性 ref="container"
 */
import eventBus from "@/eventBus.js";
export default {
  methods: {
    handlerToTop() {
      // 回到顶部
      if (!this.$refs.container) {
        window.alert("未获取到dom元素");
      }
      this.$refs.container.scrollTop = 0;
      location.hash = "";
    },
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", (e) => {
      // 根据滚动的距离抛出回到顶部的事件
      if (e.target.scrollTop >= 1000) {
        eventBus.$emit("showToTop");
      } else {
        eventBus.$emit("hideToTop");
      }
      eventBus.$emit("blogScroll");
      if (
        Math.abs(
          e.target.scrollTop + e.target.clientHeight - e.target.scrollHeight
        ) <= 1
      ) {
        eventBus.$emit("scrollToBottom");
      }
    });
    eventBus.$on("toTop", this.handlerToTop);
  },
  destroyed() {
    eventBus.$off("toTop", this.handlerToTop);
    eventBus.$emit("hideToTop");
  },
};
