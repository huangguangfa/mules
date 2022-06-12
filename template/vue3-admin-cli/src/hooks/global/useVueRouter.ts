import router from '@/router'
const useVueRouterExample = function () {
    const route: any = router.currentRoute
    const getQueryParam = () => {
        if (route.value?.query.params) {
            return JSON.parse(route.value.query.params)
        }
    }
    const routerPush = (name: string, params?: object) => {
        let data = {}
        if (params) {
            data = {
                params: JSON.stringify(params)
            }
        } else {
            data = {}
        }
        router.push({
            name: name,
            query: data
        })
    }
    const routerReplace = (name: string, params?: object) => {
        let data = {}
        if (params) {
            data = {
                params: JSON.stringify(params)
            }
        } else {
            data = {}
        }
        router.replace({
            name: name,
            query: data
        })
    }
    const routerBack = () => {
        router.go(-1)
    }
    return {
        routerPush,
        routerReplace,
        routerBack,
        getQueryParam
    }
}

export const useVueRouter = useVueRouterExample
export default useVueRouterExample