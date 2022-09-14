<template>
  <ul class="comments-list-container">
    <li class="item" v-for="(item, i) in list" :key="i">
      <Avatar :url="item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
      <div class="date">
        {{ item.createDate }}
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Avatar,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.comments-list-container {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;
  // background-color: darken(rgb(157, 157, 238), 10%);
  .item {
    width: 100%;
    border-bottom: 1px solid lighten(@gray, 20%);
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
    display: flex;
    // justify-content: center;
    // align-items: flex-start;
    .data {
      padding: 0 10px;
      .nickname {
        color: darken(@success, 33%);
        margin-bottom: 10px;
      }
      .content {
        font-size: 14px;
        text-indent: 1em;
      }
    }
    .date {
      position: absolute;
      right: 20px;
      top: 10px;
      font-size: 12px;
      color: @gray;
    }
  }
}
</style>
