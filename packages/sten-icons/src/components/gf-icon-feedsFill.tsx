
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { feedsFill as svgData } from "../icons";
@Component({
    tag: 'gf-icon-feeds-fill',
    shadow: false
})  
export class GfIconfeedsFill {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
