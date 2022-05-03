
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { arrowRight as svgData } from "../icons";
@Component({
    tag: 'gf-icon-arrow-right',
    shadow: false,
})
export class GfIconarrowRight {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
