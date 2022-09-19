import Mock from "mockjs";
import weixinQr from "@/assets/my-weichat.png";
import qqQr from "@/assets/my-qq.png";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F262%2Fw600h462%2F20181006%2FlxbD-hkvrhps7080479.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664008229&t=8000eaf4c0debd9fc04bbfafc02bb313'", //个人空间的头像
    siteTitle: "我的个人空间", //个人空间的标题
    github: "https://github.com/DuYi-Edu", //空间主人的github地址
    qq: "1728935296", //空间主人的qq号
    qqQrCode: qqQr, //空间主人的qq二维码 如果是网络上的资源，直接写网址即可
    weixin: "18954355527", //空间主人的微信
    weixinQrCode: weixinQr, //空间主人的微信二维码
    mail: "zhihao_2023@163.com", //空间主人的邮箱
    icp: "苏ICP备17001719号", //空间主人的备案号
    githubName: "Faith6913", //空间主人的github名称
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f", //网站的favicon地址
  },
});
