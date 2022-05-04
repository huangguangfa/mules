
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { set as svgData } from "../icons";
@Component({
    tag: 'gf-icon-set',
    shadow: false
})  
export class GfIconset {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
