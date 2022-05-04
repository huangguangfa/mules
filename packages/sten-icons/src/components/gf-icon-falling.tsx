
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { falling as svgData } from "../icons";
@Component({
    tag: 'gf-icon-falling',
    shadow: false
})  
export class GfIconfalling {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
