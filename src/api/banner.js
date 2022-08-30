import ins from "./request";
export async function getBanners() {
  const resp = await ins.get("/api/banner");
  return resp;
}

