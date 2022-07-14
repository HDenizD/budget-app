import { defineStore } from 'pinia'

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
