import { createApp } from 'vue'
import App from './views/app.vue'
import router from './router'
import piniaStore from '@/stores'
import { initGlobalMethods } from '@/plugins/index'

function bootstrap() {
  const app = createApp(App)
  app.use(router).use(piniaStore).mount('#app')
  initGlobalMethods(app)
}

bootstrap()
