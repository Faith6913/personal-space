import Mock from "mockjs";

Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  data: {
    name: "blogtype",
  },
});
