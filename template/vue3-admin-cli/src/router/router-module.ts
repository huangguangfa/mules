import type { ModuleRouters, RouteRecordRawList } from "./type"
const Routers = import.meta.globEager("./module/*.ts")
export function routerModuleList(): RouteRecordRawList {
    const _getRouterModule = (moduleRouters: ModuleRouters) => {
        return Object.keys(moduleRouters).reduce((r: RouteRecordRawList, cur: string) => {
            const moduleRouter = moduleRouters[cur].default;
            moduleRouter && r.push(...moduleRouter);
            if (!moduleRouter) {
                console.log(`%c${cur}路由配置错误`, 'color:red')
            }
            return r;
        }, [])
    }

    return _getRouterModule({
        ...Routers
    })
}