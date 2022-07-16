/**
 * @constant 正则表达式常量
 */
const DATA_REGEX_PATTERN = {
  color16: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/,
  colorRgb: /^(rgb|RGB)/ // 匹配是否是rgb颜色
};

/**
* @overview 16进制颜色转rgb
* @author gf
* @param { color, opacity }
* @return { string }
* @example color16ToRgb("#BF0060")
*/
function color16ToRgb(color, opacity = 1) {
  const regColor = DATA_REGEX_PATTERN.color16;
  if (!regColor.test(color)) {
    return;
  }
  let newStr = (color.toLowerCase()).replace(/\#/g, '');
  let len = newStr.length;
  if (len === 3) {
    let t = '';
    for (let i = 0; i < len; i++) {
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
    }
    newStr = t;
  }
  let arr = [];
  for (let i = 0; i < 6; i = i + 2) {
    let s = newStr.slice(i, i + 2);
    arr.push(parseInt("0x" + s));
  }
  return `rgba(${arr.join(",")}, ${opacity})`;
}
/**
* @overview rgb转16进制颜色
* @author gf
* @param { color }
* @return { string }
* @example rgbToColor16("rgb(81, 81, 162)")
*/
function rgbToColor16(rgbStr) {
  const reg = DATA_REGEX_PATTERN.colorRgb;
  if (!reg.test(rgbStr)) {
    return;
  }
  ;
  const arr = rgbStr.slice(4, rgbStr.length - 1).split(",");
  let color = '#';
  for (let i = 0; i < arr.length; i++) {
    let t = Number(arr[i]).toString(16);
    if (t === "0") {
      t = t + "0";
    }
    color += t;
  }
  return color;
}

/**
* @overview 设置样式表
* @author gf
* @param { v }  类名和样式
*/
function setStyleSheet(v) {
  let styleSheet = document.styleSheets[0];
  styleSheet.insertRule(v);
}
/* 绑定事件 */
const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
/* 解除事件 */
const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

function isDef(val) {
  return val !== undefined && val !== null;
}
function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
function injectComponents(componentsList) {
  for (const cName in componentsList) {
    const elements = componentsList[cName];
    const elementsName = cName
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .substring(1);
    console.log(elementsName);
    customElements.define(elementsName, elements);
  }
}

export { color16ToRgb as c, injectComponents as i, setStyleSheet as s };
