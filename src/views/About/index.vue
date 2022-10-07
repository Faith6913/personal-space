<template>
  <div class="about-container">
    <div class="about-content">
      <iframe :src="data" frameborder="0" @load="handleLoad"></iframe>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: {
    ...mapState("about", ["loading", "data"]),
  },
  async created() {
    this.$store.dispatch("about/fetchAbout");
  },
  methods: {
    handleLoad() {
      console.log("把加载去掉");
      this.srcLoaded = true;
    },
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  .about-content {
    width: 100%;
    height: 100vh;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
