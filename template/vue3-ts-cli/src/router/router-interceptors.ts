/* 全局路由拦截去 */
import router from './index'
import { useTitle } from '@/hooks'
// import appStore from '@/stores'
import type { RouteLocationNormalized } from 'vue-router'

const userStore: any = {}
const loginName = 'login'
let fromNameFlag = ''

function interceptorsRule(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const { name: toName, fullPath: toFullPath } = to
  const { name: fromName } = from
  const isSignin = false
  const rules = [
    {
      // 登录后不允许通过自定义路由返回login
      match: () => toName === loginName && isSignin,
      action: () => fromName || 'recent',
    },
    {
      // 不登录只允许停留在login
      match: () => toName !== loginName && !isSignin,
      action: () => {
        fromNameFlag = toFullPath
        console.log('保存上一个页面地址', fromNameFlag)
        return loginName
      },
    },
    {
      // 重定向到上一个页面
      match: () => fromName === loginName && fromNameFlag,
      action: () => {
        userStore.setUserStore('isUserGesture', false)
        const pathName = fromNameFlag
        fromNameFlag = ''
        return pathName
      },
    },
  ]
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].match()) {
      return rules[i].action()
    }
  }
}

router.beforeEach((to, from, next) => {
  const { meta } = to
  const { title } = meta

  // if (to.name === loginName) {
  //   // 保存身份自动过期后的地址、用于登陆成功重定向
  //   if (!userStore.isUserGesture && from.name !== undefined) {
  //     fromNameFlag = from.fullPath as string
  //   }
  // }
  // 设置导航栏title
  title && useTitle(title as string)

  // 拦截规则
  // const pathName = interceptorsRule(to, from)
  // if (pathName) return next(pathName as string)
  next()
})
