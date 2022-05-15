import { Component, Host, h, Prop, State, Event, Watch, EventEmitter, Element } from '@stencil/core';
import { GfIconclear } from "../../../../sten-icons/src/components/gf-icon-clear";
import { isKorean } from "../../utils/index"
@Component({
  tag: 'gf-input'
})
export class GfInput {
  @Prop() disabled: boolean = false;  //禁用
  @Prop() clearable: boolean = false;  //清除
  @Prop() value: string = '';
  @Prop() type: string = 'text'; // 原生类型
  @Prop() maxlength?: number; // 输入长度限制
  @State() curentValue: string = '';
  @State() isComposing: boolean = false;

  @Watch('value')
  watchPropHandler(newValue: string) {
    if (newValue !== this.curentValue) {
      this.setCurrentValue(newValue)
    }
  }

  componentWillLoad() {
    this.setCurrentValue(this.value)

    setTimeout(() => {
      const el = document.getElementsByClassName("gf-input__inner")[3]
      console.log(el)
      el.addEventListener('compositionstart', () => {
        console.log(1111)
      })
    }, 3000)
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
    // if (this.maxLength && Number(this.maxLength) === this.curentValue.length) {
    //   this.setCurrentValue(this.curentValue)
    //   return;
    // }
    const value = e.target.value;
    this.onInput.emit(value)
    this.setCurrentValue(value)
  }
  @Event({
    eventName: "clear",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  private displayClear: EventEmitter<string>

  private handClearClick = () => {
    this.setCurrentValue('')
    this.displayClear.emit('')
    this.onInput.emit('')
  }

  private setCurrentValue = (value: string) => {
    this.curentValue = value;
  }

  private handleCompositionStart = () => {
    console.log('handleCompositionStart')
    this.isComposing = true;
  }
  private handleCompositionUpdate = (e) => {
    const text = e.target.value;
    const lastCharacter = text[text.length - 1] || '';
    console.log('handleCompositionUpdate', lastCharacter)
    this.isComposing = !isKorean(lastCharacter);
  }
  private handleCompositionEnd = (e) => {
    console.log('handleCompositionEnd')
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
      <gf-icon-clear size="14" color="#ccc" onClick={this.handClearClick.bind(this)}></gf-icon-clear>
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
        <div class={{
          'gf-input': true,
          'is-disabled': this.disabled,
        }}>
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
            onCompositionStart={this.handleCompositionStart}
            onCompositionUpdate={this.handleCompositionUpdate}
            onCompositionEnd={this.handleCompositionEnd.bind}
            onKeyDown={this.onKeydown}
          />
          {this.clearable && this.curentValue ? this.getClearInstance() : ''}
          {Number(this.maxlength) > 0 ? this.getMaxLengthInstance() : ''}
          <slot name='after'></slot>
        </div>
      </Host>
    );
  }
}
