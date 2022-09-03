import appStore from '@/stores'
import { throwError } from '@/utils/util'

export const initGlobalData = () => {
  try {
    if (appStore.useUserStore.isSignin) {
      appStore.useUserStore.signinSuccess()
    }
  } catch (e) {
    throwError('全局数据派发失败', e)
  }
}
