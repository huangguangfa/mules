import router from '@/router'
import { isPrimitiveObject } from '@/utils/type'
import { throwError } from '@/utils/util'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { Ref } from 'vue'
export function useRouter() {
  const route: Ref<RouteLocationNormalizedLoaded> = router.currentRoute
  const queryParams = (params?: object) => {
    let data = {}
    if (isPrimitiveObject(params)) {
      data = {
        params: JSON.stringify(params),
      }
    }
    return data
  }

  const getQueryParam = () => {
    if (route.value?.query.params) {
      return JSON.parse(route.value.query.params as string)
    }
  }

  const routerPush = (name: string, params?: object) => {
    try {
      router.push({
        name,
        query: queryParams(params),
      })
    } catch (e) {
      throwError('页面跳转失败！！', e)
    }
  }

  const routerReplace = (name: string, params?: object) => {
    router.replace({
      name,
      query: queryParams(params),
    })
  }

  const routerBack = () => {
    router.go(-1)
  }

  return {
    route: route.value,
    getQueryParam,
    routerPush,
    routerReplace,
    routerBack,
  }
}
