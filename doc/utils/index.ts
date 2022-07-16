export function debounce(fn, delay = 200) {
  //设置time为定时器
  var time = null;
  //闭包原理，返回一个函数
  return function (e) {
    //如果定时器存在则清空定时器
    if (time) {
      clearTimeout(time);
    }
    //设置定时器，规定时间后执行真实要执行的函数
    time = setTimeout(() => {
      //此箭头函数里的this指向btn这个按钮
      fn.call(this, arguments); //改变真实要执行函数的this指向，原submit函数里面的this指向window
    }, delay);
  };
}
