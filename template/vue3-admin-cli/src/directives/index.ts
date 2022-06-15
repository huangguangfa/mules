import clickOutsside from './global/click-outside'
import type { App, ObjectDirective } from 'vue'
import { exception } from '@/utils/util'
export function initGlobalDirectives(app: App) {
  try {
    const directiveList: { [Key: string]: ObjectDirective } = {
      'click-outsside': clickOutsside, // v-click-outsside 点击节点外区域
    }
    Object.keys(directiveList).forEach((key: string) => {
      app.directive(key, directiveList[key])
    })
  } catch (e) {
    exception('全局指令注册失败', e)
  }
}
