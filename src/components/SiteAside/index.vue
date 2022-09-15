<template>
  <div class="sideaside-container">
    <div class="up">
      <Avatar :url="avatarURL" class="avatar" :size="120" />
      <h1 class="title">-----------</h1>
      <Menu class="menu" />
    </div>
    <div class="down">
      <Contact class="contact" />
      <p>苏ICP备198372908号</p>
    </div>
  </div>
</template>

<script>
//https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F262%2Fw600h462%2F20181006%2FlxbD-hkvrhps7080479.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664008229&t=8000eaf4c0debd9fc04bbfafc02bb313'
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import avatar from "@/assets/1.jpg";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
      avatarURL: avatar,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.sideaside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 150px;
  .up {
    margin-bottom: 30px;
    .title {
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
  }
  .avatar {
    margin: 0 auto;
  }
  p {
    margin: 40px auto;
    text-align: center;
    font-size: 12px;
    color: darken(@gray, 45%);
  }
}
</style>
