---
lang: zh-CN
title: button
date: 2022-5-10 
tags:
- vue
- webpack
description: 页面的描述
---

## Icon
语义化的矢量图标、图标来自阿里开源图标库, 玩法参考市面react玩法、按单个icon引入并使用,这样做的目的是为了`按需只加载`当前展示的对应图标、而不是对图标进行一个全局注入的方式, `点击图标进行icon组件复制`, 
#### 基础用法
::: demo
<div class="flex childer-margin10">
    <gf-icon-add-cart-fill class="m15"></gf-icon-add-cart-fill>
    <gf-icon-add-fill class="m15"></gf-icon-add-fill>
    <gf-icon-add-select class="m15"></gf-icon-add-select>
    <gf-icon-arrow-down class="m15"></gf-icon-arrow-down>
</div>
:::

<gf-Icons></gf-Icons>