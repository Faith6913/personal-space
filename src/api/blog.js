import request from "./request";

/**
 * 获取博客列表
 * @param {Number} page
 * @param {Number} limit
 * @param {Number} categoryid
 * @returns
 */
export async function getBlogs(page = 1, limit = 10, categoryid = 1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}
/**
 * 获取博客分类
 * @returns resp 相应结果
 */
export async function getBlogtypes() {
  return await request.get("/api/blogtype");
}
