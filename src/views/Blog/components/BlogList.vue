<template>
  <div class="blog-list-container">
    <ul class="article-container">
      <li class="article"></li>
    </ul>
    <!-- 下面写分页插件 -->
    <!-- <Pager
      :current="curPage"
      :total="410"
      :limit="30"
      :visibleNumber="10"
      @pageChange="handlePageChange($event)"
    /> -->
  </div>
</template>

<script>
import Pager from "@/components/Pager";
export default {
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

<style lang="less" scoped>
.blog-list-container{
    width: 100%;
    height: 100%;
    background-color: #008c8c;
}
</style>
