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
        { name: "a", isSelcet: false },
        { name: "b", isSelcet: false },
        {
          name: "c",
          isSelcet: false,
          children: [
            {
              name: "c-1",
              isSelcet: false,
            },
            {
              name: "c-2",
              isSelcet: false,
              children: [
                {
                  name: "c-2-1",
                  isSelcet: false,
                },
                {
                  name: "c-2-2",
                  isSelcet: false,
                },
                {
                  name: "c-2-3",
                  isSelcet: false,
                },
                {
                  name: "c-2-4",
                  isSelcet: true,
                },
              ],
            },
          ],
        },
        {
          name: "d",
          isSelcet: true,
          children: [
            {
              name: "d-1",
              isSelcet: false,
            },
            {
              name: "d-2",
              isSelcet: false,
            },
            {
              name: "d-3",
              isSelcet: false,
            },
            {
              name: "d-4",
              isSelcet: false,
            },
          ],
        },
        { name: "e", isSelcet: false },
        { name: "f", isSelcet: false },
        { name: "g", isSelcet: false },
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
