import { defaultNamespace } from '../../../mules-ui/src/utils';
import { FunctionalComponent, h } from '@stencil/core';
import { stringify } from 'svgson';
export interface IconProps {
  size?: number | string;
  styles?: object;
  color?: string;
  rotate?: number;
  spin?: boolean;
  opacity?: number | string;
  svgData?: any;
}

function getOutStyle({ color, rotate, opacity, size }: IconProps) {
  const styleConfig: any = {
    display: 'inline-block',
    color,
    opacity,
    width: `${size}px`,
    height: `${size}px`,
  };
  if (Number.isSafeInteger(rotate)) {
    styleConfig.transform = `rotate(${rotate}deg)`;
  }
  return styleConfig;
}

export const Icons: FunctionalComponent<IconProps> = props => {
  const { svgData, size, spin, color } = props;
  svgData.attributes = {
    ...svgData.attributes,
    width: size,
    height: size,
    fill: color,
    preserveAspectRatio: 'none meet',
  };
  const outStyle = getOutStyle(props);
  return <span class={`svg-wrap ${spin ? `${defaultNamespace}-icon-loading` : ''}`} innerHTML={stringify(svgData)} style={outStyle}></span>;
};
