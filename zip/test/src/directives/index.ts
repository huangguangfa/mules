import clickOutsside from './global/click-outside'
import mouseRight from './global/mouse-right'

import type { App, ObjectDirective } from 'vue'
import { throwError } from '@/utils/util'
export function initGlobalDirectives(app: App) {
  try {
    const directiveList: { [Key: string]: ObjectDirective } = {
      'click-outsside': clickOutsside, // v-click-outsside 点击节点外区域
      'mouse-right': mouseRight, // 右键事件
    }
    Object.keys(directiveList).forEach((key: string) => {
      app.directive(key, directiveList[key])
    })
  } catch (e) {
    throwError('全局指令注册失败', e)
  }
}
