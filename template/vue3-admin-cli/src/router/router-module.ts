import type { ModuleRouters, RouteRecordRawList } from './types'
const pcRouter = import.meta.globEager('./pc/*.ts')
const mobileRouter = import.meta.globEager('./mobile/*.ts')
const commonRouter = import.meta.globEager('./common/*.ts')
import { exception } from '@/utils/util'

export function routerModuleList(): RouteRecordRawList {
  const _getRouterModule = (moduleRouters: ModuleRouters) => {
    return Object.keys(moduleRouters).reduce((r: RouteRecordRawList, cur: string) => {
      const moduleRouter = moduleRouters[cur].default
      moduleRouter && r.push(...moduleRouter)
      if (!moduleRouter) {
        exception(`${cur}路由配置错误`)
      }
      return r
    }, [])
  }
  return _getRouterModule({
    ...pcRouter,
    ...mobileRouter,
    ...commonRouter,
  })
}
