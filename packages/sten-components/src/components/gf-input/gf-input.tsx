import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gf-input',
  styleUrl: 'gf-input.css',
  shadow: true,
})
export class GfInput {

  render() {
    return (
      <Host>
        input
      </Host>
    );
  }

}
