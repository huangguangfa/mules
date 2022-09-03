import { createRouter, createWebHistory } from 'vue-router'
import { getRouterModuleList } from './utils'

const modulesRouter = import.meta.globEager('./modules/*.ts')
const commonRouter = import.meta.globEager('./common/*.ts')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index/index.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/components/demo/index.vue'),
    },
    ...getRouterModuleList({
      ...modulesRouter,
      ...commonRouter,
    }),
  ],
})

export default router
