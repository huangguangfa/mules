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

支持`input、textarea`两站类型输入, 支持图标+input混合, 包括支持输入框的状态、基本上定制化属性都是基于Input、而textarea定制化相对少些


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
  <gf-input placeholder="请输入姓名" disabled></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" disabled></gf-input>
</div>
:::