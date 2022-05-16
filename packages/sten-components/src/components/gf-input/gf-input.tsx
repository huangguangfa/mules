import { Component, Host, h, Prop, State, Event, Watch, EventEmitter } from '@stencil/core';
import { GfIconclear } from "../../../../sten-icons/src/components/gf-icon-clear";
import { GfIconsuccessFill } from "../../../../sten-icons/src/components/gf-icon-successFill";

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
  @State() curentValue: string = '';
  private isComposing: boolean = false;
  private nativeInput?: HTMLInputElement;

  @Watch('value')
  watchPropHandler(newValue: string) {
    if (newValue !== this.curentValue) {
      this.setCurrentValue(newValue)
    }
  }

  componentWillLoad() {
    this.setCurrentValue(this.value)
  }

  componentDidLoad() {
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      nativeInput.addEventListener('compositionstart', this.handleCompositionStart);
      nativeInput.addEventListener('compositionend', this.handleCompositionEnd);
    }
  }

  disconnectedCallback() {
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      nativeInput.removeEventListener('compositionstart', this.handleCompositionStart);
      nativeInput.removeEventListener('compositionEnd', this.handleCompositionEnd);
    }
  }

  @Event() onFocus: EventEmitter<FocusEvent>
  private handleFocus = (e) => {
    this.onFocus.emit(e)
  }

  @Event() onBlur: EventEmitter<HTMLAreaElement>
  private handleBlur = (e) => {
    this.onBlur.emit(e)
  }

  @Event() onInput: EventEmitter<string>
  private handleInput = (e) => {
    if (this.isComposing) return;
    const value = e.target.value;
    this.onInput.emit(value)
    this.setCurrentValue(value)
  }
  @Event() onChange!: EventEmitter<string>;
  private handleChange = (e) => {
    this.onChange.emit(e.target.value)
  }
  @Event() private onClear: EventEmitter<string>

  private handClearClick = () => {
    this.setCurrentValue('')
    this.onClear.emit('')
    this.onInput.emit('')
    this.onChange.emit('')
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
  private getClearInstance = () => {
    return <div class="gf-input__clear">
      <gf-icon-clear size={this.iconFontSize} color={this.iconColor} onClick={this.handClearClick.bind(this)}></gf-icon-clear>
    </div>
  }
  private getStatusInstance = () => {
    return <div class="gf-input__status_icon">
      <gf-icon-success-fill size={this.iconFontSize} color={STATUS[this.status as keyof typeof STATUS].color}></gf-icon-success-fill>
    </div>
  }

  private getMaxLengthInstance = () => {
    return <div class="gf-input__maxlength">
      <span>{this.curentValue.length}</span>/{this.maxlength}
    </div>
  }

  render() {
    return (
      <Host>
        <div class={`
          gf-input
          ${this.disabled ? 'is-disabled' : ''}
          ${this.status ? 'is-input-' + this.status : ''}`}>
          <slot name='before'></slot>
          <input
            type={this.type}
            disabled={this.disabled}
            class="gf-input__inner"
            value={this.curentValue}
            minLength={this.maxlength}
            maxLength={this.maxlength}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onInput={this.handleInput}
            onChange={this.handleChange}
            ref={(input) => (this.nativeInput = input)}
            onKeyDown={this.onKeydown}
          />
          {this.clearable && this.curentValue ? this.getClearInstance() : ''}
          {Number(this.maxlength) > 0 ? this.getMaxLengthInstance() : ''}
          {this.status ? this.getStatusInstance() : ''}
          <slot name='after'></slot>
        </div>
      </Host>
    );
  }
}
