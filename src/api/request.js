import axios from "axios";
import { showMessage } from "@/utils";
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
  if (resp.data.code === 0) {
    return resp.data.data;
  }
  showMessage({
    content: resp.data.msg,
    type: "error",
  });
  return null;
});

export default ins;
