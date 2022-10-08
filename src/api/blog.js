import request from "./request";

/**
 * 获取博客列表
 * @param {Number} page
 * @param {Number} limit
 * @param {Number} categoryid
 * @returns
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  const resp = await request.get(
    `/api/blog?page=${page}&limit=${limit}&categoryid=${categoryid}`
    // `/api/blog?page=1&limit=10&categoryid=6336e8bbea1eb33824018f14`
  );
  console.log(resp);
  return resp;
}
/**
 * 获取博客分类
 * @returns resp 响应结果
 */
export async function getBlogtypes() {
  const resp = await request.get("/api/blogtype");
  return resp;
}

/**
 * 根据博客的 id 获取单个博客详细内容
 * @param {String} blogId
 * @returns 响应结果
 */
export async function getBlogContentById(blogId) {
  const resp = await request.get(`/api/blog/${blogId}`);
  return resp;
}

/**
 * 提交评论的接口封装
 * @param {Objecy} commentInfo 与评论有关的请求体
 *  {
      nickname: "昵称",
      content: "评论内容，纯文本",
      blogId: <id>	#评论的博客id
    }
 * @returns 响应结果
 */
export async function postComment(commentInfo) {
  const resp = await request.post(`/api/comment`, commentInfo);
  return resp;
}

/**
 * 分页获取评论
 * @param {Number} page
 * @param {Number} limit
 * @param {Number} bolgId
 * @param {Number} keyWord
 * @returns
 */
export async function getComments(
  page = 1,
  limit = 10,
  blogId = -1,
  keyWord = ""
) {
  return await request.get(
    `/api/comment?page=${page}&limit=${limit}&blogid=${blogId}&keyWord=${keyWord}`
  );
}
