<template>
  <div class="carousel">
    <ImageLoader
      class="image-loader"
      :src="src[_id - 1].bigImg"
      :placeholder="src[_id - 1].midImg"
    />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["src", "_id"],
  components: {
    ImageLoader,
  },
  methods: {
    test() {
      console.log(this.src);
      console.log(this.src[this._id]);
    },
  },
};
</script>

<style lang="less" scoped>
.carousel{
  width: 100%;
  height: 100%;
  .image-loader{
    width: 100%;
    height: 100%;
  }
}
</style>
