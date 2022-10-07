<template>
  <div class="demo-card-container">
    <a :href="demoList.url" target="_blank"
      ><img v-lazy="demoList.thumb" alt="封面"
    /></a>
    <div class="demo-name-container">
      <a :href="demoList.url" target="_blank"
        ><h3>{{ demoList.name }}</h3></a
      >
    </div>
    <div class="demo-desp-container">
      <p>{{ demoList.description[0] }}</p>
    </div>
    <div v-if="demoList.tagArr === []" class="tag-out-container">
      <Tag v-for="(item, i) in demoList.tagArr" :key="i" :info="item" />
    </div>
    <div v-else class="bottom-container">
      <a :href="demoList.github" class="github" target="_blank">
        <span>转到Github</span>
      </a>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  components: {
    Tag,
  },
  props: {
    demoList: {
      type: Object,
      required: true,
      default: {},
    },
  },
  methods: {
    handleClick() {
      console.log(this.demoList);
    },
  },
};
</script>

<style scoped lang="less">
@import "@/styles/var.less";
.demo-card-container {
  height: 250px;
  background-color: rgb(255, 255, 255);
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0;
  &:hover {
    transform: scale(1.1) translateY(-10px);
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .demo-name-container {
    width: 100%;
    height: 20px;
    padding-top: 5px;
    padding-left: 20px;
    h3 {
      font-size: 16px;
      margin: 0;
    }
  }
  .demo-desp-container {
    width: 100%;
    height: 20px;
    font-size: 12px;
    padding-left: 20px;
    p {
      color: #262627;
      font-weight: 400;
      height: 17px;
      width: 277px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .bottom-container {
    width: 100%;
    height: 20px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 20px;
    .github {
      width: 100px;
      height: 100px;
      span {
        font-weight: 400;
      }
    }
  }
  .tag-out-container {
    display: flex;
    padding-top: 5px;
    padding-left: 20px;
  }
  cursor: pointer;
  transition: 0.5s;
}
</style>
