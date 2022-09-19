import request from "./request";
export default async function getAbout() {
  return await request.get("/api/about");
}
