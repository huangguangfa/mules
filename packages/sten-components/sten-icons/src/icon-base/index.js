import { h } from "@stencil/core";
import { stringify } from "svgson";
function getOutStyle({ color, rotate, opacity, size }) {
  const styleConfig = {
    display: "inline-block",
    color,
    opacity,
    width: `${size}px`,
    height: `${size}px`
  };
  if (Number.isSafeInteger(rotate)) {
    styleConfig.transform = `rotate(${rotate}deg)`;
  }
  return styleConfig;
}
export const Icons = (props) => {
  const { svgData, size, spin, color } = props;
  svgData.attributes = Object.assign(Object.assign({}, svgData.attributes), { width: size, height: size, fill: color });
  const outStyle = getOutStyle(props);
  return (h("span", { class: `svg-wrap ${spin ? 'gf-icon-loading' : ''}`, innerHTML: stringify(svgData), style: outStyle }));
};
