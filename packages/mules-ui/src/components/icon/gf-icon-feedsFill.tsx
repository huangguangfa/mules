
import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "../../../../mules-icons/src/icon-base";
import { feedsFill as svgData } from "../../../../mules-icons/src/icons";
@Component({
    tag: 'gf-icon-feeds-fill',
    shadow: false
})  
export class GfIconfeedsFill {
    @Prop() size: number | string = 30;
    @Prop() styles?: object = {};
    @Prop() color?: string = "#606266";
    @Prop() rotate?: number = 0;
    @Prop() spin?: boolean = false;
    @Prop() opacity?: number | string = 1;
    render() {
        const { size, styles, color, rotate, spin, opacity } = this;
        const hostStyles: {width:string, height:string} = { width: size + 'px', height: size + 'px' }
        return (
            <Host style={hostStyles}>
                <Icons {...{ svgData, size, styles, color, rotate, spin, opacity }}></Icons>
            </Host>
        );
    }
}
