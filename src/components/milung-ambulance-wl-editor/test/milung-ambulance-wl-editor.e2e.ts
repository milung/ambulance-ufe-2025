import { newE2EPage } from '@stencil/core/testing';

describe('milung-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<milung-ambulance-wl-editor></milung-ambulance-wl-editor>');

    const element = await page.find('milung-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
