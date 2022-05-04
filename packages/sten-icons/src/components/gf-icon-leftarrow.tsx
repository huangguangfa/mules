
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { leftarrow as svgData } from "../icons";
@Component({
    tag: 'gf-icon-leftarrow',
    shadow: false
})  
export class GfIconleftarrow {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
