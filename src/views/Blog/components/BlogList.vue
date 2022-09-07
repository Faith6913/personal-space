<template>
  <div class="blog-list-container">
    <ul class="article-preview-container" v-loading="isLoading">
      <li class="article-item">
        <div class="thumb">
          <a href="">
            <img
              src="http://dummyimage.com/300x250/000/fff&text=Random Image"
              alt="不会就开始大幅"
              title="不会就开始大幅"
            />
          </a>
        </div>

        <div class="main">
          <h2 class="title">{{data[0].title}}</h2>
          <div class="info">
            <span>日期: 2020-09-21</span>
            <span>浏览: 237</span>
            <span>评论: 43</span>
            <a href="/blog/cate/8">分类: 8</a>
          </div>
          <p class="desp">
            和艰苦地方立法拉黑邵剑锋等哈就开始发力看见对方年龄数据宽度
          </p>
        </div>
      </li>
      <li class="article-item">
        <div class="thumb" v-if="0">
          <a href="#">
            <img src="null" alt="不会就开始大幅" title="不会就开始大幅" />
          </a>
        </div>

        <div class="main">
          <h2 class="title">不会就开始大幅</h2>
          <div class="info">
            <span>日期: 2020-09-21</span>
            <span>浏览: 237</span>
            <span>评论: 43</span>
            <a href="/blog/cate/8">分类: 8</a>
          </div>
          <p class="desp">
            和艰苦地方立法拉黑asdsfs的空间还是发货啦事发后覅按客户就发了拉二胡flaw邵剑锋等哈就开始
            和艰苦地方立法货啦拉黑asdsfs的空间还是发货啦事发后覅按客户就发了拉二胡flaw邵剑锋等哈就开始发力看见对方年龄数据宽度
            和艰苦地方立法拉黑asdsfs的空间还是发货啦拉黑asdsfs的空间还是发货啦事发后覅按客户就发了拉二胡flaw邵剑锋等哈就开始发力看见对方年龄数据宽度
            Dasdsfs的空间还是发货啦事发后覅按客户就发了拉二胡flaw邵剑锋等哈就开始发力看见对方年龄数据宽度发力看见对方年龄数据宽度
          </p>
        </div>
      </li>
    </ul>
    <!-- 下面写分页插件 -->
    <Pager
      :current="1"
      :total="1000"
      :limit="10"
      :visibleNumber="10"
      @pageChange="handlePageChange()"
      class="pager"
    />
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog.js";
import fetchAPI from "@/mixins/fetchData";
import Pager from "@/components/Pager";
export default {
  mixins: [fetchAPI()],
  components: {
    Pager,
  },
  data() {
    return {
      total: null,
    };
  },
  methods: {
    handlePageChange() {
      console.log("handlePageChange");
    },
    async fetchData(){
      const resp = await getBlogs();
      return resp.rows;
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.blog-list-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  // background-color: rgb(227, 182, 182);
  .article-preview-container {
    width: 95%;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    // background-color: rgb(144, 239, 100);
    .article-item {
      width: 100%;
      // background-color: #b3b8b8;
      display: flex;
      margin-bottom: 20px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      &:hover{
        background-color: rgb(250, 249, 249);
        
      }
      .thumb {
        width: 150px;
        height: 130px;
        padding-left: 5px;
        padding-right: 20px;
        padding-top: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .main {
        display: flex;
        flex-direction: column;
        .title {
          margin: 0;
          padding: 5px 0;
          cursor: pointer;
          &:hover{
            color: #f40;
          }
        }
        .info {
          font-size: 14px;
          color: @gray;
          span {
            margin-right: 10px;
          }
        }
        .desp {
          cursor: pointer;
          text-indent: 2em;
        }
      }
    }
  }
  .pager {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
