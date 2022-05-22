import { Component, Host, h, Prop, State, Event, Watch, EventEmitter } from '@stencil/core';
import { calcTextareaHeight } from "./utils.js"
import { injectComponents } from "../../utils"
import { GfIconclear } from "../../../../sten-icons/src/components/gf-icon-clear"
import { GfIconinfo } from "../../../../sten-icons/src/components/gf-icon-info"
import { GfIconsuccessFill } from "../../../../sten-icons/src/components/gf-icon-successFill"

injectComponents({
  GfIconclear, GfIconinfo, GfIconsuccessFill
});
import type { status } from "../../types/var"
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
}

@Component({
  tag: 'gf-input'
})
export class GfInput {
  @Prop() disabled: boolean = false;  //禁用
  @Prop() clearable: boolean = false;  //清除
  @Prop() value: string = '';
  @Prop() type: string = 'text'; // 原生类型
  @Prop() maxlength?: number; // 输入长度限制
  @Prop() status: status = ''; // 输入框状态
  @Prop() iconFontSize: number = 20;
  @Prop() iconColor: string = '#ccc';
  @Prop() placeholder: string;
  @Prop() autofocus: boolean = false; // 自动获取焦点
  @Prop() resize: string = 'vertical'; // 是否缩放 none|both|horizontal|vertical;
  @Prop() minRows: number | string;
  @Prop() maxRows: number | string;
  @Prop() rows: number | string = 2;
  @Prop() autosize: boolean = false;

  @State() curentValue: string = '';
  @State() calculateStyle = {
    resize: this.resize
  };

  private isComposing: boolean = false;
  private nativeInput?: HTMLInputElement | HTMLTextAreaElement;

  @Watch('value')
  watchPropHandler(newValue: string) {
    if (newValue !== this.curentValue) {
      this.setCurrentValue(newValue)
    }
  }
  // 数据初始化
  componentWillLoad() {
    this.setCurrentValue(this.value)
    Promise.resolve().then(() => { this.resizeTextarea() })
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

  @Event() eventFocus: EventEmitter<FocusEvent>
  private handleFocus = (e) => {
    this.eventFocus.emit(e)
  }

  @Event() eventBlur: EventEmitter<HTMLAreaElement>
  private handleBlur = (e) => {
    this.eventBlur.emit(e)
  }

  @Event() eventInput: EventEmitter<string>
  private handleInput = (e) => {
    if (this.isComposing) return;
    const value = e.target.value;
    this.eventInput.emit(value)
    this.setCurrentValue(value)
    this.resizeTextarea()
  }
  @Event() eventChange!: EventEmitter<string>;
  private handleChange = (e) => {
    this.eventChange.emit(e.target.value)
  }
  @Event() private eventClear: EventEmitter<string>

  private handClearClick = () => {
    this.setCurrentValue('')
    this.eventClear.emit('')
    this.eventInput.emit('')
    this.eventChange.emit('')
  }

  private setCurrentValue = (value: string) => {
    this.curentValue = value;
  }

  private handleCompositionStart = () => {
    this.isComposing = true;
  }
  private handleCompositionEnd = (e) => {
    if (this.isComposing) {
      this.isComposing = false;
      this.handleInput(e);
    }
  }
  private onKeydown = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      console.log('enter')
    }
  }
  private resizeTextarea() {
    if (!this.autosize && !this.minRows && !this.maxRows) return
    this.calculateStyle = {
      ...calcTextareaHeight(this.nativeInput, this.minRows, this.maxRows),
      resize: this.resize
    }
  }
  // 获取个个元素节点
  private getClearInstance = () => {
    return <div class="gf-input__clear">
      <gf-icon-clear size={this.iconFontSize} color={this.iconColor} onClick={this.handClearClick.bind(this)}></gf-icon-clear>
    </div>
  }
  private getStatusInstance = () => {
    return <div class="gf-input__status_icon">
      {
        this.status === 'success' && <gf-icon-success-fill size={this.iconFontSize} color={STATUS[this.status].color}></gf-icon-success-fill>
      }
      {
        ['info', 'warning'].includes(this.status) && <gf-icon-info size={this.iconFontSize} color={STATUS[this.status].color}></gf-icon-info>
      }
      {
        this.status === 'error' && <gf-icon-clear size={this.iconFontSize} color={STATUS[this.status].color}></gf-icon-clear>
      }
    </div>
  }
  private getMaxLengthInstance = () => {
    return <div class="gf-input__maxlength">
      <span>{this.curentValue.length}</span>/{this.maxlength}
    </div>
  }
  private getInputInstance = () => {
    return this.type !== 'textarea' ?
      <input
        type={this.type}
        disabled={this.disabled}
        class="gf-input__inner"
        value={this.curentValue}
        minLength={this.maxlength}
        maxLength={this.maxlength}
        placeholder={this.placeholder}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onInput={this.handleInput}
        onChange={this.handleChange}
        ref={input => this.nativeInput = input}
        onKeyDown={this.onKeydown}
      />
      : <textarea
        class="gf-textarea__inner"
        style={this.calculateStyle}
        disabled={this.disabled}
        value={this.curentValue}
        autofocus={this.autofocus}
        minLength={this.maxlength}
        maxLength={this.maxlength}
        placeholder={this.placeholder}
        rows={+this.rows}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onInput={this.handleInput}
        onChange={this.handleChange}
        ref={input => this.nativeInput = input}
      ></textarea>
  }

  render() {
    return (
      <Host>
        <div class={`
          ${this.type !== 'textarea' ? 'gf-input' : 'gf-textarea'}
          ${this.disabled ? 'is-disabled' : ''}
          ${this.status ? 'is-input-' + this.status : ''}`}>
          <slot name='before'></slot>
          {this.getInputInstance()}
          {this.clearable && this.curentValue ? this.getClearInstance() : ''}
          {Number(this.maxlength) > 0 ? this.getMaxLengthInstance() : ''}
          {this.status ? this.getStatusInstance() : ''}
          <slot name='after'></slot>
        </div>
      </Host>
    );
  }
}
