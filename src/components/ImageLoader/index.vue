<template>
  <div class="img-loader-container">
    <img v-if="!isDone" class="placeholder" :src="placeholder" alt="占位图" />
    <img
      :src="src"
      alt="原图"
      @load="loadHandler"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
      default: 2000,
    },
  },
  data() {
    return {
      originLoaded: false,
      isDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    loadHandler() {
      this.originLoaded = true;
      setTimeout(() => {
        console.log(this.duration);
        this.isDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.img-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .full-container();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
