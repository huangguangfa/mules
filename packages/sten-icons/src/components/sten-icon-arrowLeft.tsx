
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { arrowLeft as svgData } from "../icons";
@Component({
    tag: 'gf-icon-arrow-left',
    shadow: false,
})
export class GfIconarrowLeft {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
