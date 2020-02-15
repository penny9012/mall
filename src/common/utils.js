export function // 防抖动函数  减少图片请求的次数 减少对性能的损耗
debounce(func, delay) {
  let timer = null;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg);
    }, delay);
  };
}
