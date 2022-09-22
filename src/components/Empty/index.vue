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
      default: "暂无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@textColor: rgb(217, 215, 215);
@iconColor: rgb(150, 149, 149);
.empty-container {
  // height: inherit;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  .self-center();
  .iconfont {
    font-size: 80px;
    color: @iconColor;
  }
  p{
    font-size: 20px;
    color: @textColor;
    letter-spacing: 2px;
    text-align: center;
  }
}
</style>
