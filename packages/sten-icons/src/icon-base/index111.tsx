import { FunctionalComponent, h, Host } from '@stencil/core';
import classnames from 'classnames';

interface IconProps {
    /**
     * icon 尺寸 默认 20
     */
    size: number | string;
    /**
     * styles 传入的css样式
     */
    styles: object;
    /**
     * 传入的class名称
     */
    classNames?: string;
    /**
     * 图标颜色
     */
    color: string;
    /**
     * 旋转的角度
     */
    rotate: number;
    /**
     * 是否自动旋转
     */
    spin: boolean;
    /**
     * 需要渲染的svg数据
     */
    svgData: any;
}

/**
 * @param str
 */
function hyphenate(str) {
    return (str + '').replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}

export const Icons: FunctionalComponent<IconProps> = props => {
    const { size, styles, classNames, color, rotate, spin, svgData } = props;
    if (!svgData) {
        return false;
    }
    const _svgData = svgData.children.map(child => {
        const attrs = {};
        Object.keys(child.attributes).forEach(attrName => {
            attrs[hyphenate(attrName)] = child.attributes[attrName];
        });

        child.attributes = attrs;
        return child;
    });

    console.log(_svgData)



    const classes = classnames(classNames, { 'gf-icon-loading': spin });

    const outerStyle: { [key: string]: string; } = { color };

    if (Number.isSafeInteger(rotate)) {
        outerStyle.transform = `rotate(${rotate}deg)`;
    }

    Object.assign(outerStyle, styles);

    return (
        <span style={{ display: 'flex' }}>
            <svg style={outerStyle} class={classes} {...svgData.attributes} width={size} height={size}>
                {_svgData.map(child =>
                    child.name === 'rect' ?
                        <rect {...child.attributes}></rect>
                        : child.name === 'circle' ?
                            <circle {...child.attributes}></circle>
                            : <path {...child.attributes}></path>,
                )}
            </svg>
        </span>
    );
};