import { defineStore } from 'pinia'
import type { Expense } from './expenses';

export type User = {
  firstname: string;
  lastname: string;
  income: number | null;
  selectedCurrency: '€' | '$';
  expenses: Expense[]
}

export const useUser = defineStore('user', {
  state: () => {
    return {
      userHasNoExpenses: true,
      expensesWizardWasSkipped: false,
      user: {
        firstname: '',
        lastname: '',
        income: null,
        selectedCurrency: '',
      },
    }
  },
  getters: {},
  actions: {},
  // persist: true,
})
