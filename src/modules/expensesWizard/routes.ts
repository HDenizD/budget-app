import ExpensesWizard from '@/pages/ExpensesWizard.vue'
import Step1 from '@/modules/expensesWizard/components/Step1.vue'
import Step2 from '@/modules/expensesWizard/components/Step2.vue'
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
        path: 'step1',
        meta: { requiresAuth: true },
        component: Step1,
      },
      {
        path: 'step2',
        meta: { requiresAuth: true },
        component: Step2,
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
