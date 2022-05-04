
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { qRcode as svgData } from "../icons";
@Component({
    tag: 'gf-icon-q-rcode',
    shadow: false
})  
export class GfIconqRcode {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
