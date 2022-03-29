import { newSpecPage } from '@stencil/core/testing';
import { StenButton } from '../sten-button';

describe('sten-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StenButton],
      html: `<sten-button></sten-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sten-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sten-button>
    `);
  });
});
