import Login from '@/modules/auth/pages/Login.vue'
import PasswordForgot from '@/modules/auth/pages/PasswordForgot.vue'
import Register from '@/modules/auth/pages/Register.vue'
import { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: { requiresAuth: false },
    components: { auth: Login },
  },
  {
    path: '/forgot-password',
    meta: { requiresAuth: false },
    components: { auth: PasswordForgot },
  },
  {
    path: '/register',
    meta: { requiresAuth: false },
    components: { auth: Register },
  },
]
