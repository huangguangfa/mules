
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { rising as svgData } from "../icons";
@Component({
    tag: 'gf-icon-rising',
    shadow: false
})  
export class GfIconrising {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
