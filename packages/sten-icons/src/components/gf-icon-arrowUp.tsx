
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { arrowUp as svgData } from "../icons";
@Component({
    tag: 'gf-icon-arrow-up',
    shadow: false
})  
export class GfIconarrowUp {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
