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

::: demo
<div class="flex">
  <gf-button>普通按钮</gf-button>
  <gf-button color="primary"> 正常按钮</gf-button>
  <gf-button id="success-btn" color="success">成功按钮</gf-button>
  <gf-button color="info">信息按钮</gf-button>
  <gf-button color="warning">警告按钮</gf-button>
  <gf-button color="danger">错误按钮</gf-button>
</div>

<script>
export default {
  methods: {
    onClick: () => { window.alert(1) },
  },
}
</script>
:::


