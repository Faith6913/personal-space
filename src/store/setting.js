// 这里是setting数据的获取与导出
import getSetting from "@/api/setting";
import titleControl from "@/utils/titleControl";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      // 设置网站图标的部分
      if (resp.favicon) {
        //<link rel="shortcut icon" href="__TMPL__/public/images/picture/favicon.ico">
        let link = document.querySelector("link[rel='icon']");
        if (link) {
          link.href = resp.favicon;
          return;
        }
        link = document.createElement("link");
        link.rel = "shortcut icon";
        link.type = "images/x-icon";
        link.href = resp.favicon;
        document.querySelector("head").appendChild(link);
      }
      // 设置网站标题的判断选项
      if (resp.siteTitle) { 
        titleControl.setSiteTitle(resp.siteTitle);
      }
    },
  },
};
