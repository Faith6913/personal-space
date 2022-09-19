import Mock from "mockjs";

Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://resumelzh-1304294632.cos.ap-nanjing.myqcloud.com/index.html",
  // data: "http://skill.phodal.com/#_rs2tu_1_Name",
  // data: "https://blog.csdn.net/facial_123?spm=1011.2124.3001.5343",
});
