export default [
  {
    path: '/pc/index',
    name: 'pc',
    component: () => import('@/views/pc/home/index.vue'),
    meta: { title: 'pc首页测试' },
  },
]
