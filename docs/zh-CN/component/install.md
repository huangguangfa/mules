---
title: 安装
lang: zh-CN
---

::: tip 介绍
`gf-ui`是一款基于`h5 component`开发的的web组件库、用于快速构建pc网站中后台产品! `作者`在不同项目所尝试了很多UI库、也挖掘了很多组件库的优缺点在把一些好的优的、聚合在这个库里面, 作者一般在晚上进行迭代、或者平常节假日, 如有问题联系:1454556135@qq.com
:::

### 特性

- 基于h5新组件方式开发
- 支持`市面主流框架`的集成使用、也可以通过cdn方式在传统html里面去使用
- 提供友好的API, 灵活的组件使用
- 吸取了市面上不同UI框架的优缺点、包括功能与样式

```js
// yarn 
yarn add @gf-ui/components 

// pnpm
pnpm add @gf-ui/components 

// npm
npm install @gf-ui/components
```

::: tip 接入不同框架和使用规则
集成的方式有两种分别是: `按需` 与 `加载全部`, 在传统的框架技术里面都用按需打包技术、所以作者也是建议您在使用此库的时候可以选择按需的模式引入组件, 这样有助与您可以减少项目的体积大小, 提高性能 😊
:::


## HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script type="module"
        src="https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.esm.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.css">
</head>

<body>
    <gf-button>普通按钮</gf-button>
    <gf-button color="primary">正常按钮</gf-button>
    <gf-button color="success">成功按钮</gf-button>
    <gf-button color="info">信息按钮</gf-button>
    <gf-button color="warning">警告按钮</gf-button>
    <gf-button color="danger">错误按钮</gf-button>
</body>
</html>
```

## Vue2
```js
// main.js 引入使用
import { defineCustomElements, applyPolyfills } from '@gf-ui/components/loader';
defineCustomElements().then(() => {
    applyPolyfills()
})

// main.js 过滤自定义组件、不让vue做组件解析
Vue.config.ignoredElements = [/gf-\w*/];
```

## Vue3
```js
// main.ts 引入使用
import { defineCustomElements, applyPolyfills } from '@gf-ui/components/loader';
defineCustomElements().then(() => {
    applyPolyfills()
})

// vite.config.js 过滤自定义组件、不让vue做组件解析
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes("gf-")
      }
    }
  })],
});
```

## React
```js
import { defineCustomElements, applyPolyfills } from '@gf-ui/components/loader';
defineCustomElements().then(() => {
    applyPolyfills()
})
```