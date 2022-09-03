import { defineStore } from 'pinia'
import { setToken, getToken } from '@/utils/util'
import { useRouter } from '@/hooks'
import { useEvents } from '@/hooks'
import { SIGNIN_SUCCESS, SIGN_OUT } from '@/config'
const { routerPush } = useRouter()
const { $emit } = useEvents()
import type { StoreUser } from '../types/user'

export const useUserStore = defineStore('userStore', {
  state: (): StoreUser => {
    return {
      isSignin: false,
      isUserGesture: false, // 是否用户手势执行退登
      info: {},
    }
  },
  getters: {
    userInfo: (state) => state.info,
  },
  actions: {
    async signin(token: string) {
      try {
        setToken(token)
        const userInfo = {}
        this.$patch((state) => {
          state.info = userInfo
          state.isSignin = true
          this.signinSuccess()
          routerPush('recent')
          console.log('登入', token, userInfo, this.userInfo)
        })
      } catch (e) {
        setToken('')
        console.error('登陆异常')
        // 重置token和显示异常信息
        setTimeout(() => {
          location.href = window.location.origin
        }, 1000)
      }
    },
    async signOut(isUserGesture = false, isLogoutApi = true) {
      try {
        const token = getToken()
      } catch (e) {
        console.log('登出失败')
      } finally {
        this.resetUserInfo(isUserGesture)
      }
    },
    // 自定义设置
    setUserStore(key: string, val: unknown) {
      this.$patch((state) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, prettier/prettier
        ;(state[key as keyof typeof state] as any) = val
      })
    },
    // 重置用户信息
    resetUserInfo(isUserGesture: boolean) {
      setToken('')
      this.$patch((state) => {
        $emit(SIGN_OUT, state.info)
        state.info = {}
        state.isSignin = false
        state.isUserGesture = isUserGesture
        // 重置路由表
        routerPush('login')
      })
    },
    // 通知派发用户在线
    signinSuccess() {
      const { info } = this
      // 根据用户角色添加对应路由
      $emit(SIGNIN_SUCCESS, info)
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'storeUser',
        storage: localStorage,
      },
    ],
  },
})
