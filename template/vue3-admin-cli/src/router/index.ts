import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/demo/index.vue'),
    },
  ],
});

export default router;
