import { createApp } from 'vue'
import App from './views/app.vue'
import router from './router'
import { createPinia } from 'pinia'

// store持久化
import PiniaPluginPersist from 'pinia-plugin-persist'
import { registerStore } from '@/stores'
import { initGlobalMethods } from '@/plugins/index'

function bootstrap() {
  const app = createApp(App)
  app.use(createPinia().use(PiniaPluginPersist))
  // 注册  pinia状态管理库
  registerStore()
  initGlobalMethods(app)
  app.use(router).mount('#app')
}
bootstrap()
