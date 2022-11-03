import { Component, Host, h } from '@stencil/core'
import { useNamespace } from '../../utils'
const ns = useNamespace('button-group')

@Component({
  tag: 'gf-button-group',
  shadow: false,
})
export class ButtonGroup {
  render() {
    return (
      <Host class={[ns.b()].join(' ')}>
        <slot></slot>
      </Host>
    )
  }
}
