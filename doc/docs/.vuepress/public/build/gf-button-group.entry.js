import { r as registerInstance, h, e as Host } from './index-5fa84477.js';

const GfButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "gf-button-group" }, h("slot", null)));
  }
};

export { GfButtonGroup as gf_button_group };
