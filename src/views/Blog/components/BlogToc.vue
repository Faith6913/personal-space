<template>
  <div class="blog-toc-container" ref="container" v-if="tocWithSelected.length">
    <h2>目录</h2>
    <RightList :list="tocWithSelected" @select="handlerSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import eventBus from "@/eventBus";
import { debounce } from "@/utils";
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: "",
      titleOrder: 0,
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
      // this.titleOrder = 0;
      const getToc = (toc = []) => {
        return toc.map((item) => {
          // this.titleOrder++;
          // console.log(item.name, item.anchor, this.titleOrder, item);
          // item.anchor = `article-md-title-${this.titleOrder}`;
          return {
            ...item,
            isSelcet: this.selected === item.anchor,
            children: getToc(item.children),
          };
        });
      };
      return getToc(this.toc);
    },
    // 根据toc得到它们对应的元素数组
    doms() {
      const domsArray = [];
      function getDomsByTocArray(toc) {
        // console.log(toc);
        toc.forEach((item) => {
          domsArray.push(document.querySelector(`#${item.anchor}`));
          if (item.children) {
            getDomsByTocArray(item.children);
            // item.children.forEach((e) => {
            //   domsArray.push(document.querySelector(`#${e.anchor}`));
            // });
          }
        });
        return domsArray;
      }
      return getDomsByTocArray(this.toc);
    },
  },
  methods: {
    handlerSelect(item) {
      // 这里处理选中的isSelect属性，不光有点击，还要和本组件的兄弟组件BlogDetail之间进行通信
      this.selected = item.anchor;
      location.hash = item.anchor;
    },
    // 写一个方法，每次调用的时候就能够设置成正确的状态
    setSelect() {
      // const browserTop = this.doms[0].parentElement.parentElement.parentElement.getBoundingClientRect();
      // console.log(browserTop);
      this.selected = location.hash;
      this.doms.forEach((dom) => {
        if (!dom) {
          return;
        }
        let domTop = dom.getBoundingClientRect().top;
        if (domTop <= 120) {
          // console.log(dom);
          // console.log(dom.getAttribute("id"));
          this.selected = dom.getAttribute("id");
        } else if (domTop > 100) {
          return;
        }
      });
    },
  },
  created() {
    this.debounceSelect = debounce(this.setSelect, 300);
    eventBus.$on("blogScroll", this.debounceSelect);
  },
  destroyed() {
    eventBus.$off("blogScroll", this.debounceSelect);
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
  transition: 100ms;
  h2 {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
