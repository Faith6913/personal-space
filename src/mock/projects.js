import Mock from "mockjs";
Mock.mock("/api/project", "get", {
  code: 0,
  msg: "",
  "data|15-30": [
    {
      "id|+1": 0,
      "name|1": [
        "个人博客系统",
        "网页简历",
        "后台管理系统",
        "To-Do List App",
        "Counting Down App",
      ],
      url: "https://www.baidu.com",
      github: "@url",
      description: ["@cparagraph(1)", "@cparagraph"],
      thumb: "@image(240x150, @color, #000, RandomImg)",
      order: 1,
      "tagArr|1-4": [
        {
          "tagName|1": ["JavaScript", "Vue", "HTML", "CSS", "React", "Git", "WebPack"],
          "bgColor|1": ["#ef4c4c", "#9696dc", "#dd98e3", "pink", "#c7c725", "rgb(113, 241, 145)"],
        }
      ],
    },
  ],
});
