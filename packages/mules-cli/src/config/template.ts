import { zipUrl } from './baseUrl'
/**
 * 模板配置信息
 * @param { string } name 展示模板名称
 * @param { string } repositories 仓库存放名称
 * @param { string } type 仓库类型：zip | url
 * @param { string } desc 模板描述
 * @param { string } author 模板维护者
 */

export interface TemplateInfo {
  name: string
  type: string
  repositories: string
  desc: string
  author: string
}

export default [
  {
    name: 'vue3-ts',
    type: 'zip',
    repositories: zipUrl + 'vue3-ts.zip',
    desc: '企业级应用框架,基于vue3+TS',
    author: 'gf',
  },
  {
    name: 'ts-libs',
    type: 'zip',
    repositories: zipUrl + 'ts-libs.zip',
    desc: '快速创建ts构建libs模块',
    author: 'gf',
  },
  {
    name: 'sten-design',
    type: 'zip',
    repositories: zipUrl + 'sten-design.zip',
    desc: '企业级跨框架UI框架,基于Stencil+TS+Lerna',
    author: 'gf',
  },
  {
    name: 'vitePress',
    type: 'zip',
    repositories: zipUrl + 'vitePress.zip',
    desc: '文档cli、基于vitePress+TS, 开箱即用',
    author: 'gf',
  },
]
