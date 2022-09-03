<template>
  <div class="carousel" ref="container" @mousemove="handlerMousemove">
    <div class="carousel-img"  ref="imgLoader">
      <ImageLoader
        class="image-loader"
        :src="src[_id - 1].bigImg"
        :placeholder="src[_id - 1].midImg"
        @load="handlerLoad"
      />
    </div>
    <h3 class="title" ref="title">{{ src[_id - 1].title }}</h3>
    <h4 class="description" ref="desp">{{ src[_id - 1].description }}</h4>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["src", "_id", "curIndex"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      despWidth: 0,
      containerSize: null, // 外层容器的尺寸
      imageSize: null, // 图片元素的尺寸
      mouseStartX: null,
      mouseStartY: null,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.despWidth = this.$refs.desp.clientWidth;
    this.setDatas();
    window.addEventListener("resize", this.setDatas);
  },
  destroyed() {
    window.removeEventListener("resize", this.setDatas);
  },
  methods: {
    handlerLoad() {
      this.showWords();
    },
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.desp.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.desp.style.width = 0;
      this.$refs.title.style.transition = "2s";
      this.$refs.desp.style.transition = "3s";
      this.$refs.desp.style.transitionDelay = "2s";
      this.$refs.desp.clientWidth;
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desp.style.width = this.despWidth + "px";
    },
    setDatas() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.imageSize = {
        width: this.$refs.imgLoader.clientWidth,
        height: this.$refs.imgLoader.clientHeight,
      };
    },
    handlerMousemove(e) {
      const domRect = this.$refs.container.getBoundingClientRect();
      const containerLeft = domRect.left;
      const containerTop = domRect.top;
      const containerWidth = this.containerSize.width;
      const containerHeight = this.containerSize.height;
      const imageDom = this.$refs.imgLoader;
      const leftOver = (this.imageSize.width - containerWidth) / 2;
      const topOver = (this.imageSize.height - containerHeight) / 2;

      // 直接考虑极限状态，然后剩下的距离平均分摊，还是老师的思路比较好实现
      imageDom.style.left = `${
        -2 * leftOver * [(e.clientX - containerLeft) / containerWidth]
      }px`;
      imageDom.style.top = `${
        -2 * topOver * [(e.clientY - containerTop) / containerHeight]
      }px`;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  // 不overflow: hidden 一下的话，切换图片的时候会覆盖上面的
  overflow: hidden;
  .carousel-img {
    width: 120%;
    height: 120%;
    position: absolute;

    .image-loader {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
  }

  .title,
  .description {
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    left: 50px;
    top: 40%;
    font-size: 2em;
    color: #fff;
    font-weight: 200;
    letter-spacing: 4px;
    text-shadow: 2px 0 0 rgba(0, 0, 0, 0.5), -2px 0 0 rgba(0, 0, 0, 0.5),
      0 2px 0 rgba(0, 0, 0, 0.5), 0 -2px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
  }
  .description {
    font-size: 1.2em;
    transform: translateY(60px);
  }
}

@keyframes textLoading {
  0% {
    width: 0;
  }
  100% {
    width: 100px;
  }
}
</style>
