import { initGlobalComponent } from '@/components/index'
import { initGlobalDirectives } from '@/directives/index'
import platformCheck from './platform-check'
import { startLocaDevConfig } from './local-serve/dev'
import { initGlobalData } from './global/emit'
import { initInjection } from './global/injection'
import '@/router/router-interceptors'
import type { App } from 'vue'
export function initGlobalMethods(app: App) {
  // 项目监测
  platformCheck()
  // 初始化全局组件
  initGlobalComponent(app)
  // 初始化全局指令
  initGlobalDirectives(app)
  // 本地开发配置
  startLocaDevConfig()
  // 全局信息监测注入
  initInjection()
  // 全局信息派发
  initGlobalData()
}
