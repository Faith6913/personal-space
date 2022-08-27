<template>
  <div id="App">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>
      <template>
        <div class="main">main</div>
      </template>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Empty from "./components/Empty";
import Layout from "./components/Layout";
export default {
  name: "App",
  components: {
    Empty,
    Layout,
  },
};
</script>

<style scoped></style>
