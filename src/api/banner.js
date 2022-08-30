import axios from "axios";
import { showMessage } from "@/utils";
export async function getBanner() {
  const resp = await axios.get("/api/banner");
  return resp.data;
}

showMessage({
  content: "adafafaew",
  type: "error",
});
