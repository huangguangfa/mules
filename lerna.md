 lerna version -m "feat(组件): lerna publish"

 ### 常见错误
 > Current HEAD is already released
```js
lerna publish from-package

```
> You must sign up for private packages
```js
// package.json 增加配置
  "publishConfig": {
    "access": "public"
  }
```

