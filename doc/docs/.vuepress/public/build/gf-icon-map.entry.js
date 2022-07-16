import { r as registerInstance, h, e as Host } from './index-5fa84477.js';
import { I as Icons, x as svgData } from './index-07b69c32.js';

const GfIconmap = class {
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

export { GfIconmap as gf_icon_map };
