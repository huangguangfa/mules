import { useUserStore } from './modules/user'

export interface AppStore {
  useUserStore: ReturnType<typeof useUserStore>
}

const appStore: AppStore = {} as AppStore

// 注册 状态库
export const registerStore = () => {
  appStore.useUserStore = useUserStore()
}

export default appStore
