<template>
  <div id="App">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template>
        <div class="main">
          <RouterView/>
        </div>
      </template>
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
  </div>
</template> 

<script>
import Avatar from "./components/Avatar";
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  name: "App",
  components: {
    Avatar,
    Layout,
    SiteAside
  },
};
</script>

<style lang="less" scoped>
.left{  
  width: 250px;
  height: 100vh;
}
</style>
