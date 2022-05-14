import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gf-input'
})
export class GfInput {

  render() {
    return (
      <Host>
        <div class="gf-input">
          <input type="text" class="gf-input__inner" />
        </div>
      </Host>
    );
  }

}
