import { r as registerInstance, h, e as Host } from './index-b1d1dbc1.js';
import { I as Icons, P as svgData } from './index-9fd40ef1.js';

const GfIconclear = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { style: hostStyles }, h(Icons, Object.assign({}, { svgData, size, styles, color, rotate, spin, opacity }))));
  }
};

export { GfIconclear as G };
