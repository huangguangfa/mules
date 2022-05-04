
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { addCartFill as svgData } from "../icons";
@Component({
    tag: 'gf-icon-add-cart-fill',
    shadow: false
})  
export class GfIconaddCartFill {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
