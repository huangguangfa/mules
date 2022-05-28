---
lang: zh-CN
title: button
date: 2022-5-9  
tags:
- vue
- webpack
description: 页面的描述
---

## Button 按钮

常用的操作按钮, 支持常规样貌和`定制化颜色需求`、包括`监听键盘事件`定制某些特殊场景


## 基础用法
::: demo
<div class="flex" v-pre>
  <gf-button>普通按钮</gf-button>
  <gf-button color="primary">正常按钮</gf-button>
  <gf-button color="success">成功按钮</gf-button>
  <gf-button color="info">信息按钮</gf-button>
  <gf-button color="warning">警告按钮</gf-button>
  <gf-button color="danger">错误按钮</gf-button>
</div>
:::


## 镂空按钮
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

## 圆角按钮 和 Iconfont
::: demo
<div class="flex">
  <gf-button size="small" circle>
    <gf-icon-q-rcode color="#000000" size="20"></gf-icon-q-rcode>
  </gf-button>
  <gf-button color="primary" size="small" circle>
    <gf-icon-q-rcode color="white" size="20"></gf-icon-q-rcode>
  </gf-button>
  <gf-button color="success"  size="smaller" circle>
    <gf-icon-success-fill color="white" size="25"></gf-icon-success-fill>
  </gf-button>

  <gf-button color="primary">
      <gf-icon-add-fill slot="icon-left" color="white" size="16" style="margin-right: 3px;"></gf-icon-add-fill>
      添加
  </gf-button>
  <gf-button color="primary"  size="small">
      <gf-icon-q-rcode color="white" size="20"></gf-icon-q-rcode>
  </gf-button>
  <gf-button color="success" disabled>
      <gf-icon-loading slot="icon-left" color="white" size="15" spin style="margin-right: 3px;"></gf-icon-loading>
      加载中
  </gf-button>
  <gf-button color="success"  size="smaller">
      <gf-icon-success-fill color="white" size="25"></gf-icon-success-fill>
  </gf-button>
</div>
:::

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
  <h6>正常</h6>
  <gf-button color="primary">普通按钮</gf-button>
  <gf-button color="success">成功按钮</gf-button>
  <gf-button color="info">信息按钮</gf-button>
  <gf-button color="warning">警告按钮</gf-button>
  <gf-button color="danger">错误按钮</gf-button>
</div>

<div class="flex">
  <h6>小的</h6>
  <gf-button color="primary" size="small">普通按钮</gf-button>
  <gf-button color="success" size="small">成功按钮</gf-button>
  <gf-button color="info" size="small">信息按钮</gf-button>
  <gf-button color="warning" size="small">警告按钮</gf-button>
  <gf-button color="danger" size="small">错误按钮</gf-button>
</div>

<div class="flex">
  <h6>特小</h6>
  <gf-button color="primary" size="smaller">普通按钮</gf-button>
  <gf-button color="success" size="smaller">成功按钮</gf-button>
  <gf-button color="info" size="smaller">信息按钮</gf-button>
  <gf-button color="warning" size="smaller">警告按钮</gf-button>
  <gf-button color="danger" size="smaller">错误按钮</gf-button>
</div>
:::

#### 禁用按钮
::: demo
<div class="flex">
  <gf-button disabled>普通按钮</gf-button>
  <gf-button color="primary" disabled>正常按钮</gf-button>
  <gf-button color="success"  disabled>成功按钮</gf-button>
  <gf-button color="info" disabled>信息按钮</gf-button>
  <gf-button color="warning" disabled>警告按钮</gf-button>
  <gf-button color="danger" disabled>错误按钮</gf-button>
</div>
:::

#### 自定义颜色
::: demo
<div class="flex">
  <gf-button color="#BF0060">自定义颜色</gf-button>
  <gf-button color="#00BB00">自定义颜色</gf-button>
  <gf-button color="#A23400">自定义颜色</gf-button>
  <gf-button color="#EAC100">自定义颜色</gf-button>
  <gf-button color="#5151A2">自定义颜色</gf-button>
  <gf-button color="#ff9933">自定义颜色</gf-button>
</div>
:::


#### 按钮组
::: demo
<div class="flex reset">
  <!-- 上下页 -->
  <gf-button-group>
    <gf-button color="primary">
        <gf-icon-arrow-left slot="icon-left" size="20" color="white"></gf-icon-arrow-left>
        上一页
    </gf-button>
    <gf-button color="primary">
        <gf-icon-arrow-right slot="icon-right" size="20" color="white"></gf-icon-arrow-right>
        下一页
    </gf-button>
  </gf-button-group>
  
  <!-- 随机Icon -->
  <gf-button-group class="ml20">
    <gf-button color="primary">
        <gf-icon-add-select color="white" size="20"></gf-icon-add-select>
    </gf-button>
    <gf-button color="primary">
        <gf-icon-success-fill color="white" size="20"></gf-icon-success-fill>
    </gf-button>
    <gf-button color="primary">
        <gf-icon-close color="white" size="20"></gf-icon-close>
    </gf-button>
  </gf-button-group>
</div>
:::




### 配置属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large / small / smaller           |    —     |
| color     | 按钮颜色   | string    |  primary / success / info / warning / danger / error / 自定义 |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| circle     | 是否圆角按钮   | boolean    | — | false   |
| textColor     | 文字颜色   | boolean    | — | false   |
| classNames     | 自定义className   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| native-type | 原生 type 属性 | string | button / submit / reset | button |


<CommentService></CommentService>
