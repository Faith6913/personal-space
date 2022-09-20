import request from "./request";

/**
 * 获取留言区留言
 * @param {Number} page
 * @param {Number} limit
 * @returns 获取到的远程数据对象
 */
export async function getMessage(page = 1, limit = 10) {
  return await request.get("/api/message", {
    params: {
      page: page,
      limit: limit,
    },
  });
}

/**
 * 提交留言的接口封装
 * @param {Objecy} messageInfo 与评论有关的请求体
 *  {
      nickname: "昵称",
      content: "评论内容，纯文本",
    }
 * @returns 响应结果
 */
export async function postMessage(messageInfo) {
  const resp = await request.post(`/api/message`, messageInfo);
  return resp;
}
