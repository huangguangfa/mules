import { Component, Host, h, Prop, Watch, Method, Event, EventEmitter } from '@stencil/core';
import { ButtonColor } from "../../../types/gf-button";

@Component({
    tag: 'gf-button',
    shadow: false
})


export class GfButton {
    @Prop() color: ButtonColor = "default";
    @Prop() disabled: boolean = false;

    componentWillLoad() {
        console.log('button组件初始化')
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
                    class={`gf-button gf-button--${this.color} ${this.disabled ? 'is-disabled' : ''}`}>
                    <span>
                        <slot></slot>
                    </span>
                </button>
            </Host>
        );
    }
}
