import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'gf-autocomplete'
})
export class GfAutocomplete {

    render() {
        return (
            <Host>
                <div class='gf-autocomplete'>
                    <ul class="gf-autocomplete__list">
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                        <li class='gf-autocomplete__option'> 深圳 </li>
                    </ul>
                    <div class={'gf-autocomplete__arrow'}></div>
                </div>
            </Host>
        );
    }
}