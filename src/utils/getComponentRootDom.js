import Vue from "vue";
/**
 * 根据组件和必备的属性返回一个真是的DOM
 * @param {Vue Object} comp
 * @param {Object} props
 */
export default function getComponentRootDom(comp, props) {
  const vm = new Vue({
    render(h) {
      // 渲染一个组件，组件中有什么属性，通过第二个参数传入进去
      return h(comp, { props });
    },
  });
  // 将虚拟Dom挂载到真实的Dom上
  vm.$mount();
  return vm.$el; // 获取真实的Dom
}
