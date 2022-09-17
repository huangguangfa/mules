import { Component, Host, h, Prop, State, Event, Watch, EventEmitter } from '@stencil/core'
import { useNamespace } from '../../utils'

import { calcTextareaHeight } from './utils'
import { injectComponents } from '../../utils'
import { GfIconclear } from '../gf-icon/gf-icon-clear'
import { GfIconinfo } from '../gf-icon/gf-icon-info'
import { GfIconsuccessFill } from '../gf-icon/gf-icon-successFill'
import type { status } from '../../types/var'
import { STATUS, disabledIconColor } from './config'

const ns = useNamespace('input')
const nsTextarea = useNamespace('textarea')

injectComponents({
  GfIconclear,
  GfIconinfo,
  GfIconsuccessFill,
})

@Component({
  tag: 'gf-input',
})
export class GfInput {
  @Prop() disabled: boolean = false //禁用
  @Prop() clearable: boolean = false //清除
  @Prop() value: string = ''
  @Prop() type: string = 'text' // 原生类型
  @Prop() maxlength: number // 输入长度限制
  @Prop() status: status = '' // 输入框状态
  @Prop() iconFontSize: number = 20
  @Prop() iconColor: string = '#ccc'
  @Prop() placeholder: string
  @Prop() autofocus: boolean = false // 自动获取焦点
  @Prop() resize: string = 'vertical' // 是否缩放 none|both|horizontal|vertical;
  @Prop() minRows: number | string
  @Prop() maxRows: number | string
  @Prop() rows: number | string = 2
  @Prop() autosize: boolean = false
  @Prop() arrays: Array<Record<string, any>> = []

  @State() curentValue: string = ''
  @State() autocompleteState: Boolean = true
  @State() calculateStyle = {
    resize: this.resize,
  }

  isComposing = false
  nativeInput: HTMLInputElement | HTMLTextAreaElement

  @Watch('value')
  watchPropHandler(newValue: string) {
    if (newValue !== this.curentValue) {
      this.setCurrentValue(newValue)
    }
  }
  // 数据初始化
  componentWillLoad() {
    this.setCurrentValue(this.value)
    Promise.resolve().then(() => {
      this.resizeTextarea()
    })
  }

  // dom渲染完成
  componentDidLoad() {
    const nativeInput = this.nativeInput
    if (nativeInput) {
      nativeInput.addEventListener('compositionstart', this.handleCompositionStart)
      nativeInput.addEventListener('compositionend', this.handleCompositionEnd)
    }
  }
  // 销毁
  disconnectedCallback() {
    const nativeInput = this.nativeInput
    if (nativeInput) {
      nativeInput.removeEventListener('compositionstart', this.handleCompositionStart)
      nativeInput.removeEventListener('compositionEnd', this.handleCompositionEnd)
    }
  }

  @Event() eventFocus: EventEmitter<FocusEvent>
  handleFocus = e => {
    this.eventFocus.emit(e)
    this.autocompleteState = true
  }

  @Event() eventBlur: EventEmitter<HTMLAreaElement>
  handleBlur = e => {
    this.eventBlur.emit(e)
    this.autocompleteState = false
  }

  @Event() eventInput: EventEmitter<string>
  handleInput = e => {
    if (this.isComposing) return
    const value = e.target.value
    this.eventInput.emit(value)
    this.setCurrentValue(value)
    this.resizeTextarea()
  }
  @Event() eventChange: EventEmitter<string>
  handleChange = e => {
    this.eventChange.emit(e.target.value)
  }
  @Event() eventClear: EventEmitter<string>
  @Event() eventEnter: EventEmitter<string>

  handClearClick = () => {
    this.setCurrentValue('')
    this.eventClear.emit('')
    this.eventInput.emit('')
    this.eventChange.emit('')
  }
  setCurrentValue = (value: string) => {
    this.curentValue = value
  }
  handleCompositionStart = () => {
    this.isComposing = true
  }
  handleCompositionEnd = (e: Event) => {
    if (this.isComposing) {
      this.isComposing = false
      this.handleInput(e)
    }
  }
  onKeydown = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.eventEnter.emit(this.curentValue)
    }
  }
  resizeTextarea() {
    if (!this.autosize && !this.minRows && !this.maxRows) return
    this.calculateStyle = {
      ...calcTextareaHeight(this.nativeInput, Number(this.minRows), this.maxRows),
      resize: this.resize,
    }
  }
  // 获取个个元素节点
  getClearInstance = () => {
    return (
      <div class={ns.e('clear')}>
        <gf-icon-clear size={this.iconFontSize} color={this.iconColor} onClick={this.handClearClick.bind(this)}></gf-icon-clear>
      </div>
    )
  }
  getStatusInstance = () => {
    return (
      <div class={ns.e('status') + '_icon'}>
        {this.status === 'success' && <gf-icon-success-fill size={this.iconFontSize} color={this.disabled ? disabledIconColor : STATUS[this.status].color}></gf-icon-success-fill>}
        {['info', 'warning'].includes(this.status) && <gf-icon-info size={this.iconFontSize} color={this.disabled ? disabledIconColor : STATUS[this.status].color}></gf-icon-info>}
        {this.status === 'error' && <gf-icon-clear size={this.iconFontSize} color={this.disabled ? disabledIconColor : STATUS[this.status].color}></gf-icon-clear>}
      </div>
    )
  }
  getMaxLengthInstance = () => {
    return (
      <div class={ns.e('maxlength')}>
        <span>{this.curentValue.length}</span>/{this.maxlength}
      </div>
    )
  }

  getInputInstance = () => {
    return this.type !== 'textarea' ? (
      <input
        type={this.type}
        disabled={this.disabled}
        class={ns.e('inner')}
        value={this.curentValue}
        minLength={this.maxlength}
        maxLength={this.maxlength}
        placeholder={this.placeholder}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onInput={this.handleInput}
        onChange={this.handleChange}
        ref={input => (this.nativeInput = input)}
        onKeyDown={this.onKeydown}
      />
    ) : (
      <textarea
        class={nsTextarea.e('inner')}
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
        onKeyDown={this.onKeydown}
        ref={input => (this.nativeInput = input)}
      ></textarea>
    )
  }

  render() {
    return (
      <Host>
        <div class={[this.type !== 'textarea' ? ns.b() : nsTextarea.b(), ns.is('disabled', this.disabled), ns.is(`input-${this.status}`, !!this.status)].join(' ')}>
          <slot name="before"></slot>
          {this.getInputInstance()}
          {this.type !== 'textarea' && this.clearable && this.curentValue ? this.getClearInstance() : ''}
          {Number(this.maxlength) > 0 ? this.getMaxLengthInstance() : ''}
          {this.status ? this.getStatusInstance() : ''}
          <slot name="after"></slot>
        </div>
      </Host>
    )
  }
}
