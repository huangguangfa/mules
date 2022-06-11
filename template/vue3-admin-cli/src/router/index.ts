import { createRouter, createWebHistory } from 'vue-router';
import { routerModuleList } from "./router-module"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routerModuleList()
  ],
});

export default router;
