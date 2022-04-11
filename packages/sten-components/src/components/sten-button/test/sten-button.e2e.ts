import { newE2EPage } from '@stencil/core/testing';

describe('sten-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sten-button></sten-button>');

    const element = await page.find('sten-button');
    expect(element).toHaveClass('hydrated');
  });
});
