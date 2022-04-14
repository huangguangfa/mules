import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import { Icon } from "../../../../sten-icons/icons_esm/icon"
@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true,
})
export class MyComponent {
    @Prop() first: string;
    @Prop() middle: string;
    @Prop() last: string;
    @State() num: number = 0;
    
    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    render(){
        return <div>
                <button onClick={() => this.num += 1}>add</button>
                    Hello, World! I'm {this.getText()}, number is 
                    {this.num}
                <Icon ></Icon>
            </div>;
    }
}
