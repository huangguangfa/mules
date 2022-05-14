import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { GfIconclear } from "../../../../sten-icons/src/components/gf-icon-clear";

@Component({
  tag: 'gf-input'
})
export class GfInput {
  @Prop() disabled: boolean = false;  //禁用
  @Prop() clear: boolean = false;  //清除

  @Event({
    eventName: "focus",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  displayFocus: EventEmitter<HTMLAreaElement>
  handleFocus(e) {
    this.displayFocus.emit(e)
    console.log('handleFocus', e)
  }

  @Event({
    eventName: "blur",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  displayBlur: EventEmitter<HTMLAreaElement>
  handleBlur(e) {
    this.displayBlur.emit(e)
    console.log('handleBlur', e)
  }

  @Event({
    eventName: "input",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  displayInput: EventEmitter<HTMLAreaElement>
  handleInput(e) {
    this.displayInput.emit(e)
    console.log('handleInput', e)
  }
  render() {
    return (
      <Host>
        <div class={`gf-input 
          ${this.disabled ? 'is-disabled' : ''}
        `}>
          <input
            type="text"
            disabled={this.disabled}
            class="gf-input__inner"
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onInput={this.handleInput.bind(this)}
          />
          <div class="gf-input__clear">
            <gf-icon-clear size="20" color="#ccc"></gf-icon-clear>
          </div>
        </div>
      </Host>
    );
  }

}
