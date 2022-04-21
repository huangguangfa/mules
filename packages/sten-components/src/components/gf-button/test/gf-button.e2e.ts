import { newE2EPage } from '@stencil/core/testing';

describe('gf-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gf-button></gf-button>');

    const element = await page.find('gf-button');
    expect(element).toHaveClass('hydrated');
  });
});
