<template>
  <nav class="menu-container">
    <RouterLink
      exact="true"
      v-for="item in items"
      :key="item.link"
      :to="item.link"
      :class="{ selected: isSelected(item.link) }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isSelected(path) {
      if (path === "/blog") {
        return location.pathname.startsWith("/blog");
      } else {
        return location.pathname.toLowerCase() === path.toLowerCase();
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.router-link-exact-active{
      background-color: #2d2d2d;
    }
  }
}
</style>
