
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { addSelect as svgData } from "../icons";
@Component({
    tag: 'gf-icon-add-select',
    shadow: false
})  
export class GfIconaddSelect {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
