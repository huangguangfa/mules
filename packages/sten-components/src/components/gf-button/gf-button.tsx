import { Component, Host, h, Prop, Watch, Method, Event, EventEmitter } from '@stencil/core';
import { ButtonColor, ButtonSize } from "../../types/gf-button";
import { getButtonColor, getButtonStyle } from "./_button";
@Component({
    tag: 'gf-button',
    shadow: false
})

export class GfButton {
    @Prop() color: ButtonColor = "default"; // 按钮颜色
    @Prop() disabled: boolean = false; // 禁用
    @Prop() textColor: string = "#FFFFFF"; // 文字颜色
    @Prop() classNames: string = "";  // 自定义类名
    @Prop() plain: boolean = false;  // 朴素按钮
    @Prop() size: ButtonSize = ""; // 大 中 小
    @Prop() circle: boolean = false; // 圆形
    @Prop() nativeType: string = 'button'; // 原生类型

    componentWillLoad() {
        console.log('lifecycle load')
    }

    @Watch("disabled")
    changeDisabled(newValue: boolean, oldValue: boolean) {
        console.log('[watch]--改变disabled状态', newValue, oldValue)
    }

    @Method()
    async _internal() {
        console.log('外部调用内部方法');
    }

    @Event({
        eventName: "on-click",
        composed: true,
        cancelable: true,
        bubbles: true
    })
    displayOnClick: EventEmitter<{ data: Object }>
    handClick(): void {
        if (this.disabled) return;
        this.displayOnClick.emit({
            data: {
                eventName: 'on-click',
                componentsName: "gf-button"
            }
        })
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

