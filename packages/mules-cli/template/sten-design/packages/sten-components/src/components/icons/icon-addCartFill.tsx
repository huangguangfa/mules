
import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "../sten-icons/index";
import { addCartFill as svgData } from "@sten-ui/icons";
@Component({
    tag: 'icon-add-cart-fill',
    shadow: false
})  
export class IconaddCartFill {
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
