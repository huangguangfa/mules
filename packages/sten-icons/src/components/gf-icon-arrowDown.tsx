
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { arrowDown as svgData } from "../icons";
@Component({
    tag: 'gf-icon-arrow-down',
    shadow: false
})  
export class GfIconarrowDown {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
