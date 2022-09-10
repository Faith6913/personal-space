<template>
  <div class="contact-container">
    <a href="https://github.com/Faith6913" target="_blank">
      <Icon class="iconFont" type="github" />
      <p>Faith6913</p>
    </a>
    <a href="mailto:zhihao_2023@163.com" target="_blank">
      <Icon class="iconFont" type="mail" />
      <p>zhihao_2023@163.com</p>
    </a>
    <a
      href="tencent://message/?Menu=yes&uin=1728935296&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      target="_blank"
      class="qq"
    >
      <Icon class="iconFont" type="qq" />
      <p>1728935296</p>
      <div class="qr-code">
        <img src="@/assets/my-qq.png" alt="" />
      </div>
    </a>
    <a target="_blank">
      <Icon class="iconFont weiChat" type="weixin" />
      <p>Liuzhihao_93</p>
      <div class="qr-code">
        <img src="@/assets/my-weichat.png" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
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
    .iconFont{
        font-size: 20px;
    }
    .weiChat {
      font-size: 24px;
      text-indent: -2px;
    }
  }
}
</style>
