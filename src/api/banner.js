import ins from "./request";
export async function getBanner() {
  const resp = await ins.get("/api/banner");
  return resp;
}

