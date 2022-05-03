import { FunctionalComponent, h } from "@stencil/core";
import { stringify } from "svgson";
interface IconProps {
    size?: number | string;
    styles?: object;
    color?: string;
    rotate?: number;
    spin?: boolean;
    opacity?: number | string;
    svgData?: any;
}

function getOutStyle({ color = "red", rotate = 0, opacity = 1, size = 30 }: IconProps) {
    const styleConfig: any = {
        display: "inline-block",
        color,
        opacity,
        width: `${size}px`,
        height: `${size}px`
    }
    if (Number.isSafeInteger(rotate)) {
        styleConfig.transform = `rotate(${rotate}deg)`;
    }
    return styleConfig
}

export const Icons: FunctionalComponent<IconProps> = (props) => {
    const { svgData, size = 30, spin } = props;
    svgData.attributes = {
        ...svgData.attributes,
        width: size,
        height: size
    };
    const outStyle = getOutStyle(props);
    return (
        <div class={`svg-wrap ${spin ? 'gf-icon-loading' : ''}`} innerHTML={stringify(svgData)} style={outStyle}></div>
    )
}

