const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["true"],
  devServer: {
    proxy: {
      // "/api/v3": {
      //   target: "https://www.zhihu.com",
      // },
      // "/images": {
      //   target: "https://cdn.leoh.io",
      // },
      // "/infoplus": {
      //   target: "https://ehall.njtech.edu.cn",
      // },
      "/api": {
        target: "http://localhost:7001",
      },
      static: {
        target: "http://localhost:7001",
      },
    },
  },
  // 通过 configureWebpack 选项，可对 webpack 进行额外的配置
  // 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
  configureWebpack: require("./webpack.config"),
});
