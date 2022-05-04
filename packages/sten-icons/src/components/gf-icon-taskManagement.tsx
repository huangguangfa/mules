
import { Component, Host, h } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { taskManagement as svgData } from "../icons";
@Component({
    tag: 'gf-icon-task-management',
    shadow: false
})  
export class GfIcontaskManagement {
    render() {
        return (
            <Host>
                <Icons {...{ svgData }}></Icons>
            </Host>
        );
    }
}
