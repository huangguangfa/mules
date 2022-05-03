
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { loading as svgData } from "../icons";
@Component({
    tag: 'gf-icon-loading',
    shadow: true,
})
export class GfIconloading {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
