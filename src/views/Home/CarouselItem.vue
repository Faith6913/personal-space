<template>
  <div class="carousel">
    <ImageLoader
      class="image-loader"
      :src="src[_id - 1].bigImg"
      :placeholder="src[_id - 1].midImg"
      @load="handlerLoad"
    />
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
  methods: {
    handlerLoad() {
      console.log("处理加载完成事件");
      // animation: textLoading 2s alternate;
      console.log(this.$refs.title);
      // this.$refs.title.style.width = "100px";
      // this.$refs.title.style.animation = "textLoading 2s alternate infinite";
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
  .image-loader {
    width: 100%;
    height: 100%;
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
  }
  .title {
    width: 0px;
    // animation: textLoading 2s infinite;
    // animation-name: textLoading;
    // animation-duration: "2s";
    // animation-iteration-count: infinite;
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
