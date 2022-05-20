import { Component, Host, h, Prop } from '@stencil/core';
import { Icons } from "../icon-base/index";
import { clear as svgData } from "../icons";
export class GfIconclear {
  constructor() {
    this.size = 30;
    this.styles = {};
    this.color = "#606266";
    this.rotate = 0;
    this.spin = false;
    this.opacity = 1;
  }
  render() {
    const { size, styles, color, rotate, spin, opacity } = this;
    const hostStyles = { width: size + 'px', height: size + 'px' };
    return (h(Host, { style: hostStyles },
      h(Icons, Object.assign({}, { svgData, size, styles, color, rotate, spin, opacity }))));
  }
  static get is() { return "gf-icon-clear"; }
  static get properties() { return {
    "size": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | string",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "30"
    },
    "styles": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "object",
        "resolved": "object",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{}"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "\"#606266\""
    },
    "rotate": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "rotate",
      "reflect": false,
      "defaultValue": "0"
    },
    "spin": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "spin",
      "reflect": false,
      "defaultValue": "false"
    },
    "opacity": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | string",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "opacity",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
}
