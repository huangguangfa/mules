---
lang: zh-CN
title: input
date: 2022-5-9  
tags:
- vue
- webpack
description: 页面的描述
---


## Input 按钮

支持`input、textarea`两站类型输入, 支持图标+input混合, 包括支持输入框的状态、基本上定制化属性都是基于Input


#### 基础用法
::: demo
<div class="input borders">
  <gf-input placeholder="请输入姓名"></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea"></gf-input>
</div>
:::

#### 禁用
::: demo
<div class="input borders">
  <gf-input placeholder="请输入姓名" disabled></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" disabled></gf-input>
</div>
:::

#### 清空
::: demo
<div class="input borders">
  <gf-input placeholder="请输入姓名" clearable></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" clearable></gf-input>
</div>
:::

#### 显示输出长度
::: demo
<div class="input borders">
  <gf-input placeholder="请输入姓名" maxlength="10"></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" maxlength="10"></gf-input>
</div>
:::

#### 状态
::: demo
<div class="input borders">
  <gf-input placeholder="成功" status="success"></gf-input>
  <gf-input placeholder="信息" status="info"></gf-input>
  <gf-input placeholder="警告" status="warning"></gf-input>
  <gf-input placeholder="错误" status="error"></gf-input>
</div>
:::

#### textarea配置
::: demo
<div class="input borders">
  <gf-input placeholder="自适应文本高度" type="textarea" autosize></gf-input>
  <gf-input placeholder="固定列数且不可拖动" type="textarea" rows="4" resize="none"></gf-input>
  <gf-input placeholder="最少3列最大10列" type="textarea" min-rows="3" max-rows="10"></gf-input>
</div>
:::


### 配置属性
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


<CommentService></CommentService>