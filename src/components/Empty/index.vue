<template>
  <div class="empty-container">
    <Icon 
        type="empty" 
        class="iconfont" 
    />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import iconComponent from "@/components/Icon";
export default {
  components: {
    Icon: iconComponent,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@textColor: rgb(164, 162, 162);
@iconColor: rgb(143, 133, 133);
.empty-container {
  // height: inherit;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  .self-center();
  .iconfont {
    font-size: 40px;
    color: @iconColor;
  }
  p{
    font-size: 10px;
    color: @textColor;
    letter-spacing: 2px;
  }
}
</style>
