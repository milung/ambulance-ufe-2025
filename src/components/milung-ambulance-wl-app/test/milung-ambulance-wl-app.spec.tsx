import { newSpecPage } from '@stencil/core/testing';
import { MilungAmbulanceWlApp } from '../milung-ambulance-wl-app';

describe('milung-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MilungAmbulanceWlApp],
      html: `<milung-ambulance-wl-app base-path="/"></milung-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("milung-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MilungAmbulanceWlApp],
      html: `<milung-ambulance-wl-app base-path="/ambulance-wl/"></milung-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("milung-ambulance-wl-list");
  });
});