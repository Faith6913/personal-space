// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法，fetchData ，这里仅仅帮助调用
export default function (dataType, page = 1, limit = 10) {
  return {
    data() {
      return {
        isLoading: true,
        data: dataType,
      };
    },
    async created() {
      const datas = await this.fetchData(page, limit);
      this.data = datas;
      this.isLoading = false;
    },
  };
}
