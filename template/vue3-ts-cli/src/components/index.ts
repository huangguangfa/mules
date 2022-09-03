import type { App, Component } from 'vue'
import { throwError } from '@/utils/util'

export function initGlobalComponent(app: App) {
  try {
    const componentsList: Array<{
      name: string
      component: Component
    }> = []
    for (let i = 0, len = componentsList.length; i < len; i++) {
      const { name, component } = componentsList[i]
      app.component(name, component)
    }
  } catch (e) {
    throwError('全局组件注册失败', e)
  }
}
