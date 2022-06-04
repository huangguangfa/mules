import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'gf-autocomplete'
})
export class GfAutocomplete {
    @Prop() show: Boolean = false;
    render() {
        return (
            <Host>
                <div class={`gf-autocomplete`}>
                    <ul class={`gf-autocomplete__list ${this.show ? 'gf-autocomplete__show' : ''}`}>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                    </ul>
                    <div class={`gf-autocomplete__arrow ${this.show ? 'display-block' : 'display-none'}`}></div>
                </div>
            </Host>
        );
    }
}