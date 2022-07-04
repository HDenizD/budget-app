import { RouteRecordRaw } from 'vue-router'
import Main from '../pages/Main.vue'
import { authRoutes } from './../modules/auth/routes'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Main },
  { path: '/statistics', component: Main },
  { path: '/settings', component: Main },
]

routes.push(...authRoutes)
