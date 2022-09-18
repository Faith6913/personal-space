import { getBanners } from "@/api/banner";
export default {
  namespced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setDataS(state, payload) {
      state.banners = payload;
    },
  },
  actions: {
    async fetchBanner(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
