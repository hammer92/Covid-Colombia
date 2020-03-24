export default [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } }
    ]
  },
  { path: '*', component: () => import('pages/Error404.vue') }
]
