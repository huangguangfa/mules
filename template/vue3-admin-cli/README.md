# vue3-cli

> 使用的 vue3+TS 技术栈构建的 cli、整体围绕着 pc 和移动`同仓库同项目`设计和维护、快速开始

### vscode插件安装
```
Volar（推荐安装）
Vetur（禁用）
ESLint（推荐安装）
Prettier （推荐安装）
```

### 运行

```js
// 依赖安装
yarn install
// 切换到指定分支
git checkout xxx
// 运行
yarn dev
// 或者 指定运行某个环境
yarn uat // uat
yarn stg // stg
```

### 技术栈

- `Vue3 + vite` : 相比 vue2 底层优化的好，性能更优, TS 支持更友好！
- `Vant 和 Element-plus ( pc和移动 )` : 快速迭代
- `Pinia`：vue3 的状态管理新库、官方主推，由 vuex 原班人马打造，更适合 vue3 的使用方式和原生 ts 支持较好
- `Router`：官方
- `Ts`：主流、提高代码可维护性和健壮性
- `Eslint`：统一团队代码风格
- `Prettierrc`：配合 eslint 做格式化代码
- `Babel`：做低版本语法转换
- `husky`：自定义规则+选项式提交代码、解决指令式提交容易出错问题
- `Scss || Less`：css 预处理器
- `Vitest`：官方自带单元测试-相比 jest 快还支持 watch 模式、包括一些配置文件的同步、使得我们并不需要维护多份配置

### 项目结构

```
└── ky-docs
    ├── .vscode
    ├── build 运行和打包的配置
    │    ├── vite
    |    |    |──plugin vite插件
    |    |    |──proxy 请求代理配置
    ├── mock
    ├── public
    ├── src
    ├    ├── assets
    ├    ├── components
    |    |    |── global   全局组件存放位置
    |    |    |      |── error
    |    |    |      |── .....
    |    |    |── xxx/xxx  公共组件存放位置
    |    |    |── index.ts 全局组件注册方法
    ├    ├── config     一些全局配置存放位置
    ├    ├── directives
    |    |    |── global   全局指令存放位置
    |    |    |    |── click-outside
    |    |    |    |── ....
    |    |    |── xxx/xxx   公共指令模块
    |    |    |── index.ts 全局指令注册方法
    ├    ├── filters 过滤器
    ├    ├── hooks   全局hooks
    |    |    |── useEvents.ts
    |    |    |── useRouter.ts
    |    |    |── useCrypto.ts
    |    |    |──.......
    ├    ├── libs    一些不太会变动的模块或者库
    |    |    |── crypto    加密模块
    |    |    |── event-bus 全局事件
    |    |    |── network   网络
    ├    ├── plugins  插件系统、主要用于往项目初始化和存放插件内容
    |    |    |── index.ts 插件系统入口、参考了vue2源码injection 初始化
    ├    ├── router  路由模块、按pc和移动还有公共路由进行拆分
    |    |    |── common    存放一些全局公共路由
    |    |    |── mobile            移动端路由
    |    |    |── pc                移动端路由
    |    |    |── index.ts          路由入口文件
    |    |    |── router-module.ts  聚合路由模块路由
    |    |    |── types.ts          类型
    ├    ├── stores     全局状态
    |    |    |── pc
    |    |    |── mobile
    |    |    |── share
    ├    ├── styles     样式模块
    ├    ├── types  全局的一些类型存放地址
    ├    ├── utils  工具类
    ├    ├── views  页面模块
    |    |    |── pc
    |    |    |── mobile
    |    |    |── app.vue
    ├    ├── main.ts
    ├── .env.dev  dev环境配置文件
    ├── .env.stg  stg环境配置文件
    ├── .env.uat  uat环境配置文件
    ├── .eslintrc.cjs
    ├── vite.config.ts

```

### 请求模块

#### `基础使用`

```js
import useHttpRequest from '@/hooks/useHttpRequest'
const { $get, $post, $all, $patch, $cancel, $del, $put } = useHttpRequest()

// get
$get('/xxxx', {
  name: '111',
}).then((res) => {
  console.log('data', res)
})

// post
const params = {
  page: 1,
  size: 100,
}
$post('/xxx/xxx', params).then((res) => {
  console.log('结果', res)
})

// .... 不同请求类型根据实际场景使用
```

#### `修改请求参数类型`

```js
import useHttpRequest from '@/hooks/useHttpRequest'
const { $post } = useHttpRequest()
import { CONTENT_TYPE } from '@/config'

// 请求参数类型 (注意只需要改变Content类型，内部自动进行对应类型的数据组装)
const reqConfig = {
  headers: {
    'Content-Type': CONTENT_TYPE.form,
  },
}
$post('/xxx/xxx', params, reqConfig).then((res) => {
  console.log('结果', res)
})
```

#### `自定义请求url`

> 默认请求 base 是/router/rest、可能我们有时候需要变更其他请求的服务器地址

```js
$get(
  '/info',
  {},
  {
    base: 'http://www.baidu.com', // 添加一个重置的base
  }
).then((res) => {
  console.log('结果', res)
})
```

#### `请求取消`

```js
import useHttpRequest from '@/hooks/useHttpRequest'
const { $post, $cancel } = useHttpRequest()
const params = { page: 1, size: 100 }
const reqConfig = { cancel: true }
$post('/xxx', params, reqConfig)
  .then((res) => {
    console.log('结果', res)
  })
  .catch((err) => {
    console.log('err', err)
  })
$cancel('取消请求') // 取消当前时段标记过cancel的所有请求、相比之前h5的方式会简单一点
```

#### `多个并发请求`

```js
import useHttpRequest from '@/hooks/useHttpRequest'
const { $all } = useHttpRequest()

const options = [
  {
    url: '/user/info',
    config: {
      method: 'get',
    },
  },
  {
    url: '/user/list',
    config: {
      method: 'post',
      param: {
        size: 1,
        page: 2,
      },
    },
  },
]
$all(options).then((res) => {
  console.log('结果', res)
})
```

### git 提交

> 在执行 commit 前框架会自动执行 `yarn lint` 去修复整个项目团队规范的约定配置、也存在代码存在错误而导致 commit 不成功、所以在我们 commit 后看终端是否有报错信息，需要我们手动去修改、script 脚本里面配置了 `选项式commit`、在我们`git add`后执行 `yarn commit`、将会进入选项式提交、这样可以规避我们手动提交 commit 规范时候的报错

### eventBus 的使用

```js
// A.vue
import useEvents from '@/hooks/useEvents'
const { $emit } = useEvents()
$emit('message', { data: { content: '内容111' } })

// B.vue
import useEvents from '@/hooks/useEvents'
const { $on } = useEvents()

$on('message', (res) => {
  console.log('data', res)
})
```
