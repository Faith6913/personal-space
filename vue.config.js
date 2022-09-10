const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["true"],
  devServer: {
    proxy: {
      "/api/v3": {
        target: "https://www.zhihu.com",
      },
      "/images": {
        target: "https://cdn.leoh.io",
      },
      "/infoplus": {
        target: "https://ehall.njtech.edu.cn",
      },
    },
  },
});
