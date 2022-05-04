
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { addFill as svgData } from "../icons";
@Component({
    tag: 'gf-icon-add-fill',
    shadow: false
})  
export class GfIconaddFill {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
