<template>
  <div class="container">
    <Empty 
        text="空空如也"
    />
  </div>
</template>

<script>
import Empty from "./";
export default {
    name: "App",
    components:{
        Empty,
    }
}
</script>

<style>
.container{
  width: 100%;
  height: 500px;
  position: relative;
}
</style>