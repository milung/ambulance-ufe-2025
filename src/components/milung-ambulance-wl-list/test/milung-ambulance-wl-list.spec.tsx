import { newSpecPage } from '@stencil/core/testing';
import { MilungAmbulanceWlList } from '../milung-ambulance-wl-list';

describe('milung-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MilungAmbulanceWlList],
      html: `<milung-ambulance-wl-list></milung-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <milung-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </milung-ambulance-wl-list>
    `);
  });
});
