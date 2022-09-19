// 关于about页面的的vuex数据仓库
import getAbout from "@/api/about";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: "",
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
    async fetchAbout(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getAbout();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      return resp;
    },
  },
};
