<template>
  <div class="contact-container">
    <a :href="data.github" target="_blank">
      <Icon class="iconFont" type="github" />
      <p>{{ data.githubName }}</p>
    </a>
    <a href="mailto:zhihao_2023@163.com" target="_blank">
      <Icon class="iconFont" type="mail" />
      <p>{{ data.mail }}</p>
    </a>
    <a :href="data.qqQrCode" target="_blank" class="qq">
      <Icon class="iconFont" type="qq" />
      <p>{{ data.qq }}</p>
      <div class="qr-code">
        <img src="@/assets/my-qq.png" alt="" />
      </div>
    </a>
    <a :href="data.weixinQrCode" target="_blank">
      <Icon class="iconFont weiChat" type="weixin" />
      <p>{{ data.weixin }}</p>
      <div class="qr-code">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.contact-container {
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  a {
    color: @lightWords;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-left: 35px;
    margin: 5px 0;
    cursor: pointer;
    position: relative;
    p {
      margin-left: 10px;
      &:hover + .qr-code,
      &:hover + .qr-code::after {
        transform: scaleY(1);
      }
    }
    .qr-code {
      width: 150px;
      height: 150px;
      position: absolute;
      left: 50px;
      top: -145px;
      .scale-cartoon(@pos-v: bottom);
      .triangle-pointer();
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .iconFont {
      font-size: 20px;
    }
    .weiChat {
      font-size: 24px;
      text-indent: -2px;
    }
  }
}
</style>
