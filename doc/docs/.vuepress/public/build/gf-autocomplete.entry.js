import { r as registerInstance, h, e as Host } from './index-5fa84477.js';

const GfAutocomplete = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.show = false;
  }
  render() {
    return (h(Host, null, h("div", { class: `gf-autocomplete` }, h("ul", { class: `gf-autocomplete__list ${this.show ? 'gf-autocomplete__show' : ''}` }, h("li", { class: 'gf-autocomplete__option' }, " \u6DF1\u5733 "), h("li", { class: 'gf-autocomplete__option' }, " \u6DF1\u5733 "), h("li", { class: 'gf-autocomplete__option' }, " \u6DF1\u5733 "), h("li", { class: 'gf-autocomplete__option' }, " \u6DF1\u5733 "), h("li", { class: 'gf-autocomplete__option' }, " \u6DF1\u5733 ")), h("div", { class: `gf-autocomplete__arrow ${this.show ? 'display-block' : 'display-none'}` }))));
  }
};

export { GfAutocomplete as gf_autocomplete };
