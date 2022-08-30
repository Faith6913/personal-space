const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: ['true'],
  devServer:{
    proxy:{
      "/api/v3": {
        target: "https://www.zhihu.com"
      }
    }
  }
})
