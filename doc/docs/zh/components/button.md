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

常用的操作按钮, 支持常规样貌和`定制化颜色需求`、包括`监听键盘事件`定制某些特殊场景

#### 基础用法

::: demo
<div class="flex">
  <gf-button>普通按钮</gf-button>
  <gf-button color="primary"> 正常按钮</gf-button>
  <gf-button id="success-btn" color="success">成功按钮</gf-button>
  <gf-button color="info">信息按钮</gf-button>
  <gf-button color="warning">警告按钮</gf-button>
  <gf-button color="danger">错误按钮</gf-button>
</div>
:::

#### 镂空按钮

::: demo
<div class="flex">
  <gf-button>普通按钮</gf-button>
  <gf-button color="primary" plain>正常按钮</gf-button>
  <gf-button color="success" plain>成功按钮</gf-button>
  <gf-button color="info" plain>信息按钮</gf-button>
  <gf-button color="warning" plain>警告按钮</gf-button>
  <gf-button color="danger" plain>错误按钮</gf-button>
</div>
:::

<!-- #### 圆角按钮

::: demo
<div class="flex">
  <gf-button lass="mlr10" size="small" circle>
    <gf-icon-q-rcode color="#000000" size="20"></gf-icon-q-rcode>
  </gf-button>
  <gf-button color="primary" size="small" circle>
    <gf-icon-q-rcode color="white" size="20"></gf-icon-q-rcode>
  </gf-button>
  <gf-button color="success"  size="smaller" circle>
    <gf-icon-success-fill color="white" size="25"></gf-icon-success-fill>
  </gf-button>
</div>
::: -->

#### 按钮大小

::: demo

<div class="flex">
  <h5>超大</h5>
  <gf-button color="primary" size="large">普通按钮</gf-button>
  <gf-button color="success" size="large">成功按钮</gf-button>
  <gf-button color="info" size="large">信息按钮</gf-button>
  <gf-button color="warning" size="large">警告按钮</gf-button>
  <gf-button color="danger" size="large">错误按钮</gf-button>
</div>

<div class="flex">
  <h5>正常</h5>
  <gf-button color="primary">普通按钮</gf-button>
  <gf-button color="success">成功按钮</gf-button>
  <gf-button color="info">信息按钮</gf-button>
  <gf-button color="warning">警告按钮</gf-button>
  <gf-button color="danger">错误按钮</gf-button>
</div>

<div class="flex">
  <h5>小的</h5>
  <gf-button color="primary" size="small">普通按钮</gf-button>
  <gf-button color="success" size="small">成功按钮</gf-button>
  <gf-button color="info" size="small">信息按钮</gf-button>
  <gf-button color="warning" size="small">警告按钮</gf-button>
  <gf-button color="danger" size="small">错误按钮</gf-button>
</div>

<div class="flex">
  <h5>特小</h5>
  <gf-button color="primary" size="smaller">普通按钮</gf-button>
  <gf-button color="success" size="smaller">成功按钮</gf-button>
  <gf-button color="info" size="smaller">信息按钮</gf-button>
  <gf-button color="warning" size="smaller">警告按钮</gf-button>
  <gf-button color="danger" size="smaller">错误按钮</gf-button>
</div>
:::