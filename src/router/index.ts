import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuth } from '@/stores'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuth()
  if (authStore.isLoggedIn && to.path === '/') {
    next('/dashboard')
    return
  }
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  if (!authStore.isLoggedIn && to.path !== '/') {
    next('/')
    return
  } else {
    next()
    return
  }
})
