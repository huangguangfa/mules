---
lang: zh-CN
title: Storage类
description: 页面的描述
---

# Storage
# 核心类
::: tip 本地存储封装 【基于locaScorage、sessionStorage + Ctypto数据加密】
:::

### `set` 

- 设置指定key和value到会话储存实例中
- `参数`
    - `options:{ cryptoType:{ name:string }, storageType: session | local }`
    - `options[cryptoType] = { name:"none" }` 加密类型（默认：不加密, <span class="colorff0066 font-bold">加密仅限于  AES、DES、RC4</span>）
    - `options[storageType] = { storageType: local | session }` 存储位置（默认：session）
```js
const keys = {
    core: "core",
    web: "web"
}
const def = 'mate-ui';
const values = {
    core: "@gf-ui/core",
    web: "@gf-ui/web"
}
Storage.set(keys.core, values.core);
Storage.set(keys.core, values.core, { cryptoType:{ name: 'AES' } }); // 加密存储
```

### `get` 

- 设置指定key和value到会话储存实例中
- `参数`
    - `options:{ cryptoType:{ name:string }, storageType: session | local }`
    - `options[cryptoType] = { name:"none" }` 加密类型（默认：不加密, <span class="colorff0066 font-bold">加密仅限于  AES、DES、RC4</span>）
    - `options[storageType] = { storageType:"session" }` 存储位置（默认：session）
```js
const keys = {
    core: "core",
    web: "web"
}
const def = 'mate-ui';
const values = {
    core: "@gf-ui/core",
    web: "@gf-ui/web"
}
Storage.set(keys.core, values.core);
Storage.set(keys.web, values.web, { cryptoType:{ name: 'AES' } }); // 加密存储

Storage.get(keys.core); // @gf-ui/core
Storage.get(keys.web); // da7f42d8b5eed1a6aaa14db66767a004
Storage.get(keys.web, { cryptoType:{ name: 'AES' } }); // @gf-ui/web
```

### `remove` 

- 删除`本地缓存`或`会话缓存`指定的key  `storageType默认：session`
- `参数`
    - `(key:string, storageType:local | session) => void`
```js
const keys = {
    core: "core",
    web: "web"
}
Storage.remove(keys.core);
```

### `contains` 

- 获取`本地缓存`或`会话缓存`中是否包含指定key的实例 `storageType 默认：session`
- `参数`
    - `(key:string, storageType:local | session) => boolean`
```js
const keys = {
    core: "core",
    web: "web"
}
if(Storage.contains(keys.core)){
    console.log('包含')
}  
```

### `count` 

- 获取`本地缓存`或`会话缓存`是否包含指定key的实例 `storageType 默认 ：session`
- `参数`
    - `(storageType:local | session) => number`
```js
console.log('当前会话存储数量', Storage.count('local')) 
```

### `clear` 

- 清除`本地缓存`或`会话缓存`位置所有内容 `storageType 默认：session`
- `参数`
    - `(storageType:local | session) => number`
```js
Storage.clear() 
```

### `clearAll` 

- 清除所有的`本地缓存`和`会话缓存`

```js
Storage.clearAll() 
```