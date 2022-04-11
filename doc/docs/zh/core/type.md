---
lang: zh-CN
title: Type类
description: 页面的描述
---

# Type
# 核心类
::: tip 提供数据类型判断
:::

### `isObject` 

- 是否为对象
```js
Type.isObject({ name:'gf' }) // true
Type.isObject(null) // false
Type.isObject([]) // false
```
### `isEmptyObject` 
- 空对象
```js
Type.isEmptyObject({}) // true
Type.isEmptyObject({name:'gf' }) // false
Type.isEmptyObject('') // false
```
### `isPlainObject` 
- 是否为纯粹对象(非window或者系统对象)
```js
Type.isPlainObject({}) // true
Type.isPlainObject(window) // false
```
### `isArray` 
- 是否是数组
```js
Type.isArray([]) // true
Type.isEmptyArray([]) // true
Type.isEmptyArray(['1','2']) // false
```
### `isEmptyArray` 
- 是否是【空】数组
```js
Type.isEmptyArray([]) // true
Type.isEmptyArray(['1','2']) // false
```
### `isFunction` 
- 是否为函数
```js
let f = function () { return 'gf-ui' }
Type.isFunction(f) // true
Type.isFunction(() => {}) // true
```
### `isEmptyFuction` 
- 是否为【空】函数
```js
let f = function () { return 'gf-ui' }
let f1 = function() {}
Type.isEmptyFuction(f) // false
Type.isEmptyFuction(f1) // true
Type.isEmptyFuction(() => {}) // true
```
### `isString` 
- 是否为字符串
```js
Type.isString('') // true
Type.isString(1) // false
```
### `isString` 
- 是否为【空】字符串
```js
Type.isEmptyString('') // true
```

### `isJsonString` 
- 是否为【JSON】字符串
```js
Type.isJsonString('gf-ui') // false
Type.isJsonString('[{"name":"gf-ui"}]') // true
```

### `isNumber` 
- 是否为数字
```js
Type.isNumber(1) // true
```
### `isBoolean` 
- 是否为布尔
```js
Type.isBoolean(true) // true
```
### `isGuid` 
- 是否为GUID
```js
Type.isGuid("CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9") // true
```
### `isEmail` 
- 是否为正确的邮箱格式
```js
Type.isEmail("1454556135@qq.com") // true
```
### `isIdCard` 
- 是否为正确的身份证
```js
Type.isIdCard("360731199309078781") // true
```
### `isPhone` 
- 是否为电话(手机+座机)
```js
Type.isPhone("010-66668888") // true
Type.isPhone("18720706349") // true
```
### `isMobilePhone` 
- 是否为手机
```js
Type.isMobilePhone("18720706349") // true
```

### `isTelPhone` 
- 是否为座机
```js
Type.isTelPhone("010-66668888") // true
```
### `isValidPassword` 
- 是否为合法密码(由8~30位数字/字母/下划线组成)
- `参数(optinons)`
    - 默认值：{ min:8, max:30 }
```js
Type.isValidPassword("gf-ui") // false
Type.isValidPassword("gf-ui/core@1.0.0") // true
Type.isValidPassword('gf-ui/core@1.0.0', {min: 5, max: 10}) // false
```

### `isValidDate` 
- 是否为合法日期
```js
Type.isValidDate('gf-ui') // false
Type.isValidDate(new Date()) // true
Type.isValidDate(new Date('2022-01-01 00:00:00')) // true
```
### `isTrueOrZero` 
- 是否为真或0(排除null,undefined)
```js
Type.isTrueOrZero('gf-ui') // true
Type.isTrueOrZero(0) // true
Type.isTrueOrZero('0') // true

Type.isTrueOrZero(null) // false
Type.isTrueOrZero(undefined) // false
```

### `isValidDate` 
- 转化默认值(当值为undefined 和 null)
```js
const res = Type.def(null, 'gf-ui') // 'gf-ui'
const res = Type.def(undefined, 'gf-ui') // 'gf-ui'
const res = Type.def('@gf-ui/core', 'gf-ui') // @gf-ui/core
```

### `json` 
- JSON转化(当转化不成功则返回默认值)
```js
Type.json('', 'gf-ui') // gf-ui
Type.json('', []) // []
Type.json('', {}) // {}
Type.json('[{"name":"gf-ui"}]', []) // [{ "name": "gf-ui" }]
```