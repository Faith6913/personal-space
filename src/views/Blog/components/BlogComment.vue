<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论"
      :subtitle="`( ${data.total || 0} )`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handlerSubmit"
    />
    <Empty v-if="data.rows ? data.rows.length === 0 : false" />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComments, postComment } from "@/api/blog";
import fetchAPI from "@/mixins/fetchData";
import eventBus from "@/eventBus.js";
import Empty from "@/components/Empty";
export default {
  mixins: [fetchAPI({})],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
    Empty,
  },
  methods: {
    async fetchData() {
      return await getComments(this.page, this.limit, this.$route.params.id);
    },
    // 给出一个获取更多的函数封装，便于后续调用
    async fetchMore() {
      if (!this.data.rows) {
        return;
      }
      if (this.data.rows.length >= this.data.total) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const resp = await getComments(
        this.page,
        this.limit,
        this.$route.params.id
      );
      this.data.total = resp.total;
      if (!this.data.rows) {
        return;
      }
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handlerSubmit(nickname, content, callback) {
      const resp = await postComment({
        content: content,
        nickname: nickname,
        blogId: this.$route.params.id,
      });

      this.data.rows.unshift(resp);
      this.data.total++;
      // 告诉子组件，我这边处理完了，您请继续处理 捏 ~
      callback("评论成功 !", "success", 2000);

      // 一开始直接生成了以下数据，但是这里是通过post请求后端服务器，通过后端拿数据的，因此这个地方可以简单的使用模拟数据
      //   const nowDate = new Date();
      //   const obj = {
      //     avatar: `http://dummyimage.com/100x100/bbc52b&text=Avatar`,
      //     blog: {
      //       id: this.$route.params.id,
      //       title: this.data.rows[0].blog.title,
      //     },
      //     createDate: formatDate(Date.parse(nowDate).toString()),
      //     id: this.data.rows.length + 1,
      //   };
      /*
        avatar:"http://dummyimage.com/100x100/6b9eee&text=Avatar"
        blog:Object
        content:"并近果山进局素何数但立快区质义。导太许支便连没者广适级有速。会达消太对上设较角保斯权建层过处示。把和战九阶方料住其见治划办。节来且精细离到周声海民太些面级任。"
        createDate:"2021-01-06 22:06:19"
        id:2
        nickname:"邹静"
      */
    },
  },
  // 挂载的时候注册一个滚动监听事件
  created() {
    eventBus.$on("scrollToBottom", this.fetchMore);
  },
  destroyed() {
    eventBus.$off("scrollToBottom", this.fetchMore);
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
