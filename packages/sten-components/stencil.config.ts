import { Config } from '@stencil/core';
const path = require("path");
const globalStyle = path.resolve('../sten-themes', 'npm/index.css');
export const config: Config = {
    namespace: 'sten-components',
    globalStyle,
    outputTargets: [
        {
            type: 'dist',
            // esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ]
};
