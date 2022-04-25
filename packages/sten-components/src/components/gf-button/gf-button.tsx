import { Component, Host, h, Prop, Watch, Method, Event, EventEmitter } from '@stencil/core';
import { ButtonColor } from "../../types/gf-button";
import { getButtonColor, getButtonStyle } from "./_button"

@Component({
    tag: 'gf-button',
    shadow: false
})

export class GfButton {
    @Prop() color: ButtonColor = "default";
    @Prop() disabled: boolean = false;
    @Prop() textColor: string = "#FFFFFF";
    @Prop() classNames: string = "";

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
                    class={`gf-button ${this.classNames} ${getButtonColor(this.color)} ${this.disabled ? 'is-disabled' : ''}`}
                    style={getButtonStyle(this.color, this.textColor)}>
                    <span>
                        <slot></slot>
                    </span>
                </button>
            </Host>
        );
    }
}
