# web-components-gf
学习web-components


#### Conventional Commits 规范

可格式化信息，自动产生 changelog；
校验拦截不符合规则的 commit 描述；
根据类型决定当前版本变更的性质；
统一提交信息，有利于代码审查者的阅读。


### Commitizen
>说到了 Conventional Commits 规范，我们要遵循此规范时，可能手动去处理 commit 信息会比较繁琐，并且出错率也很高，比如在我们书写 fix(scope): xxx 时，很容易对于符合的全角还是半角输入法搞混，这样很容易造成信息格式化的失败。那么我们该如何高效稳定的遵循 Conventional Commits 规范呢？Commitizen 应声而来

### cz-customizable
>cz-customizable 作为一个用于自定义 Commitizen 的扩展插件，可以在原生 Commitizen 的标准上，根据配置文件来自定义我们的提交规范。可以说是用来扩展 Commitizen 的神器。一般都用于 Commitizen 的配套使用。

安装
```js
 yarn add commitizen cz-customizable -D
```
>在最外层 package.json 文件中添加脚本命令和配置项，使 commitizen 使用cz-customizable 插件
```js
    {
        "scripts" : {
            "commit": "git cz"
        }
        "config": {
            "commitizen": {
                "path": "cz-customizable"
            }
        }
    }
```
> 根目录新建 .cz-config.js 文件，并加入我们的汉化配置
```js
module.exports = {
    types: [
        { value: "feat", name: "feat 🍄:    新增新的特性" },
        { value: "fix", name: "fix 🐛:    修复 BUG" },
        { value: "docs", name: "docs 📄:    修改文档、注释" },
        { value: "refactor", name: "refactor 🎸:    代码重构，注意和特性、修复区分开" },
        { value: "perf", name: "perf ⚡:    提升性能" },
        { value: "test", name: "test 👀:    添加一个测试" },
        { value: "tool", name: "tool 🚗:    开发工具变动(构建、脚手架工具等)" },
        { value: "style", name: "style ✂:    对代码格式的修改不影响逻辑" },
        { value: "revert", name: "revert 🌝:     版本回滚" },
        { value: "update", name: "update ⬆:    第三方库升级 " }
    ],
    scopes: [{ name: '组件' }, { name: '样式' }, { name: '文档更改' }, { name: '其它变更' }],
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\d{1,5}',
    messages: {
        type: "选择一种你的提交类型:",
        scope: "选择一个scope (可选):", customScope: "Denote the SCOPE of this change:",
        subject: "简要说明:\n",
        body: '详细说明，使用"|"换行(可选)：\n',
        breaking: "非兼容性说明 (可选):\n",
        footer: "关联关闭的issue，例如：#31, #34(可选):\n",
        confirmCommit: "确定提交?"
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['新增', '修复'], 
    subjectLimit: 100
};
```
### commitlint
> commitlint 用来校验检查我们的提交 commit 是否符合conventional commit format。类似于 eslint，commitlint 可以根据我们的配置文件或者默认的选项值来校验我们的 commit 信息，不通过的校验会被直接打回

```js
yarn add husky -D
yarn add commitlint-config-cz @commitlint/cli yorkie -D
```

> 在 package.json 中的 husky hook 中添加每次 commit 信息的校验回调
```js
{
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -e -V",
        }
    }
}
```
> 在根目录构建 commitlint.config.js 文件，进行 commitlint 的配置。
```js
module.exports = {
  extends: ['cz'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)((.*?)):\s?(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  }
};
```

### standard-version
> standard-version 是一款遵循语义化版本（semver）和 commit message 标准规范的版本自动化工具，它还可以使生成 changelog 自动化。并且将我们符合 Conventional Commits 规范的提交信息格式化，并完成以下操作：
    - 根据现在 package.json 文件中的 版本号 version 进行 commit 的整合。并更新 changelog 文件。
    - 提交暂存文件 git add . 。
    - git commit 。
    - 打标签 git tag。

```js
yarn add standard-version -D

// package.json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

> 增加 .versionrc.js 文件来格式化 log ，使我们的 changelog 根据 Conventional Commits 规范更加语义化。
```js
module.exports = {
    "types": [
        { "type": "feat", "section": "✨ Features | 新功能" },
        { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
        { "type": "init", "section": "🎉 Init | 初始化" },
        { "type": "docs", "section": "✏️ Documentation | 文档" },
        { "type": "style", "section": "💄 Styles | 风格" },
        { "type": "refactor", "section": "♻️ Code Refactoring | 代码重构" },
        { "type": "perf", "section": "⚡ Performance Improvements | 性能优化" },
        { "type": "test", "section": "✅ Tests | 测试" },
        { "type": "revert", "section": "⏪ Revert | 回退" },
        { "type": "build", "section": "📦 Build System | 打包构建" },
        { "type": "update", "section": "🚀 update | 构建/工程依赖/工具升级" },
        { "type": "tool", "section": "🚀 tool | 工具升级" },
        { "type": "ci", "section": "👷 Continuous Integration | CI 配置" }
    ]
}
```