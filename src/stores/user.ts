import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => {
    return {
      userHasNoExpenses: true,
      expensesWizardWasSkipped: false,
    }
  },
  getters: {},
  actions: {},
  // persist: true,
})
