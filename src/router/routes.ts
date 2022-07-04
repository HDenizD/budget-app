import { RouteRecordRaw } from 'vue-router'
import Main from '../pages/Main.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import Imprint from '@/pages/Imprint.vue'
import { authRoutes } from './../modules/auth/routes'

export const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    meta: { requiresAuth: true },
    component: Main,
  },
  {
    path: '/statistics',
    meta: { requiresAuth: true },
    component: Main,
  },
  {
    path: '/settings',
    meta: { requiresAuth: true },
    component: Main,
  },
  {
    path: '/privacy-policy',
    meta: { requiresAuth: false },
    components: {
      default: PrivacyPolicy,
      auth: PrivacyPolicy,
    },
  },
  {
    path: '/imprint',
    meta: { requiresAuth: false },
    components: {
      default: Imprint,
      auth: Imprint,
    },
  },
]

routes.push(...authRoutes)
