import { Component, Host, h, Prop } from '@stencil/core';
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

    render() {
        return (
            <Host>
                <button class={`gf-button gf-button--${this.color} ${this.disabled ? 'is-disabled' : ''}`}>
                    <span>
                        <slot></slot>
                    </span>
                </button>
            </Host>
        );
    }
}
