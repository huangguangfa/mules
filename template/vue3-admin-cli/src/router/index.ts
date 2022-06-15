import { createRouter, createWebHistory } from 'vue-router'
import { routerModuleList } from './router-module'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../components/demo/index.vue'),
    },
    ...routerModuleList(),
  ],
})

export default router
