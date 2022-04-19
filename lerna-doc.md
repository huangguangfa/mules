# gf-ui
基于lerna的多库管理
分离一个大型的codebase到多个小的孤立或者公共的repo
可以统一管理版本号，一键发布,自动生成changelog(lerna publish)
一键安装依赖，包括link(lerna bootstrap)


### lerna
 > lerna 对多包模块化的管理、版本、和依赖的统一抽离管理

 - lerna create xxx 创建一个模块
 - lerna add xxxx  为全部packages下安装模块
 - lerna add xxx --scope @gf-ui/demo  只为demo模块安装指定模块
 - lerna add xxx --exact --scope @gf-ui/demo  只为demo模块安装指定 版本 添加包。模块
 - lerna bootstrap --hoist 把模块的依赖全部安装到根目录统一管理
 - lerna publish 发布npm包
 - lerna publish from-git 发布包失败需要重新发的话、需要删除packge的变动文件然后执行 
 - lerna exec yarn remove rollup --scope @gf-ui/core  在某个包下面执行指令
 - lerna exec -- rm -rf node_modules/ 删除所有的packages下的所有node_modules
 - lerna run start --scoped @gf-ui/core 执行这个包下的start脚本命令
 - lerna link 链接依赖
 - lerna clean 清除依赖
 - lerna changed 查看变动的包
 - lerna list 查看全部包

### lerna --independent
 - lerna --independent(独立模式)：分为每个包版本自己管理自己的版本、lerna是依据包内容的commit后的变化而决定要不要发布这个包的版本
```js
  // 将lerna.json中的version键设为independent来启用独立模式，然后需要配置ignoreChanges、指定哪些文件变化不需要去监听版本发布
  "publish": { // 发布时配置
    "allowBranch": "master", // 只在master分支执行publish
    "conventionalCommits": true, // 生成changelog文件
    "exact": true, // 准确的依赖项
    "ignoreChanges": ["ignored-file", "*.md"], // 发布时忽略更改的文件
    "message": "chore(release): publish" // 发布时的自定义提示消息
  }
```

 # lerna.json
 ``` json
 {
  "npmClient": "yarn", // 执行命令所用的客户端，默认为npm —— 配置后会强制使用最佳实践：能用yarn的用yarn——如lerna bootstap --hoist不再可用
  "command": { // 命令相关配置
    "publish": { // 发布时配置
      "allowBranch": "master", // 只在master分支执行publish
      "conventionalCommits": true, // 生成changelog文件
      "exact": true, // 准确的依赖项
      "ignoreChanges": ["ignored-file", "*.md"], // 发布时忽略更改的文件
      "message": "chore(release): publish" // 发布时的自定义提示消息
    },
    "bootstrap": { // 安装依赖配置
      "ignore": "component-*", // 忽略项
      "npmClientArgs": ["--no-package-lock"], // 执行 lerna bootstrap命令时传的参数
      "hoist": true
    },
    "version": {
      "conventionalCommits": true //开启日志：自动生成changLog.md
    }
  },
  "packages": [ // 指定存放包的位置
    "packages/*"
  ],
  "version": "0.0.0" // 当前版本号
}
 ```

 # rollup.watch
 ```js
  //   START        — 监听器正在启动（重启）
  //   BUNDLE_START — 构建单个文件结束
  //   BUNDLE_END   — 完成文件构建
  //   END          — 完成所有文件束构建
  //   ERROR        — 构建时遇到错误
  //   FATAL        — 遇到无可修复的错误
 ```

<!-- lerna publish 选择Patch会更新的子包中的package.json的version更改为指定版本
lerna会自动生成git tag(版本标签)上传github上, 和自动上传npm的版本号(对应更新的子包) -->



 <!-- 若开启了workspace功能，则lerna会将package.json中workspaces中所设置的项目路径作为lerna packages的路径，而不会使用lerna.json中的packages值。 -->
 <!-- lerna publish 永远不会发布 package.json 中 private 设置为 true 的包 -->




 <!-- https://github.com/lerna/lerna/tree/main/commands/version#--message-msg

 lerna 地址http://www.febeacon.com/lerna-docs-zh-cn/routes/basic/concepts.html -->