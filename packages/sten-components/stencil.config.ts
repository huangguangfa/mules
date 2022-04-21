import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
    namespace: 'sten-components',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
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
    ],
    plugins: [
        less()
    ]
};
