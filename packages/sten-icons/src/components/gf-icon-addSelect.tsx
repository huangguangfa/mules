
import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { addSelect as svgData } from "../icons";
@Component({
    tag: 'gf-icon-add-select',
    shadow: false
})  
export class GfIconaddSelect {
    @Prop() size: number | string = 25;
    @Prop() styles?: object = {};
    @Prop() color?: string = "#000000";
    @Prop() rotate?: number = 0;
    @Prop() spin?: boolean = false;
    @Prop() opacity?: number | string = 1;
    render() {
        const { size, styles, color, rotate, spin, opacity } = this;
        return (
            <Host class="reset">
                <Icons {...{ svgData, size, styles, color, rotate, spin, opacity }}></Icons>
            </Host>
        );
    }
}
