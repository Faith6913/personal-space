import axios from "axios";
// 在知乎上找到了一个API获取世界各国电话号码开头
export async function getCountries(){
    const resp = await axios.get("/api/v3/oauth/sms/supported_countries");
    console.log(resp.data.data);
}
getCountries();