import { Component, Host, h } from '@stencil/core';
@Component({
    tag: 'gf-button-group',
    shadow: false
})

export class GfButtonGroup {
    render() {
        return (
            <Host class="gf-button-group">
                <slot></slot>
            </Host>
        );
    }
}

