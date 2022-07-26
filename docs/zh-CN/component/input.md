---
title: Input
lang: zh-CN
---

## Input 输入框

:::demo 支持`input、textarea`两站类型输入, 支持图标+input混合, 包括支持输入框的状态、基本上定制化属性都是基于Input

input/basic

:::

## Input 禁用

:::demo 您可以使用 `disabled` 属性来定义按钮是否被禁用。使用 disabled 属性来控制按钮是否为禁用状态

input/disabled

:::

## Input 清空

:::demo 您可以使用 `clearable` 显示清除按钮

input/clearable

:::

## Input 显示输出长度

:::demo 您可以使用 `maxlength` 约束最大输入的长度

input/length

:::

## Input 状态

:::demo 您可以使用 `status` 属性来定义按钮的状态、目前支持四种状态格式

input/status

:::

## Input 配置 
您可以使用 `autosize` 设置自适应输入框、使用 `rows=4` 设置输入框的总输入行数
使用 `min-rows="3" max-rows` 约束最大行数和最小行数

:::demo 

input/options

:::


## 配置属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 原生属性   | string  |   input / textarea           |    input     |
| disabled     | 是否禁用   | boolean    |  true / false |     false    |
| clearable     | 显示清除按钮   | boolean    | — | false   |
| value     | 默认展示的值   | -    | — | -   |
| maxlength     | 输入长度的限制   | -    | — | 无限   |
| status     | 输入框的状态   | success / info /  warning /  error   | — | -   |
| iconFontSize     | 默认图标的大小   | -    | — | 20   |
| iconColor  | 图标的颜色    | -   | —   | #ccc   |
| placeholder | 提示 | string | - | - |
| autofocus | 设置自动获取焦点 | boolean | - | false |
| resize | 是否支持拖拽下拉 | string |none / both / horizontal / vertical | vertical |
| minRows | 最[小]列支持 | string / number | - | - |
| maxRows | 最[大]列支持 | string / number | - | - |
| rows | 定制列 | string / number | - | 2 |
| autosize | 自动适配列表 | boolean | - | false |