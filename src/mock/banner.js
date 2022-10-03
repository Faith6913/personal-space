import Mock from "mockjs";
Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "咱也不晓得是啥错误",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候 方能勇敢",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "血火同源",
      description: "残杀忠心耿耿之人 忠诚奉献将不再",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "听我怒吼",
      description: "长夜降至 亡者紧随其后",
    },
    {
      id: "4",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "至死方休",
      description: "奔狼有什么资格 来评价雄狮",
    },
    {
      id: "5",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "听我怒吼",
      description: "长夜降至 亡者紧随其后",
    },
  ], // 具体的消息内容，如果code不为0，则必为null
});
// Mock.mock("/api/banner", "get", {
//   code: 0,
//   msg: "",
//   data: [
//     {
//       midImg: "/static/upload/2022-9-29-23-23-53-849-ad0cc.jpg",
//       bigImg: "/static/upload/2022-9-29-23-23-48-585-fb9df.jpg",
//       title: "凛冬将至",
//       description: "人唯有恐惧的时候 方能勇敢",
//       id: "6335b954317d3f0378fec740",
//     },
//     {
//       midImg: "/static/upload/2022-9-29-23-27-10-43-5954f.jpg",
//       bigImg: "/static/upload/2022-9-29-23-27-16-1-31b77.jpg",
//       title: "血火同源",
//       description: "如果我回头，一切都完了",
//       id: "6335b954317d3f0378fec741",
//     },
//     {
//       midImg: "/static/upload/2022-9-29-23-24-46-127-1e6d7.png",
//       bigImg: "/static/upload/2022-9-29-23-24-48-875-6f7df.png",
//       title: "忠言逆耳",
//       description: "残杀对他忠心耿耿的人的掌权者，将不再得到如此忠诚的奉献",
//       id: "6335b954317d3f0378fec742",
//     },
//     {
//       midImg: "/static/upload/2022-9-29-23-25-42-622-04fa8.png",
//       bigImg: "/static/upload/2022-9-29-23-25-45-675-19cd5.png",
//       title: "暗夜漫漫",
//       description: "长夜降至，亡者紧随其后，没有哪个部族能阻挡它们的脚步",
//       id: "6335b954317d3f0378fec743",
//     },
//     {
//       midImg: "/static/upload/2022-9-29-23-26-51-171-fa517.jpg",
//       bigImg: "/static/upload/2022-9-29-23-26-55-341-a76e7.jpg",
//       title: "听我怒吼",
//       description: "兰尼斯特家族 有债必偿",
//       id: "6335b954317d3f0378fec744",
//     },
//   ],
// });

/* 
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "midImg": "/static/upload/2022-9-29-23-23-53-849-ad0cc.jpg",
            "bigImg": "/static/upload/2022-9-29-23-23-48-585-fb9df.jpg",
            "title": "凛冬将至",
            "description": "人唯有恐惧的时候 方能勇敢",
            "id": "6335b954317d3f0378fec740"
        },
        {
            "midImg": "/static/upload/2022-9-29-23-27-10-43-5954f.jpg",
            "bigImg": "/static/upload/2022-9-29-23-27-16-1-31b77.jpg",
            "title": "血火同源",
            "description": "如果我回头，一切都完了",
            "id": "6335b954317d3f0378fec741"
        },
        {
            "midImg": "/static/upload/2022-9-29-23-24-46-127-1e6d7.png",
            "bigImg": "/static/upload/2022-9-29-23-24-48-875-6f7df.png",
            "title": "忠言逆耳",
            "description": "残杀对他忠心耿耿的人的掌权者，将不再得到如此忠诚的奉献",
            "id": "6335b954317d3f0378fec742"
        },
        {
            "midImg": "/static/upload/2022-9-29-23-25-42-622-04fa8.png",
            "bigImg": "/static/upload/2022-9-29-23-25-45-675-19cd5.png",
            "title": "暗夜漫漫",
            "description": "长夜降至，亡者紧随其后，没有哪个部族能阻挡它们的脚步",
            "id": "6335b954317d3f0378fec743"
        },
        {
            "midImg": "/static/upload/2022-9-29-23-26-51-171-fa517.jpg",
            "bigImg": "/static/upload/2022-9-29-23-26-55-341-a76e7.jpg",
            "title": "听我怒吼",
            "description": "兰尼斯特家族 有债必偿",
            "id": "6335b954317d3f0378fec744"
        }
    ]
}

*/
