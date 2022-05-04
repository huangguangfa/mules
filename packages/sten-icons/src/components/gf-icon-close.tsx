
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { close as svgData } from "../icons";
@Component({
    tag: 'gf-icon-close',
    shadow: false
})  
export class GfIconclose {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
