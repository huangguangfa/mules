import { initGlobalComponent } from '@/components/index'
import { initGlobalDirectives } from '@/directives/index'
import { checkNetwork } from '@/libs/network/index'
import type { App } from 'vue'
export function initGlobalMethods(app: App) {
  // 初始化全局组件
  initGlobalComponent(app)
  // 初始化全局指令
  initGlobalDirectives(app)
  // 监测网络
  checkNetwork()
}
