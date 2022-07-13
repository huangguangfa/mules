import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { ButtonColor, ButtonSize } from "../../types/gf-button";
import { getButtonColor, getButtonStyle } from "./_button";
import { setEventName } from '../.internal/config'
@Component({
    tag: 'gf-button'
})

export class GfButton {
    @Prop() color: ButtonColor = "default";     // 按钮颜色
    @Prop() disabled: boolean = false;          // 禁用
    @Prop() textColor: string = "#FFFFFF";      // 文字颜色
    @Prop() classNames: string = "";            // 自定义类名
    @Prop() plain: boolean = false;             // 朴素按钮
    @Prop() size: ButtonSize = "";              // 大 中 小
    @Prop() circle: boolean = false;            // 圆形
    @Prop() nativeType: string = 'button';      // 原生类型
    @Element() host: HTMLElement;

    @Event({
        eventName: setEventName('click'),
        composed: true,
        cancelable: true,
        bubbles: true
    })
    displayOnClick: EventEmitter
    handClick(e:Event): void {
        if (this.disabled) return;
        this.displayOnClick.emit(e)
    }

    render() {
        return (
            <Host>
                <button
                    onClick={this.handClick.bind(this)}
                    type={this.nativeType}
                    class={`gf-button 
                        ${this.classNames} 
                        ${getButtonColor(this.color)} 
                        ${this.disabled ? 'is-disabled' : ''}
                        ${this.plain && "is-plain" || ''}
                        ${this.circle && "is-circle" || ''}
                        ${this.size && 'gf-button--' + this.size || ''}
                    `}
                    style={getButtonStyle(this.color, this.textColor)}>
                    <slot name='icon-left'></slot>
                    <slot></slot>
                    <slot name='icon-right'></slot>
                </button>
            </Host>
        );
    }
}

