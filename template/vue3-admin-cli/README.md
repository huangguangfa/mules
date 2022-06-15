# ky-docs
> 当前是跨声文档项目、使用的vue3+TS技术栈构建的cli、整体围绕着 pc和移动`同仓库同项目`设计和维护、快速开始

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
- `Vue3 + vite` : 相比vue2底层优化的好，性能更优, TS支持更友好！
- `Vant 和 Element-plus ( pc和移动 )` : 快速迭代
- `Pinia`：vue3的状态管理新库、官方主推，由vuex原班人马打造，更适合vue3的使用方式和原生ts支持较好
- `Router`：官方
- `Ts`：主流、提高代码可维护性和健壮性
- `Eslint`：统一团队代码风格
- `Prettierrc`：配合eslint做格式化代码
- `Babel`：做低版本语法转换
- `husky`：自定义规则+选项式提交代码、解决指令式提交容易出错问题
- `Scss || Less`：css预处理器
- `Vitest`：官方自带单元测试-相比jest快还支持watch模式、包括一些配置文件的同步、使得我们并不需要维护多份配置

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
import useHttpRequest from "@/hooks/useHttpRequest"
const { $get, $post, $all, $patch, $cancel, $del, $put } = useHttpRequest()

// get
$get('/xxxx', {
    name: "111"
}).then(res => {
    console.log('data', res)
})

// post
const params = {
    page: 1,
    size: 100
}
$post('/xxx/xxx', params).then(res => {
    console.log('结果', res)
})

// .... 不同请求类型根据实际场景使用
```

#### `修改请求参数类型`
```js
import useHttpRequest from "@/hooks/useHttpRequest"
const { $post } = useHttpRequest()
import { CONTENT_TYPE } from "@/config"

// 请求参数类型 (注意只需要改变Content类型，内部自动进行对应类型的数据组装)
const reqConfig = {
    headers: {
        "Content-Type": CONTENT_TYPE.form 
    }
}
$post('/xxx/xxx', params, reqConfig).then(res => {
    console.log('结果', res)
})
```


#### `请求取消`
```js
import useHttpRequest from "@/hooks/useHttpRequest"
const { $post, $cancel } = useHttpRequest()
const params = { page: 1, size: 100 }
const reqConfig = { cancel:true }
$post('/xxx', params, reqConfig).then(res => {
    console.log('结果', res)
}).catch(err => {
    console.log('err', err)
})
$cancel('取消请求') // 取消当前时段标记过cancel的所有请求、相比之前h5的方式会简单一点
```

#### `多个并发请求`
```js
import useHttpRequest from "@/hooks/useHttpRequest"
const { $all } = useHttpRequest()

const options = [
    {
        url: '/user/info',
        config: {
            method: "get",
        }
    },
    {
        url: '/user/list',
        config: {
            method: "post",
            param: {
                size: 1,
                page: 2
            }
        }
    }
]
$all(options).then(res => {
    console.log('结果', res)
})
```


<!-- // https://github.com/michael-ciniawsky/postcss-load-config
{
  "printWidth": 200, //行宽
  "semi": false, //分号
  "singleQuote": true, // 使用单引号
  "useTabs": false, //使用 tab 缩进
  "tabWidth": 4, //缩进
  "trailingComma": "es5", //后置逗号，多行对象、数组在最后一行增加逗号
  "arrowParens": "avoid", //箭头函数只有一个参数的时候可以忽略括号
  "bracketSpacing": true, //括号内部不要出现空格
  "proseWrap": "preserve", //换行方式 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "parser": "babylon", //格式化的解析器，默认是babylon
  "endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
  "jsxBracketSameLine": false, //在jsx中把'>' 是否单独放一行
  "stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
  "eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  "tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
  "disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  "htmlWhitespaceSensitivity": "ignore",
  "ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  "requireConfig": false, // Require a 'prettierconfig' to format prettier
} -->
