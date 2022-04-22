import { Component, Host, h, Prop } from '@stencil/core';
import { ButtonColor } from "../../../types/gf-button";

@Component({
    tag: 'gf-button',
    shadow: false,
})

export class GfButton {
    @Prop() color: ButtonColor = "default"
    render() {
        return (
            <Host>
                <button class={`gf-button gf-button-${this.color}`}>
                    <span>
                        <slot></slot>
                    </span>
                </button>
            </Host>
        );
    }
}
