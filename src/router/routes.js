
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path:'/home1',
    component: () => import('pages/home1.vue'),
    children: [
      { path: '', component: () => import('components/carousel.vue') }
    ]
  },
  {
    path:'/home2',
    component: () => import('pages/home2.vue'),
    
  },
  {
    path:'/carousel',
    component: () => import('components/carousel.vue'),
    
  },
  {
    path:'/card1',
    component: () => import('components/card1.vue'),
    
  },
  {
    path:'/card2',
    component: () => import('components/card2.vue'),
    
  },
  {
    path:'/search',
    component: () => import('components/search.vue'),
    
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
