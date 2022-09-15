/*
 * 事件总线
 * 具体完成上述的四个功能(其中第四个功能是通过前三个完成的)
 * 导出对象，内部包含一些方法，供外部调用
 */
/*
   给一个全局的数组,每次有添加监听事件的时候,就往内部添加一个对象，其属性名是事件名，属性值是一个数组，
   里边是对此事件进行监听的处理函数(因为可能有很多组件或JS模块对该事件进行监听)，这里可以使用new Set()
   集合进行自动的去重操作！
   [
   	{'event1': [ handler1, handler2 ]},
   	{'event2': [ handler1 ]},
   ]
*/
/**
 * 事件描述及使用方法
 * [
 *  {"scrollToBottom": []}     滚动条滑动到底部
 *  {"showToTop": []},         显示'回到顶部'控件
 *  {"hideToTop": []},         隐藏'回到顶部'控件
 *  {"blogScroll": []},        博客滚动
 *  {"toTop": []}              回到顶部
 * ]
 */
const listeners = [];
export default {
  // 开启某个事件的监听
  $on(eventName, handler) {
    if (!listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler);
  },
  // 取消某个事件的监听
  $off(eventName, handler) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName].delete(handler);
  },
  // 触发某个事件（可以传参），通过剩余参数接受
  $emit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName].forEach((handler) => {
      handler(...args);
    });
  },
};

// 方法2
// import Vue from "vue";
// export default new Vue({});
