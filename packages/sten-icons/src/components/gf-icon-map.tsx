
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { map as svgData } from "../icons";
@Component({
    tag: 'gf-icon-map',
    shadow: false
})  
export class GfIconmap {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
