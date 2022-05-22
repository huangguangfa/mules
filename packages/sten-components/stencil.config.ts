import { Config } from '@stencil/core';
const path = require("path");
const globalStyle = path.resolve('../sten-themes', 'npm/index.css');
export const config: Config = {
    namespace: 'sten-components',
    globalStyle,
    outputTargets: [
        // 整体打包
        // {
        //     type: 'dist',
        // },
        // 按需方式打包
        {
            type: 'dist-custom-elements',
        },
        // 网站script方式打包
        // {
        //     type: 'www',
        //     serviceWorker: null
        // },
    ]
};
