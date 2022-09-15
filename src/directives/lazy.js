// 图片懒加载的自定义指令代码
import defaultImg from "@/assets/default.gif";
import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";
// 待处理的图片列表，就是说里边的图片需要在视口范围内的时候
// 需要对它的src地址设置为真实的地址，当处理完成之后,就把他
// 在数组中删除，以此来保证图片只会被处理一次

let images = [];

const debounceSet = debounce(setImages, 50);
/**
 * 调用该函数，就可以处理应该要显示的图片
 */
function setImages() {
  for (let imgObj of images) {
    if (
      imgObj.imgDom.getBoundingClientRect().bottom > 0 &&
      imgObj.imgDom.getBoundingClientRect().top < window.innerHeight
    ) {
      imgObj.imgDom.setAttribute("src", imgObj.picUrl);
      imgObj.isResolved = true;
    }
    // 删除已经处理过的图片，防止重复处理
    images = images.filter((i) => !i.isResolved);
  }
}
export default {
  bind(el, binding) {
    images.push({
      imgDom: el,
      picUrl: binding.value,
      isResolved: false,
    });
    
    setTimeout(setImages, 50);
    el.setAttribute("src", defaultImg);
    eventBus.$on("blogScroll", debounceSet);
  },
};
