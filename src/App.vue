<template>
  <div id="App">
    <Layout>
      <template #left>
        <SiteAside class="left" />
      </template>
      <template>
        <RouterView />
      </template>
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
    <toTop />
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import toTop from "./components/toTop";
export default {
  name: "App",
  components: {
    Avatar,
    Layout,
    SiteAside,
    toTop,
  },
};
</script>

<style lang="less" scoped>
.left {
  width: 250px;
  height: 100vh;
}
</style>
