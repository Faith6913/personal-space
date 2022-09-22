<template>
  <div v-loading="loading" class="home-container" @mousewheel="handlerScroll">
    <ul class="carousel-container" ref="carousel">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :src="data" :_id="item.id" :curIndex="index" />
      </li>
    </ul>

    <div class="icon icon-up" v-show="!loading && index !== 0" @click="prev">
      <Icon class="pericon" type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="!loading && index !== data.length - 1"
      @click="next"
    >
      <Icon class="pericon" type="arrowDown" />
    </div>

    <ul class="indicators">
      <li
        v-for="(item, i) of data"
        :key="item.id"
        :class="`indicator ${i === index ? 'active' : ''}`"
        @click="changeByIndicator(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
import debounce from "@/utils/debounce";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, // 当前显示的第几章轮播图
      containerHeight: 0, // 容器的高度
      isLoading: true,
      scrollY: 0,
    };
  },
  // 这里仅仅是注入完成
  // 这里可以不用写代码了，全部搬到了组件混入的地方用来获取远程数据
  // async created() {
  //   this.data = await getBanners();
  //   this.isLoading = false;
  // },

  // 用vuex完成的数据传递
  async created() {
    this.$store.dispatch("banner/fetchBanner");
    this.isLoading = false;
  },

  // 等挂载完成形成真实的DOM之后才能获取到相应的DOM元素
  mounted() {
    this.containerHeight = this.$refs.carousel.clientHeight;
  },
  computed: {
    marginTop() {
      return -(this.index * this.containerHeight) + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    // 这个方法是用来给组件混入的函数传参的，要不然组件混入内部不晓得获取哪里的数据
    // async fetchData(){
    //   return await getBanners();
    // },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
      }
      this.toPage();
    },
    next() {
      this.index++;
      if (this.index >= this.data.length) {
        this.index = this.data.length - 1;
      }
      this.toPage();
    },
    toPage() {
      this.$refs.carousel.style.marginTop = this.marginTop;
    },
    changeByIndicator(i) {
      this.index = i;
      this.toPage();
    },
    clearScrollY() {
      this.scrollY = 0;
    },
    // 处理容器的鼠标滚轮事件，但是每个鼠标的滚轮事件属性不太一样，还没找到解决方案
    handlerScroll(e) {
      setTimeout(this.clearScrollY, 1000);
      this.scrollY += e.deltaY;
      if (this.scrollY > 290) {
        this.next();
        this.clearScrollY();
      } else if (this.scrollY < -290) {
        this.prev();
        this.clearScrollY();
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
@gap: 20px;
@jump-dis: 15px;
.home-container {
  width: 100%;
  height: 100%;
  position: relative;

  // Test
  // width: 400px;
  // height: 300px;
  // border: 1px solid #008c8c;
  // margin: 0px auto;

  .carousel-container {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s;

    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center(absolute);
    transform: translateX(-50%);
    cursor: pointer;
    .pericon {
      font-size: 30px;
      color: @gray;
    }
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump-dis);
      }
      50% {
        transform: translate(-50%, 0px);
      }
      100% {
        transform: translate(-50%, @jump-dis);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump-dis);
      }
      50% {
        transform: translate(-50%, 0px);
      }
      100% {
        transform: translate(-50%, -@jump-dis);
      }
    }
  }
  .indicators {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    .indicator {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin: 5px 0;
      cursor: pointer;
      border: 1px solid #fff;
      background-color: @words;
      box-sizing: border-box;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
