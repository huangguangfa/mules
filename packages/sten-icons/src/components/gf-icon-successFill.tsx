
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { successFill as svgData } from "../icons";
@Component({
    tag: 'gf-icon-success-fill',
    shadow: false
})  
export class GfIconsuccessFill {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
