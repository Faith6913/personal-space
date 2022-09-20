<template>
  <div class="message-container" ref="container">
    <div class="content-container">
      <MessageArea
        title="留言板"
        :subtitle="`(${52})`"
        :isListLoading="isLoading"
        :list="messageList"
        @submit="handlerSubmit"
      />
    </div>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchAPI from "@/mixins/fetchData";
import toTopAPI from "@/mixins/toTop";
import * as message from "@/api/message";
import eventBus from "@/eventBus";
export default {
  mixins: [fetchAPI({}, 1, 10), toTopAPI],
  components: {
    MessageArea,
  },
  data() {
    return {
      messageList: [],
      totalMessage: 0,
      page: 1,
      limit: 10,
    };
  },
  methods: {
    // handler() {
    //   showMessage({
    //     content: "感谢您, 评论成功 ~",
    //     type: "success",
    //     duration: 2000,
    //     container: this.$refs.container,
    //     callback: () => {
    //       console.log("消息弹窗结束啦~");
    //     },
    //   });
    // },

    async fetchData(page, limit) {
      const resp = await message.getMessage(page, limit);
      this.messageList = resp.rows;
      this.totalMessage = resp.total;
    },
    async fetchMore() {
      if (!this.messageList) {
        return;
      }
      if (this.messageList.length >= this.totalMessage) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const resp = await message.getMessage(1, 5);
      this.totalMessage = resp.total;
      if (!this.messageList) {
        return;
      }
      this.messageList = this.messageList.concat(resp.rows);
      this.isLoading = false;
    },
    async handlerSubmit(nickname, content, callback) {
      const resp = await message.postMessage({
        nickname,
        content,
      });
      console.log(resp);
      this.messageList.unshift(resp);
      callback("感谢您的评论 !", "success", 2000);
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

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  background-color: rgb(241, 241, 247);
  .content-container {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 50px;
  }
}
</style>
