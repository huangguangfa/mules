import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'gf-tag',
  shadow: true,
})
export class Tag {
  render() {
    return <Host>tag</Host>
  }
}
