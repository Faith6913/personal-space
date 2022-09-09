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
        "id|+1": 1,
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
          "thumb|1": [
            Mock.Random.image("300x250", "#000", "#fff", "Random Image"),
            null,
          ],
          createDate: "@date('T')",
        },
      ],
    },
  });
});

Mock.mock(/^\/api\/blog\/.*$/, "get", function (options) {
  const query = qs.parse(options.url);
  console.log(query);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      id: "@guid",
      content: "@cparagraph",
    },
  });
});

// "4B15914c-eFD5-048B-B43c-AE4c31bC9E97"

/* 
{
	code: 0,
	msg: "",
	data: { 
		id: <id>,
    title: "博客标题",
    category: {
    	id: 1,
    	name:"分类3"
    },
    scanNumber: 0, #浏览次数
    commentNumber: 0, #评论数
    description: "博客描述，显示到列表页",
    createDate: 1604976798936, #时间戳，创建日期
    toc:  [ # 博客章节目录
      { name: "章节1", anchor: "title-1" },
      {
        name: "章节2",
        anchor: "title-2",
        children: [
          { name: "章节2-1", anchor: "title-2-1" },
          { name: "章节2-2", anchor: "title-2-2" },
        ],
      },
      {
        name: "章节3",
        anchor: "title-3",
      },
    ],
    htmlContent: "....", #博客的html内容
    thumb: "缩略图地址"
}
*/
