import { newSpecPage } from '@stencil/core/testing'
import { Button } from '../index'

describe('gf-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<gf-button></gf-button>`,
    })
    expect(page.root).toEqualHtml(`
      <gf-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gf-button>
    `)
  })
})
