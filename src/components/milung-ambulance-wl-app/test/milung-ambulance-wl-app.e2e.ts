import { newE2EPage } from '@stencil/core/testing';

describe('milung-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<milung-ambulance-wl-app></milung-ambulance-wl-app>');

    const element = await page.find('milung-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
