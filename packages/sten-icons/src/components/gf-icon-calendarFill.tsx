
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { calendarFill as svgData } from "../icons";
@Component({
    tag: 'gf-icon-calendar-fill',
    shadow: false
})  
export class GfIconcalendarFill {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
