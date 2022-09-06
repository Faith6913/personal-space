<template>
  <div>
    <RightList :list="lists" @select="handlerSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  data() {
    return {
      lists: [
        { name: "HTML", isSelcet: false },
        { name: "CSS", isSelcet: false },
        {
          name: "JavaScript",
          isSelcet: false,
          children: [
            {
              name: "基础知识",
              isSelcet: false,
            },
            {
              name: "JavaScript进阶",
              isSelcet: false,
              children: [
                {
                  name: "原型链",
                  isSelcet: false,
                },
                {
                  name: "闭包",
                  isSelcet: false,
                },
                {
                  name: "this指向",
                  isSelcet: false,
                },
                {
                  name: "继承",
                  isSelcet: true,
                },
              ],
            },
          ],
        },
        {
          name: "Vue",
          isSelcet: true,
          children: [
            {
              name: "自定义指令",
              isSelcet: false,
            },
            {
              name: "组件递归",
              isSelcet: false,
            },
            {
              name: "Vue组件生命周期",
              isSelcet: false,
            },
            {
              name: "钩子函数",
              isSelcet: false,
            },
          ],
        },
        { name: "React", isSelcet: false },
        { name: "webpack", isSelcet: false },
        { name: "npm", isSelcet: false },
      ],
    };
  },
  components: {
    RightList,
  },
  methods: {
    handlerSelect(item) {
      console.log("这里是测试组件的点击事件", item);
    },
  },
};
</script>

<style></style>
