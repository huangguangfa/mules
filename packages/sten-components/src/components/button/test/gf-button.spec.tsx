import { newSpecPage } from '@stencil/core/testing';
import { GfButton } from '../gf-button';

describe('gf-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GfButton],
      html: `<gf-button></gf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <gf-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gf-button>
    `);
  });
});
