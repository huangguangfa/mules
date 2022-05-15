
import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { arrowRight as svgData } from "../icons";
@Component({
    tag: 'gf-icon-arrow-right',
    shadow: false
})  
export class GfIconarrowRight {
    @Prop() size: number | string = 30;
    @Prop() styles?: object = {};
    @Prop() color?: string = "#606266";
    @Prop() rotate?: number = 0;
    @Prop() spin?: boolean = false;
    @Prop() opacity?: number | string = 1;
    render() {
        const { size, styles, color, rotate, spin, opacity } = this;
        const hostStyles: any = { width: size + 'px', height: size + 'px' }
        return (
            <Host style={hostStyles}>
                <Icons {...{ svgData, size, styles, color, rotate, spin, opacity }}></Icons>
            </Host>
        );
    }
}
