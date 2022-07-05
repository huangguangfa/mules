# vue3
- 组件路径获取
    - 可以通过getCurrentInstance() 获取实例下的 type 对象, 对象下有个file属性
- viteConfig.ts 要自定义服务插件、来挂载打开编辑器服务
- 给所有组件$el 绑定事件

# vue2
- 组件路径获取
    - vue3-cli脚手架下默认在组件的$option.__file 
- 自定义打开编辑器服务
    - webpack 可以通过devServer.before 接入自定义服务
    - vite和vue3相同原理
- 给所有组件$el 绑定事件(可以通过全局mixin、挂载)
