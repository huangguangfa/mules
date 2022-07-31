---
title: Button
lang: zh-CN
---

# Button

## 基础使用

:::demo 常用的操作按钮, 支持常规样貌和`定制化颜色需求`、包括`监听键盘事件`定制某些特殊场景

button/basic

:::

## 禁用按钮
你可以使用 `disabled` 属性来定义按钮是否被禁用。使用 disabled 属性来控制按钮是否为禁用状态。 
:::demo 该属性接受一个 Boolean 类型的值。

button/disabled

:::

## 镂空按钮

:::demo

button/plain

:::

## 圆角按钮和Iconfont

:::demo

button/iconfont

:::

## 按钮大小

:::demo

button/size

:::

## 自定义颜色

:::demo 我们可以通过设置属性 `color` 颜色去定制化按钮颜色

button/color

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。
:::demo 使用 `<gf-button-group>` 对多个按钮分组。

button/group

:::

## 配置属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large / small / smaller           |    —     |
| color     | 按钮颜色   | string    |  primary / success / info / warning / danger / error / 自定义 |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| circle     | 是否圆角按钮   | boolean    | — | false   |
| textColor     | 文字颜色(仅支持按钮颜色定制化时`生效`)   | boolean    | — | false   |
| classNames     | 自定义className   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| native-type | 原生 type 属性 | string | button / submit / reset | button |