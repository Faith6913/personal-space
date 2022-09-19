<template>
  <div class="project-container" @scroll="handleScroll" ref="container">
    <div class="title-container">
      <h2>项目 & 效果</h2>
    </div>

    <div class="project-demo-container">
      <DemoCard v-for="item in data" :key="item.id" :demoList="item" />
    </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
import DemoCard from "./components/DemoCard";
import { mapState } from "vuex";
import toTop from "@/mixins/toTop";
export default {
  mixins: [toTop],
  computed: {
    ...mapState("projects", ["loading", "data"]),
  },
  components: {
    DemoCard,
  },
  async created() {
    await this.$store.dispatch("projects/getProjects");
  },
  methods: {
    handleScroll() {
      eventBus.$emit("projectScroll");
    },
  },
};
/* 
  自己做一个漂亮一点的项目容器组件
  最后给外层容器添加回到顶部效果，以及图片懒加载的功能
 */
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: lighten(@gray, 20%);
  .title-container {
    width: 100%;
    padding-top: 40px;
    h2 {
      margin: 0;
      text-align: center;
      letter-spacing: 2px;
      &::after {
        content: "";
        display: block;
        width: 60px;
        height: 2px;
        background-color: rgb(158, 241, 103);
        margin: 10px auto;
        margin-bottom: 30px;
      }
    }
  }

  .project-demo-container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
  }
}
</style>
