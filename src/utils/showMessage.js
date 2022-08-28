import styles from "@/styles/message.module.less";
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久消失
 * @param {HTMLElement} container 容器
 */
export default function showMessage(options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  // 创建消息元素
  const div = document.createElement("div");
  const iconSpan = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class="${styles.icon}">${iconSpan.outerHTML}</span><span>${content}</span>`;
  div.className = `${styles.message} ${styles[`message-` + type]}`;
  // 这个地方是给父元素设置定位性质
  if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }
  container.appendChild(div);
  // 2.要想产生动画效果，需要强制浏览器渲染一下
  div.clientTop;

  // 1.回归到正常位置，但是只有这段代码是没有动画效果的
  // 1.因为浏览器执行Js和渲染都是单线程的，都是在渲染进程的渲染主线程中进行的
  // 1.因此渲染是异步执行的最终结果相当于只是渲染了后面的效果
  div.style.opacity = 1;
  div.style.transform = "translate(-50%, -50%)";

  // duration时间之后，弹出框消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = "translate(-50%, -50%) translateY(-10px)";
    div.addEventListener("transitionend", function () {
        div.remove();
        // 如果又回调函数，就自动运行回调函数
        options.callback && options.callback();
    });
  }, duration);
}
