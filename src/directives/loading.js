import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
// 导出自定义指令的一些相关配置对象
export default function (el, binding) {
  if (binding.value) {
    const img = document.createElement("img");
    img.src = loadingUrl;
    img.classList.add(styles.loading);
    img.dataset.id = "loading";
    el.appendChild(img);
  }else {
    const img = el.querySelector("img[data-id]");
    img.remove();
  }
}
