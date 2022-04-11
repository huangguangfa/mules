---
lang: zh-CN
title: 安装
description: 页面的描述
---



# 安装
::: tip @gf-ui/core
它是核心库也是所有库的`基建`、除了给其他库使用也能在业务框架中去使用、默认`导出每一个模块`而不是`整体模块`、里面都是一些常用的方法属性、其中包括 `Type(类型的判断)`、`Crypto(数据加密)`、`Storage(本地存储)`还包括`formatter(常用的格式化方法)`、下面我们去了解下每一块的API的使用规则!
:::



```js
// 安装
yarn add @gf-ui/core 
// or
npm install @gf-ui/core 

// ES module使用
import { Type, Crypto, Storage } from "@gf-ui/core";
import * as gfcore from "@gf-ui/core" 

// common.js
const { Type, Crypto, Storage } = require("@gf-ui/core");
const gfcore = require("@gf-ui/core");

```


