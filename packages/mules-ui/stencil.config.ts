import alias from '@rollup/plugin-alias'
const path = require('path')

import type { Config } from '@stencil/core'
const globalStyle = path.resolve('../mules-themes', 'npm/index.css')

export const config: Config = {
  namespace: 'sten-components',
  globalStyle,
  invisiblePrehydration: false,
  devServer: {
    openBrowser: false,
    port: 3334,
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    }),
  ],
  outputTargets: [
    // 整体打包
    {
      type: 'dist',
    },
    // 按需方式打包
    {
      type: 'dist-custom-elements',
    },
    // 网站script方式打包
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
}
