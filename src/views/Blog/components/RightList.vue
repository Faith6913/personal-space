<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelcet }" @click="handlerClick(item)">{{
        item.name
      }}</span>
      <span v-if="item.aside" class="count" @click="handlerClick(item)">{{
        item.aside
      }}</span>

      <RightList :list="item.children"  @select="handlerClick"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [  {name: "xxx", isSelcet: false, children: [  {name: "yyy", isSelect: false}  ]  }  ]
    list: {
      type: Array,
      // 如果要返回数组的话, 这里必须是一个函数，直接写数组是不行的
      default: () => [],
    },
  },
  methods: {
    handlerClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 12px;
    margin-bottom: 5px;
    cursor: pointer;
    .active {
      color: @warn;
      cursor: pointer;
      + .count {
        color: @warn;
      }
    }
    .count {
      margin-left: 20px;
      color: @gray;
    }
  }
}
</style>
