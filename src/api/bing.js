import axios from "axios";
export async function getBackground() {
  const resp = await axios.get("/images/base_zero/image_62.jpg");
  return resp;
}
getBackground().then((jpg) => {
  console.log(jpg.data);
});
