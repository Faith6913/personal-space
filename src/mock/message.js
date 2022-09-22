import Mock from "mockjs";
import qs from "querystring";
Mock.mock(/^\/api\/message\?.*$/, "get", function (options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    "data|10-20": {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          "id|+1": 1,
          nickname: "@cname",
          content: "@cparagraph(3,5)",
          blog: {
            id: "@guid",
            title: "@ctitle",
          },
          createDate: "@datetime()",
          avatar: "@image('100x100', '#6b9eee', 'Avatar')",
        },
      ],
    },
    // data: {
    //   total: 0,
    //   rows: [],
    // },
  });
});

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    "id|+1": 1,
    "nickname|1": "@cname",
    content: "@cparagraph(1, 3)",
    createDate: "@datetime()",
    avatar: "@image('100x100', '#4A7BF7', 'Avatar')",
  },
});
