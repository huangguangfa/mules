import { Component, Host, h } from '@stencil/core';
import { Icons } from "../../icon-base/index"
@Component({
    tag: 'sten-icons',
    shadow: true,
})
export class StenIcons {
    render() {
        return (
            <Host>
                <h1>展示icon</h1>
                <Icons></Icons>
            </Host>
        );
    }
}
