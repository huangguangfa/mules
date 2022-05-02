import { Component, Host, h } from '@stencil/core';
import { Icons } from "../../icon-base/index";
import svgData from "../../icons/leftOutLined.js";
@Component({
    tag: 'sten-icons',
    shadow: true,
})
export class StenIcons {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
