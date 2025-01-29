import { newSpecPage } from '@stencil/core/testing';
import { MilungAmbulanceWlList } from '../milung-ambulance-wl-list';

describe('milung-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MilungAmbulanceWlList],
      html: `<milung-ambulance-wl-list></milung-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as MilungAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
