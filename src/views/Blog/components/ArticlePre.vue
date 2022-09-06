<template>
  <li class="article">
    <img :src="articleObject.thumb" alt="RandomImage" class="img" />
    <h2 class="title">{{ articleObject.title }}</h2>
    <p class="description">{{ articleObject.description }}</p>
    <div class="info">
      <div class="date">
        日期: <span>{{ articleObject.createDate }}</span>
      </div>
      <div class="Num">
        浏览: <span>{{ articleObject.scanNumber }}</span>
      </div>
      <div class="Num">
        评论: <span>{{ articleObject.commentNumber }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    articleObject: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      date: null,
    };
  },
  created() {
    console.log();
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.article {
  height: 180px;
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1.1px solid rgb(161, 160, 160);
  img {
    width: 130px;
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 10px;
  }
  .title {
    position: absolute;
    left: 150px;
    top: 10px;
    margin: 0;
    cursor: pointer;
    &:hover {
      color: #f40;
    }
  }
  .description {
    position: absolute;
    left: 150px;
    top: 80px;
    margin: 0;
    padding-right: 10px;
    text-indent: 2em;
  }
  .info {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 150px;
    top: 50px;
    .Num,
    .date {
      display: flex;
      font-size: 12px;
      color: @gray;
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
