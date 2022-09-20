<template>
  <form
    class="data-form-container"
    @submit.prevent="handlerSubmit"
    ref="container"
    id="data-form-container"
  >
    <div class="form-item">
      <div class="nickname">
        <input
          type="text"
          max-length="10"
          placeholder="用户昵称"
          v-model="nickname"
          :disabled="isSubmitting"
        />
        <span class="tip">{{ nickname.length }}/10</span>
      </div>
      <span :class="['errorText', `${isError.nickname ? 'err' : ''}`]">{{
        error.nickname
      }}</span>
    </div>

    <div class="form-item">
      <div class="text-area">
        <textarea
          type="area"
          max-length="300"
          placeholder="输入内容"
          v-model="content"
          :disabled="isSubmitting"
        ></textarea>
        <span class="tip">{{ content.length }}/300</span>
      </div>
      <!-- 要想显示只需要添加一个err类样式 -->
      <span :class="['errorText', `${isError.content ? 'err' : ''}`]">{{
        error.content
      }}</span>
    </div>

    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmitting">
          {{ isSubmitting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nickname: "",
      content: "",
      error: {
        nickname: "请填写昵称",
        content: "请填写内容",
      },
      isError: {
        nickname: false,
        content: false,
      },
      isSubmitting: false,
    };
  },
  methods: {
    // handlerNicknameInput(e) {
    //   function _handlerkeyboard(e) {
    //     if (e.code === "Backspace") {
    //       console.log("解除封锁状态");
    //       inputDom.removeAttribute("disabled");
    //       inputDom.focus();
    //       window.removeEventListener("keydown", _handlerkeyboard);
    //     }
    //   }
    //   const inputDom = e.target;
    //   const span = e.target.nextSibling;
    //   if (inputDom.value.length >= 15) {
    //     inputDom.setAttribute("disabled", "true");
    //     span.innerText = `${inputDom.value.length}/15`;
    //     window.addEventListener("keydown", _handlerkeyboard);
    //     return;
    //   }
    //   span.innerText = `${inputDom.value.length}/15`;
    // },
    handlerSubmit() {
      if (!this.nickname || !this.content) {
        if (!this.content) {
          this.isError.content = true;
        } else {
          this.isError.content = false;
        }
        if (!this.nickname) {
          this.isError.nickname = true;
        } else {
          this.isError.nickname = false;
        }
        return;
      }
      this.isError.nickname = false;
      this.isError.content = false;
      this.isSubmitting = true; // 正在提交，防止重复点击
      this.$emit(
        "submit",
        this.nickname,
        this.content,
        (msgContent, msgType, disappearDuration) => {
          // 弹出评论成功消息
          this.$showMessage({
            content: msgContent,
            type: msgType,
            duration: disappearDuration,
            container: this.$refs.container,
            callback: () => {
              this.isSubmitting = false;
              this.nickname = "";
              this.content = "";
            },
          });
        }
      ); // 传回调函数的形式与父组件通信
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  width: 100%;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  .form-item {
    position: relative;
    .nickname {
      margin-bottom: 30px;
      position: relative;
      input {
        padding-left: 10px;
        letter-spacing: 2px;
        width: 300px;
        height: 25px;
        border-radius: 5px;
        font-size: 12px;
        border: 1px dashed lighten(@gray, 10%);
        &::placeholder {
          color: @gray;
        }
        &:focus {
          outline: none;
          border: 1px dashed @primary;
        }
        &:disabled {
          cursor: not-allowed;
        }
      }
      .tip {
        position: absolute;
        left: 285px;
        bottom: 4px;
        font-size: 10px;
        color: @gray;
      }
    }
    .text-area {
      position: relative;
      textarea {
        width: 600px;
        height: 100px;
        resize: none;
        padding: 10px;
        letter-spacing: 2px;
        margin-bottom: 30px;
        border-radius: 5px;
        font-size: 13px;
        border: 1px dashed lighten(@gray, 10%);
        &::placeholder {
          color: @gray;
        }
        &:focus {
          outline: none;
          border: 1px dashed @primary;
        }
        &:disabled {
          cursor: not-allowed;
        }
      }
      .tip {
        position: absolute;
        left: 585px;
        bottom: 38px;
        font-size: 10px;
        color: @gray;
      }
    }
    .button-area {
      button {
        width: 80px;
        height: 30px;
        outline: none;
        border: none;
        font-size: 12px;
        font-weight: 400;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        background-color: darken(@primary, 10%);
        letter-spacing: 2px;
        &:disabled {
          background-color: lighten(@primary, 10%);
          cursor: not-allowed;
        }
      }
    }
    span {
      &.errorText {
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        color: red;
        font-size: 14px;
        transform: translateY(-10px);
      }
      &.err {
        display: block;
      }
    }
  }
}
</style>
