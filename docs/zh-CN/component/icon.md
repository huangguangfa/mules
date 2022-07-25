---
title: Icon
lang: zh-CN
---

## Icon图标
语义化的矢量图标、图标来自阿里开源图标库, 玩法参考市面react玩法、按单个icon引入并使用,这样做的目的是为了`按需只加载`当前展示的对应图标、而不是对图标进行一个全局注入的方式, `点击图标进行icon组件复制`

:::demo

icon/basic

:::

## 基础图标集合

:::demo

icon/icon

:::

## 彩色图标集合

:::demo

icon/icon-color

:::

## 配置属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | number  |   -          |    25    |
| styles     | style   | Object    |  - |     —    |
| color     | 颜色   | 16进制 / 其他    | — | #000000   |
| rotate     | 选择角度   | string / number    | — | 0   |
| textColor     | 文字颜色   | boolean    | — | false   |
| spin     | 旋转动画,使用loading   | boolean    | — | false   |
| opacity     | 透明度   | number    | — | 1   |
