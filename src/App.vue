<template>
  <div>
    <h1>分页组件</h1>
    <Pager
      :current="curPage"
      :total="410"
      :limit="30"
      :visibleNumber="10"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
// import Avatar from "./components/Avatar";
// import Icon from "./components/Icon";
import Pager from "./components/Pager";
export default {
  name: "App",
  data() {
    return {
      curPage: 1,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      console.log(
        `这里是父组件，本函数用于处理分页子组件的点击事件,以达到显示第${newPage}页的效果`
      );
      this.curPage = newPage;
    },
  },
};
</script>

<style scoped></style>

/* @pageChange="handlePageChange($event)" */
