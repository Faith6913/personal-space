<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handlerSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: "article-md-title-3",
    };
  },
  components: {
    RightList,
  },
  computed: {
    tocWithSelected() {
      /**
       * 传递一个toc数组,该函数的作用是返回一个新的带有isSelect属性的数组,由于不知道原数组究竟有多少层嵌套children
       * 因此采用递归的方式，实现层级嵌套的解决，可能传递的是undefined，因此传参默认空数组 []
       * @params {Array} toc 不带isSelect属性的toc目录数组
       * @returns {Array} 带有isSelect属性的toc目录数组，可以传递给RightList组件使用
       */
      const getToc = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelcet: this.selected === item.anchor,
            children: getToc(item.children),
          };
        });
      };

      return getToc(this.toc);
    },
    doms() {},
  },
  methods: {
    handlerSelect(item) {
      // 这里处理选中的isSelect属性，不光有点击，还要和本组件的兄弟组件BlogDetail之间进行通信
      console.log(item);
      location.hash = item.anchor;
    },
    // 写一个方法，每次调用的时候就能够设置成正确的状态
    setSelect(){

    }
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
