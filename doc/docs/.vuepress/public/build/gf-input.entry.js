import { r as registerInstance, f as createEvent, h, e as Host } from './index-5fa84477.js';
import { i as injectComponents } from './index-b85f3b86.js';
import { G as GfIconclear } from './gf-icon-clear-65609560.js';
import { G as GfIconinfo } from './gf-icon-info-e80c8687.js';
import { G as GfIconsuccessFill } from './gf-icon-successFill-b4fd079a.js';
import './index-07b69c32.js';

/**
 * https://github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
 */
let hiddenTextarea;

const HIDDEN_STYLE = [
    'position: absolute !important;',
    'top: 0 !important;',
    'right: 0 !important;',
    'height: 0 !important;',
    'visibility: hidden !important;',
    'overflow: hidden !important;',
    'z-index: -1000 !important;'
];

const CONTEXT_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
];

function calculateNodeStyling(node) {
    const style = window.getComputedStyle(node);
    const boxSizing = style.getPropertyValue('box-sizing');
    const paddingSize = (
        parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top'))
    );
    const borderSize = (
        parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width'))
    );
    const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';');

    return { boxSizing, paddingSize, borderSize, contextStyle }
}

function calcTextareaHeight(targetNode, minRows = 1, maxRows = null) {
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }

    const { boxSizing, paddingSize, borderSize, contextStyle } = calculateNodeStyling(targetNode);

    hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE.join('')}`);
    hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';

    const result = {};
    let height = hiddenTextarea.scrollHeight;

    if (boxSizing === 'border-box') {
        height += borderSize;
    } else if (boxSizing === 'content-box') {
        height -= paddingSize;
    }

    hiddenTextarea.value = '';

    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
        let minHeight = singleRowHeight * minRows;
        if (boxSizing === 'border-box') {
            minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
        result.minHeight = `${minHeight}px`;
    }

    if (maxRows !== null) {
        let maxHeight = singleRowHeight * maxRows;
        if (boxSizing === 'border-box') {
            maxHeight = maxHeight + paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
    }

    result.height = `${height}px`;
    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
    hiddenTextarea = null;

    return result
}

// import { GfAutocomplete } from "./autocomplete"
injectComponents({
  GfIconclear, GfIconinfo, GfIconsuccessFill
});
const STATUS = {
  "success": {
    color: "#67C23A"
  },
  "info": {
    color: "#346FC2"
  },
  "warning": {
    color: "#ffc82c"
  },
  "error": {
    color: "#ff4949"
  }
};
const GfInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventFocus = createEvent(this, "eventFocus", 7);
    this.eventBlur = createEvent(this, "eventBlur", 7);
    this.eventInput = createEvent(this, "eventInput", 7);
    this.eventChange = createEvent(this, "eventChange", 7);
    this.eventClear = createEvent(this, "eventClear", 7);
    this.eventEnter = createEvent(this, "eventEnter", 7);
    this.disabled = false; //禁用
    this.clearable = false; //清除
    this.value = '';
    this.type = 'text'; // 原生类型
    this.status = ''; // 输入框状态
    this.iconFontSize = 20;
    this.iconColor = '#ccc';
    this.autofocus = false; // 自动获取焦点
    this.resize = 'vertical'; // 是否缩放 none|both|horizontal|vertical;
    this.rows = 2;
    this.autosize = false;
    this.arrays = [];
    this.curentValue = '';
    this.autocompleteState = true;
    this.calculateStyle = {
      resize: this.resize
    };
    this.isComposing = false;
    this.handleFocus = (e) => {
      this.eventFocus.emit(e);
      this.autocompleteState = true;
    };
    this.handleBlur = (e) => {
      this.eventBlur.emit(e);
      this.autocompleteState = false;
    };
    this.handleInput = (e) => {
      if (this.isComposing)
        return;
      const value = e.target.value;
      this.eventInput.emit(value);
      this.setCurrentValue(value);
      this.resizeTextarea();
    };
    this.handleChange = (e) => {
      this.eventChange.emit(e.target.value);
    };
    this.handClearClick = () => {
      this.setCurrentValue('');
      this.eventClear.emit('');
      this.eventInput.emit('');
      this.eventChange.emit('');
    };
    this.setCurrentValue = (value) => {
      this.curentValue = value;
    };
    this.handleCompositionStart = () => {
      this.isComposing = true;
    };
    this.handleCompositionEnd = (e) => {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(e);
      }
    };
    this.onKeydown = (ev) => {
      if (ev.key === 'Enter') {
        this.eventEnter.emit(this.curentValue);
      }
    };
    // 获取个个元素节点
    this.getClearInstance = () => {
      return h("div", { class: "gf-input__clear" }, h("gf-icon-clear", { size: this.iconFontSize, color: this.iconColor, onClick: this.handClearClick.bind(this) }));
    };
    this.getStatusInstance = () => {
      return h("div", { class: "gf-input__status_icon" }, this.status === 'success' && h("gf-icon-success-fill", { size: this.iconFontSize, color: STATUS[this.status].color }), ['info', 'warning'].includes(this.status) && h("gf-icon-info", { size: this.iconFontSize, color: STATUS[this.status].color }), this.status === 'error' && h("gf-icon-clear", { size: this.iconFontSize, color: STATUS[this.status].color }));
    };
    this.getMaxLengthInstance = () => {
      return h("div", { class: "gf-input__maxlength" }, h("span", null, this.curentValue.length), "/", this.maxlength);
    };
    this.getInputInstance = () => {
      return this.type !== 'textarea' ?
        h("input", { type: this.type, disabled: this.disabled, class: "gf-input__inner", value: this.curentValue, minLength: this.maxlength, maxLength: this.maxlength, placeholder: this.placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput, onChange: this.handleChange, ref: input => this.nativeInput = input, onKeyDown: this.onKeydown })
        : h("textarea", { class: "gf-textarea__inner", style: this.calculateStyle, disabled: this.disabled, value: this.curentValue, autofocus: this.autofocus, minLength: this.maxlength, maxLength: this.maxlength, placeholder: this.placeholder, rows: +this.rows, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput, onChange: this.handleChange, onKeyDown: this.onKeydown, ref: input => this.nativeInput = input });
    };
  }
  watchPropHandler(newValue) {
    if (newValue !== this.curentValue) {
      this.setCurrentValue(newValue);
    }
  }
  // 数据初始化
  componentWillLoad() {
    this.setCurrentValue(this.value);
    Promise.resolve().then(() => { this.resizeTextarea(); });
  }
  // dom渲染完成
  componentDidLoad() {
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      nativeInput.addEventListener('compositionstart', this.handleCompositionStart);
      nativeInput.addEventListener('compositionend', this.handleCompositionEnd);
    }
  }
  // 销毁
  disconnectedCallback() {
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      nativeInput.removeEventListener('compositionstart', this.handleCompositionStart);
      nativeInput.removeEventListener('compositionEnd', this.handleCompositionEnd);
    }
  }
  resizeTextarea() {
    if (!this.autosize && !this.minRows && !this.maxRows)
      return;
    this.calculateStyle = Object.assign(Object.assign({}, calcTextareaHeight(this.nativeInput, this.minRows, this.maxRows)), { resize: this.resize });
  }
  render() {
    return (h(Host, null, h("div", { class: `
          ${this.type !== 'textarea' ? 'gf-input' : 'gf-textarea'}
          ${this.disabled ? 'is-disabled' : ''}
          ${this.status ? 'is-input-' + this.status : ''}` }, h("slot", { name: 'before' }), this.getInputInstance(), this.type !== 'textarea' && this.clearable && this.curentValue ? this.getClearInstance() : '', Number(this.maxlength) > 0 ? this.getMaxLengthInstance() : '', this.status ? this.getStatusInstance() : '', h("slot", { name: 'after' }))));
  }
  static get watchers() { return {
    "value": ["watchPropHandler"]
  }; }
};

export { GfInput as gf_input };
