import { FunctionalComponent, h } from "@stencil/core";
import { stringify } from "svgson"
interface IconProps {
    // size: number | string;
    // styles: object;
    // color: string;
    // rotate: number;
    // spin: boolean;
    svgData: any;
}

// { size = 40, styles, color = '', rotate = '', spin, svgData }
export const Icons: FunctionalComponent<IconProps> = ({ svgData }) => {
    return (
        <div innerHTML={stringify(svgData)}></div>
    )
}

