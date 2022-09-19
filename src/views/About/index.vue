<template>
  <div class="about-container">
    <div class="about-content" v-loading="loading || !srcLoaded">
      <iframe :src="data" frameborder="0" @load="srcLoaded = true"></iframe>
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
  created() {
    this.$store.dispatch("about/fetchAbout");
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
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
