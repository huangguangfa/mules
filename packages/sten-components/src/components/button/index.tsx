import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core'
import { ButtonColor, ButtonSize } from '../../types/gf-button'
import { getButtonColor, getButtonStyle } from './_button'
import { setEventName } from '../.internal/config'
import { useNamespace } from '../../utils'
import { useEventListener, onKeyStroke } from '../../hooks'
const ns = useNamespace('button')

@Component({
  tag: 'gf-button',
  scoped: true,
})
export class Button {
  @Prop() color: ButtonColor = 'default' // 按钮颜色
  @Prop() disabled: boolean = false // 禁用
  @Prop() textColor: string = 'white' // 文字颜色
  @Prop() classNames: string = '' // 自定义类名
  @Prop() plain: boolean = false // 朴素按钮
  @Prop() size: ButtonSize = '' // 大 中 小
  @Prop() circle: boolean = false // 圆形
  @Prop() round: boolean = false // 是否是圆角按钮
  @Prop() nativeType: string = 'button' // 原生类型

  @Event({
    eventName: setEventName('click'),
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  displayOnClick: EventEmitter
  handClick(e: Event): void {
    if (this.disabled) return
    this.displayOnClick.emit(e)
  }

  componentWillLoad() {
    onKeyStroke('Escape', e => {
      console.log(e)
    })
  }

  render() {
    return (
      <Host>
        <button
          onClick={this.handClick.bind(this)}
          type={this.nativeType}
          class={[
            this.classNames,
            getButtonColor(this.color),
            ns.b(),
            ns.m(this.size),
            ns.is('disabled', this.disabled),
            ns.is('plain', this.plain),
            ns.is('circle', this.circle),
            ns.is('round', this.round),
          ].join(' ')}
          style={getButtonStyle(this.color, this.textColor)}
        >
          <slot name='icon-left'></slot>
          <slot></slot>
          <slot name='icon-right'></slot>
        </button>
      </Host>
    )
  }
}
