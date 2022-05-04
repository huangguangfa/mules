
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { rightarrow as svgData } from "../icons";
@Component({
    tag: 'gf-icon-rightarrow',
    shadow: false
})  
export class GfIconrightarrow {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
