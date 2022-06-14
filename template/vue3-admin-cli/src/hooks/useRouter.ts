import router from "@/router";
import { isPrimitiveObject } from "@/utils/type";

const userRouterExample = function () {
    const route: any = router.currentRoute;
    const queryParams = (params?: object) => {
        let data = {}
        if (isPrimitiveObject(params)) {
            data = {
                params: JSON.stringify(params)
            }
        }
        return data;
    }

    const getQueryParam = () => {
        if (route.value?.query.params) {
            return JSON.parse(route.value.query.params)
        }
    }

    const routerPush = (name: string, params?: object) => {
        router.push({
            name,
            query: queryParams(params)
        })
    }

    const routerReplace = (name: string, params?: object) => {
        router.replace({
            name,
            query: queryParams(params)
        })
    }

    const routerBack = () => {
        router.go(-1)
    }

    return {
        getQueryParam,
        routerPush,
        routerReplace,
        routerBack
    }
}

export default userRouterExample;