import { FunctionalComponent, h, Host } from '@stencil/core';
import svgData from "./svg.js"

interface StenIconProps {
    /** icon 尺寸 默认 20 */
    size: number | string;
    /*** styles 传入的css样式 */
    styles: object;
    /** * 图标颜色 */
    color: string;
    /** * 旋转的角度 */
    rotate: number;
    /** * 是否自动旋转 */
    spin: boolean;
    /** * 需要渲染的svg数据 */
    svgData: any;
}



export const Icon: FunctionalComponent<StenIconProps> = ({ size = 20, styles, color, rotate, spin, svgData }) => {
   
    return (
        <Host>
            <svg width={size} height={size} ></svg>
        </Host>
    );
}