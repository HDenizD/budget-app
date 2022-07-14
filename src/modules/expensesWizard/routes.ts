import ExpensesWizard from '@/pages/ExpensesWizard.vue'
import AboutYou from '@/modules/expensesWizard/components/AboutYou.vue'
import Expenses from '@/modules/expensesWizard/components/Expenses.vue'
import Step3 from '@/modules/expensesWizard/components/Step3.vue'
import Step4 from '@/modules/expensesWizard/components/Step4.vue'
import { RouteRecordRaw } from 'vue-router'

export const expensesWizardRoutes: RouteRecordRaw[] = [
  {
    path: '/expenses-wizard',
    meta: { requiresAuth: true },
    component: ExpensesWizard,
    children: [
      {
        path: 'about-you',
        meta: { requiresAuth: true },
        component: AboutYou,
      },
      {
        path: 'expenses',
        meta: { requiresAuth: true },
        component: Expenses,
      },
      {
        path: 'step3',
        meta: { requiresAuth: true },
        component: Step3,
      },
      {
        path: 'step4',
        meta: { requiresAuth: true },
        component: Step4,
      },
    ],
  },
]
