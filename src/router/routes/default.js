export default [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'estadisticas', name: 'estadisticas', component: () => import('pages/Estadisticas.vue') }
    ]
  },
  { path: '*', component: () => import('pages/Error404.vue') }
]
