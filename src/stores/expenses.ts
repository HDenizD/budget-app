import { defineStore } from 'pinia'

export type Expense = {
  description: string
  amount: number | null
}

export const useExpenses = defineStore('expenses', {
  state: () => {
    return {
      expenses: [] as Expense[],
    }
  },
  getters: {},
  actions: {
    addExpense(expense: Expense) {
      this.expenses.push({
        description: expense.description,
        amount: expense.amount,
      })
    },
  },
})
