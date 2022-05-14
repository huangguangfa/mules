<template><h2 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h2>
<p>常用的操作按钮, 支持常规样貌和<code v-pre>定制化颜色需求</code>、包括<code v-pre>监听键盘事件</code>定制某些特殊场景</p>
<h4 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h4>
<p>::: demo</p>
<div class="flex">
  <gf-button>普通按钮</gf-button>
  <gf-button color="primary"> 正常按钮</gf-button>
  <gf-button id="success-btn" color="success">成功按钮</gf-button>
  <gf-button color="info">信息按钮</gf-button>
  <gf-button color="warning">警告按钮</gf-button>
  <gf-button color="danger">错误按钮</gf-button>
</div>
:::
<h4 id="镂空按钮" tabindex="-1"><a class="header-anchor" href="#镂空按钮" aria-hidden="true">#</a> 镂空按钮</h4>
<p>::: demo</p>
<div class="flex">
  <gf-button>普通按钮</gf-button>
  <gf-button color="primary" plain>正常按钮</gf-button>
  <gf-button color="success" plain>成功按钮</gf-button>
  <gf-button color="info" plain>信息按钮</gf-button>
  <gf-button color="warning" plain>警告按钮</gf-button>
  <gf-button color="danger" plain>错误按钮</gf-button>
</div>
:::
<h4 id="圆角按钮-和-iconfont" tabindex="-1"><a class="header-anchor" href="#圆角按钮-和-iconfont" aria-hidden="true">#</a> 圆角按钮 和 Iconfont</h4>
<p>::: demo</p>
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
<h4 id="按钮大小" tabindex="-1"><a class="header-anchor" href="#按钮大小" aria-hidden="true">#</a> 按钮大小</h4>
<p>::: demo</p>
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
<h4 id="禁用按钮" tabindex="-1"><a class="header-anchor" href="#禁用按钮" aria-hidden="true">#</a> 禁用按钮</h4>
<p>::: demo</p>
<div class="flex">
  <gf-button disabled>普通按钮</gf-button>
  <gf-button color="primary" disabled>正常按钮</gf-button>
  <gf-button color="success"  disabled>成功按钮</gf-button>
  <gf-button color="info" disabled>信息按钮</gf-button>
  <gf-button color="warning" disabled>警告按钮</gf-button>
  <gf-button color="danger" disabled>错误按钮</gf-button>
</div>
:::
<h4 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色" aria-hidden="true">#</a> 自定义颜色</h4>
<p>::: demo</p>
<div class="flex">
  <gf-button color="#BF0060">自定义颜色</gf-button>
  <gf-button color="#00BB00">自定义颜色</gf-button>
  <gf-button color="#A23400">自定义颜色</gf-button>
  <gf-button color="#EAC100">自定义颜色</gf-button>
  <gf-button color="#5151A2">自定义颜色</gf-button>
  <gf-button color="#ff9933">自定义颜色</gf-button>
</div>
:::
<h4 id="按钮组" tabindex="-1"><a class="header-anchor" href="#按钮组" aria-hidden="true">#</a> 按钮组</h4>
<p>::: demo</p>
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
:::</template>
