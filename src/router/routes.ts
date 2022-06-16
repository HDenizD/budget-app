import Dashboard from '@/pages/Dashboard.vue';
import User from '@/pages/User.vue';
import Budget from '@/pages/Budget.vue';
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
  },
  {
    path: '/budget',
    name: 'budget',
    component: Budget
  }
]
