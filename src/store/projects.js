import getProjects from "@/api/project";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: {},
  },
  mutations: {
    setLoading(state, payLoad) {
      state.loading = payLoad;
    },
    setData(state, payLoad) {
      state.data = payLoad;
    },
  },
  actions: {
    async getProjects(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
