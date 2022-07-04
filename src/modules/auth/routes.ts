import Login from '@/modules/auth/pages/Login.vue'
import PasswordForgot from '@/modules/auth/pages/PasswordForgot.vue'
import Register from '@/modules/auth/pages/Register.vue'
import { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: { auth: Login },
  },
  {
    path: '/forgot-password',
    component: { auth: PasswordForgot },
  },
  { path: '/register', component: { auth: Register } },
]
