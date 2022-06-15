import type { App, Component } from 'vue'
import { exception } from '@/utils/util'
type ComponentsList = Array<{
  name: string
  component: Component
}>
export function initGlobalComponent(app: App) {
  try {
    const componentsList: ComponentsList = []
    for (let i = 0, len = componentsList.length; i < len; i++) {
      const { name, component } = componentsList[i]
      app.component(name, component)
    }
  } catch (e) {
    exception('全局组件注册失败', e)
  }
}
