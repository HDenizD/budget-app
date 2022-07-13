import { RouteRecordRaw } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import Imprint from '@/pages/Imprint.vue'
import { authRoutes } from './../modules/auth/routes'
import { expensesWizardRoutes } from './../modules/expensesWizard/routes'

export const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    meta: { requiresAuth: true },
    component: Dashboard,
  },
  {
    path: '/statistics',
    meta: { requiresAuth: true },
    component: Dashboard,
  },
  {
    path: '/settings',
    meta: { requiresAuth: true },
    component: Dashboard,
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

routes.push(...authRoutes, ...expensesWizardRoutes)
