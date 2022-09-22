<template>
  <div class="message-container" ref="container">
    <div class="content-container">
      <MessageArea
        title="留言板"
        :subtitle="`(${totalMessage})`"
        :isListLoading="isLoading"
        :list="messageList"
        @submit="handlerSubmit"
      />
    </div>
    <Empty v-if="(messageList ? messageList.length === 0 : false) && !isLoading" />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchAPI from "@/mixins/fetchData";
import toTopAPI from "@/mixins/toTop";
import * as message from "@/api/message";
import eventBus from "@/eventBus";
import Empty from "@/components/Empty";
export default {
  mixins: [fetchAPI({}, 1, 10), toTopAPI],
  components: {
    MessageArea,
    Empty,
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
    async fetchData(page, limit) {
      const resp = await message.getMessage(page, limit);
      this.messageList = resp.rows;
      this.totalMessage = resp.total;
      this.isLoading = false;
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
        this.isLoading = false;
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
  background-color: rgb(255, 255, 255);
  .content-container {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 50px;
  }
}
</style>
