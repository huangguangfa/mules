import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-5fa84477.js';
import { c as color16ToRgb, s as setStyleSheet } from './index-b85f3b86.js';

let tepId = 0;
function checkInternalColor(color) {
  const defaultColor = ["default", "primary", "success", "info", "warning", "danger"];
  return defaultColor.includes(color);
}
function getButtonColor(color) {
  if (checkInternalColor(color)) {
    return `gf-button--${color}`;
  }
  return `gf-button-${++tepId}`;
}
function getButtonStyle(color, textColor) {
  if (checkInternalColor(color))
    return {};
  let rgb = color16ToRgb(color, 0.8);
  const tempClass = `gf-button-${tepId}`;
  const colorTemplate = (colors) => ` border-color:${colors} !important; background-color:${colors} !important;`;
  const classHover = `.${tempClass}:hover{ ${colorTemplate(rgb)}  }`;
  const classActive = `.${tempClass}:active{ ${colorTemplate(color)} }`;
  [classActive, classHover].forEach(css => setStyleSheet(css));
  return {
    background: color,
    color: textColor
  };
}

const GfButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.displayOnClick = createEvent(this, "displayOnClick", 7);
    this.color = "default"; // 按钮颜色
    this.disabled = false; // 禁用
    this.textColor = "#FFFFFF"; // 文字颜色
    this.classNames = ""; // 自定义类名
    this.plain = false; // 朴素按钮
    this.size = ""; // 大 中 小
    this.circle = false; // 圆形
    this.nativeType = 'button'; // 原生类型
  }
  handClick(e) {
    if (this.disabled)
      return;
    this.displayOnClick.emit(e);
  }
  render() {
    return (h(Host, null, h("button", { onClick: this.handClick.bind(this), type: this.nativeType, class: `gf-button 
                        ${this.classNames} 
                        ${getButtonColor(this.color)} 
                        ${this.disabled ? 'is-disabled' : ''}
                        ${this.plain && "is-plain" || ''}
                        ${this.circle && "is-circle" || ''}
                        ${this.size && 'gf-button--' + this.size || ''}
                    `, style: getButtonStyle(this.color, this.textColor) }, h("slot", { name: 'icon-left' }), h("slot", null), h("slot", { name: 'icon-right' }))));
  }
  get host() { return getElement(this); }
};

export { GfButton as gf_button };
