import { Component, Host, h, Prop } from '@stencil/core';
import { ButtonColor } from "../../../types/gf-button";
@Component({
    tag: 'gf-button',
    styleUrl: 'gf-button.less',
    shadow: true,
})


export class GfButton {
    @Prop() color: ButtonColor = "primary"
    render() {
        return (
            <Host>
                <button class="box">
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
