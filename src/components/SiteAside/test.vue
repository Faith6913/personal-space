<template>
    <div class="test-container">
        <SiteAside />
    </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";

export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>

.test-container{
    width: 250px;
    height: 100vh;   
    border: 2px solid;
    margin: 0 auto;
}
</style>
