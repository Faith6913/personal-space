<template>
  <div class="project-container">
    <div class="title-container">
      <h2>项目 & 效果</h2>
    </div>

    <div class="project-demo-container">
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
      <DemoCard />
    </div>
  </div>
</template>

<script>
import DemoCard from "./components/DemoCard";
export default {
  components: {
    DemoCard,
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
  background-color: lighten( @gray, 20%);
  .title-container {
    width: 100%;
    // padding: 10px;
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
