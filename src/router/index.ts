import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/not-found.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path.startsWith('/main') && !localCache.getCache('token')) {
    return '/login'
  }

  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
