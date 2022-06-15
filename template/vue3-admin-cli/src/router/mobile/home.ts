export default [
  {
    path: '/mobile/index',
    name: 'mobile',
    component: () => import('@/views/mobile/home/index.vue'),
    meta: { title: '移动端首页测试' },
  },
]
