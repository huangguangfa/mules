import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'
export function useCurrentInstance() {
  const { appContext, proxy } = getCurrentInstance() as ComponentInternalInstance

  return {
    proxy,
    appContext,
  }
}
