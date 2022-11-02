import { useEvents } from '@/hooks'
import { SIGNIN_SUCCESS, SIGN_OUT } from '@/config'

const { $on } = useEvents()
export function initInjection() {
  // 登录成功
  $on(SIGNIN_SUCCESS, () => {
    //
  })
  // 退登
  $on(SIGN_OUT, () => {
    //
  })
}
