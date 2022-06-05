import Dashboard from '@/pages/Dashboard.vue';
import User from '@/pages/User.vue';
export const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]