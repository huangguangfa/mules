---
lang: zh-CN
title: sten-icon
date: 2017-12-28  // 时间格式，日期是可以填写 时分秒 的，格式为 2019-10-20 00:00:00。
tags:
- vue
- webpack
description: 页面的描述
---



### @gf-ui/components安装


```js
yarn add @gf-ui/components 
// or
npm install @gf-ui/components
```

::: tip HTML

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

:::

::: tip Vue2.0
```js
// 引入使用
import { defineCustomElements, applyPolyfills } from '@gf-ui/components/loader';
defineCustomElements().then(() => {
    applyPolyfills()
})

// main.js 过滤自定义组件、不让vue做组件解析
Vue.config.ignoredElements = [/gf-\w*/];
```
:::

::: tip Vue3.0
```js
// 引入使用
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
:::

::: tip React
```js
import { defineCustomElements, applyPolyfills } from '@gf-ui/components/loader';
defineCustomElements().then(() => {
    applyPolyfills()
})

```
:::