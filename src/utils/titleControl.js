/* 
    标题组成:  路由标题-网站标题
    路由标题:  导航守卫控制
    网站标题:  仓库控制
*/
let routerTitle,
  siteTitle = "";

function setTitle() {
  let title = document.querySelector("title");
  if (title) {
    if (routerTitle === "" && siteTitle === "") {
      title.innerText = "loading...";
    } else if (routerTitle !== "" && siteTitle === "") {
      title.innerText = routerTitle;
    } else if (routerTitle === "" && siteTitle !== "") {
      title.innerText = siteTitle;
    } else {
      title.innerText = `${routerTitle}-${siteTitle}`;
    }
  } else {
    title = document.createElement("title");
    title.innerText = routerTitle;
    document.querySelector("head").appendChild(title);
  }
}
export default {
  setRouterTitle(title) {
    console.log("设置路由标题", title);
    routerTitle = title;
    setTitle();
  },
  setSiteTitle(title) {
    console.log("设置网站标题", siteTitle);
    siteTitle = title;
    setTitle();
  },
};
