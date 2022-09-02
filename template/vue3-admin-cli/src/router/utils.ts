import type { ModuleRouters, RouteRecordRawList } from './types'

export function getRouterModuleList(moduleMap: ModuleRouters): RouteRecordRawList {
  const _getRouterModule = (moduleRouters: ModuleRouters) => {
    return Object.keys(moduleRouters).reduce((res: RouteRecordRawList, cur: string) => {
      const moduleRouter = moduleRouters[cur].default
      moduleRouter && res.push(...moduleRouter)
      if (!moduleRouter) {
        console.log(`%c${cur}路由配置错误`, 'color:red')
      }
      return res
    }, [])
  }
  return _getRouterModule(moduleMap)
}
