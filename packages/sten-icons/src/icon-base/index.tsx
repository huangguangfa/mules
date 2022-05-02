import { FunctionalComponent, h } from "@stencil/core";
import { stringify } from "svgson"
interface IconProps {
    size?: number | string;
    styles?: object;
    color?: string;
    rotate?: number;
    spin?: boolean;
    opacity?: number | string;
    svgData?: any;
}

export const Icons: FunctionalComponent<IconProps> = ({ svgData, size = 30, color = "red", rotate = 0, spin = false, opacity = 1 }) => {
    svgData.attributes = {
        ...svgData.attributes,
        width: size,
        height: size
    };
    return (
        <span innerHTML={stringify(svgData)}></span>
    )
}

