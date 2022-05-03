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

function getOutStyle({ color = "red", rotate = 0, spin = false, opacity = 1 }: IconProps) {
    const styleConfig: any = { color, display: "inline-block", opacity }
    if (Number.isSafeInteger(rotate)) {
        styleConfig.transform = `rotate(${rotate}deg)`;
    }
    return styleConfig
}

export const Icons: FunctionalComponent<IconProps> = (props) => {
    const { svgData, size = 30 } = props;
    svgData.attributes = {
        ...svgData.attributes,
        width: size,
        height: size
    };
    const outStyle = getOutStyle(props);
    return (
        <div class="svg-wrap gf-icon-loading" innerHTML={stringify(svgData)} style={outStyle}></div>
    )
}

