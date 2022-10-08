<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul class="article-preview-container">
      <li class="article-item" v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <!-- <img :src="item.thumb" :alt="item.title" :title="item.title" /> -->
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>

        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2 class="title">{{ item.title }}</h2>
          </RouterLink>
          <div class="info">
            <span>日期: {{ formatDate(item.createDate) }}</span>
            <span>浏览: {{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
            >
              分类: {{ item.category.name }}
            </RouterLink>
          </div>
          <p class="desp">
            {{ item.description }}
          </p>
        </div>
      </li>
      <!-- 下面写分页插件 -->
      <div class="pager" v-if="!isLoading">
        <Pager
          :current="routeInfo.page"
          :total="total"
          :limit="routeInfo.limit"
          :visibleNumber="10"
          @pageChange="handlePageChange"
          class="pager"
        />
      </div>
    </ul>

    <Empty v-if="data.rows ? data.rows.length === 0 : false" text="暂无博客" />
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog.js";
import toTopAPI from "@/mixins/toTop";
import Pager from "@/components/Pager";
import { formatDate } from "@/utils";
import eventBus from "@/eventBus.js";
import Empty from "@/components/Empty";
export default {
  mixins: [toTopAPI],
  components: {
    Pager,
    Empty,
  },
  props: {
    isCategoryed: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isLoading: true,
      data: {
        total: null,
        rows: [],
      },
    };
  },
  computed: {
    // 获取路由里的信息
    routeInfo() {
      const blogCategoryId = this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;

      // console.log(
      //   "routeInfo内:",
      //   this.$route.params.categoryId,
      //   blogCategoryId
      // );
      return {
        blogCategoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    handlePageChange(newPage) {
      eventBus.$emit("toTop");
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到当前的分类id, 当前的页容量, newPage的页码
      // 做无刷新的跳转
      if (this.routeInfo.categoryId === -1) {
        // /blog?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /blog/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },

    async fetchData() {
      const resp = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.blogCategoryId
      );
      this.total = resp.total;
      console.log(resp);
      return resp;
    },
    async updateBlogList() {
      this.isLoading = true;
      const datas = await this.fetchData();
      // const datas = await getBlogs(1, 10, this.routeInfo.blogCategoryId);
      this.total = datas.total;

      const filterArr = datas.rows.filter((item) => {
        if (this.routeInfo.blogCategoryId + "" === "-1") {
          return true;
        }
        return item.category.id + "" === this.routeInfo.blogCategoryId + "";
      });
      if (filterArr === []) {
        // this.data.rows = [];
        // console.log("筛选出来是空的", filterArr);
      } else {
        // console.log("筛选出来有数据", filterArr);
        this.data.rows = filterArr;
      }
      this.isLoading = false;
    },
    formatDate,
    // 下列代码实现分类超链接的点击不跳转页面只跳转路由，但是可以用<RouterLink />实现
    // handlerClick(e, categoryId) {
    //   e.preventDefault();
    //   const query = {
    //     page: +this.$route.query.page || 1,
    //     limit: +this.$route.query.limit || 10,
    //   };
    //   this.$router.push({
    //     name: "CategoryBlog",
    //     query,
    //     params: {
    //       categoryId: categoryId,
    //     },
    //   });
    // },
  },
  async created() {
    await this.updateBlogList();
  },
  watch: {
    // 观察this.data
    // data(){}

    // 观察this.$route
    // 简洁写法
    async $route() {
      // this.isLoading = true;
      await this.updateBlogList();
    },
    // 完整写法
    // $route: {
    //   handler(newVal, oldVal) {},
    //   deep: false, // 是否监听该数据内部属性的变化，默认 false
    //   // 简写中不会坚硬
    //   immediate: false, // 是否立即执行一次 handler，默认 false
    // },
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
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-family: "Times New Roman", Times, serif;
  .article-preview-container {
    width: 90%;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    scroll-behavior: smooth;
    .article-item {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      &:hover {
        background-color: rgb(250, 249, 249);
      }
      .thumb {
        width: 150px;
        height: 130px;
        padding-left: 5px;
        padding-right: 20px;
        padding-top: 5px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: contain;
        }
      }
      .main {
        display: flex;
        flex-direction: column;
        .title {
          margin: 0;
          padding: 5px 0;
          cursor: pointer;
          &:hover {
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
          text-indent: 2em;
        }
      }
    }
  }
}
</style>
