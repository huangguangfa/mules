---
lang: zh-CN
title: button
date: 2022-5-9  
tags:
- vue
- webpack
description: 页面的描述
---


# Button 按钮

常用的操作按钮。

## 基础用法

<gf-button class="mlr10">普通按钮</gf-button>
<gf-button color="primary" class="mlr10"> 正常按钮</gf-button>
<gf-button id="success-btn" color="success" class="mlr10">成功按钮</gf-button>
<gf-button color="info" class="mlr10">信息按钮</gf-button>
<gf-button color="warning" class="mlr10">警告按钮</gf-button>
<gf-button color="danger">错误按钮</gf-button>

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>
```（避免转义，使用时去掉整个括号的内容）

:::


