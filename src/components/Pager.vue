<template>
  <div class="pager-container" v-if="totalPageNum > 1">
    <a @click="handleClick($event, 1)" :class="{ disabled: current === 1 }">
      首页</a
    >
    <a
      @click="handleClick($event, current - 1)"
      :class="{ disabled: current === 1 }"
    >
      上一页</a
    >
    <a
      v-for="item of numbers.visiblePages"
      @click="handleClick($event, item.value)"
      :key="item._id"
      :class="{ active: current === item.value }"
    >
      {{ item.value }}</a
    >
    <a
      @click="handleClick($event, current + 1)"
      :class="{ disabled: current >= totalPageNum }"
      >下一页</a
    >
    <a
      @click="handleClick($event, totalPageNum)"
      :class="{ disabled: current >= totalPageNum }"
      >尾页</a
    >
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/global.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 5px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: false,
      default: 1,
    },
    total: {
      type: Number,
      required: false,
      default: 0,
    },
    limit: {
      type: Number,
      required: false,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  computed: {
    totalPageNum() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示的最小数字
    startPageNum() {
      let start = this.current - Math.floor(this.visibleNumber / 2);
      if (start < 1) {
        start = 1;
      }
      return start;
    },
    // 得到显示的最大数字
    endPageNum() {
      let end = this.startPageNum + this.visibleNumber - 1;
      if (end > this.totalPageNum) {
        end = this.totalPageNum;
      }
      return end;
    },
    numbers() {
      let arr = [];
      for (let i = this.startPageNum; i <= this.endPageNum; i++) {
        arr.push(i);
      }
      return {
        visiblePages: arr.map((n) => {
          return {
            _id: `page-${n}`,
            value: n,
          };
        }),
      };
    },
  },
  methods: {
    handleClick(e, newPage) {
      // 抛出一个事件，使用vue实例中的一个成员
      e.preventDefault();
      console.log(e.target);
      if (newPage <= 0) {
        newPage = 1;
      }
      if (newPage > this.totalPageNum) {
        newPage = this.totalPageNum;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
