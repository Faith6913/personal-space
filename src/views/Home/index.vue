<template>
  <div class="home-container" @mousewheel="handlerScroll">
    <Loading :isLoading="isLoading"/>
    <ul class="carousel-container" ref="carousel">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :src="banners" :_id="item.id" :curIndex="index" />
      </li>
    </ul>

    <div class="icon icon-up" v-show="index !== 0" @click="prev">
      <Icon class="pericon" type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index !== banners.length - 1"
      @click="next"
    >
      <Icon class="pericon" type="arrowDown" />
    </div>

    <ul class="indicators">
      <li
        v-for="(item, i) of banners"
        :key="item.id"
        :class="`indicator ${i === index ? 'active' : ''}`"
        @click="changeByIndicator(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
export default {
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  data() {
    return {
      banners: [],
      index: 0, // 当前显示的第几章轮播图
      containerHeight: 0, // 容器的高度
      isLoading: true,
    };
  },
  // 这里仅仅是注入完成
  async created() {
    this.banners = await getBanners();
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
  },
  methods: {
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
      }
      this.toPage();
    },
    next() {
      this.index++;
      if (this.index >= this.banners.length) {
        this.index = this.banners.length - 1;
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
    handlerScroll(e) {
      console.log(e);
      // if(e.deltaY > 0){
      //   scrollNextCount ++;
      // }
      // if (this.scrollCount >= 3 && e.deltaY > 0) {
      //   console.log("下一页");
      //   this.scrollCount = 0;
      // }
      // if (this.scrollCount >= 3 && e.deltaY < 0) {
      //   console.log("上一页");
      //   this.scrollCount = 0;
      // }
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
