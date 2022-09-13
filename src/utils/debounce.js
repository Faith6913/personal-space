/**
 * 防抖函数，根据传入的函数和延迟时间，实现对函数fn的防抖执行机制
 * @param {Function} fn
 * @param {Number} delay
 * @returns
 */
export default (fn, delay) => {
  let timeId = null;
  return (...args) => {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
