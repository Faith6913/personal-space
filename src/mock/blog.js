import Mock from "mockjs";
import qs from "querystring";
Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  data: {
    code: 0,
    msg: "",
    "data|10-20": [
      {
        "id|+1": 0,
        name: "分类@id",
        "articleCount|10-100": 0, //该分类下文章的数量
        order: "@id",
      },
    ],
  },
});
Mock.mock(/^\/api\/blog\?.*$/, "get", function (options) {
  // console.log(options);
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0, //总数
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          title: "@ctitle",
          description: "@cparagraph(1, 10)",
          category: {
            "id|1-10": 0,
            name: "分类@id",
          },
          "scanNumber|0-1000": 0,
          "commentNumber|0-200": 0,
          "thumb|1": [Mock.Random.image("300x250", "#000", "#fff", "Random Image"), null],
          createDate: "@date('T')",
        },
      ],
    },
  });
});
