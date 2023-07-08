import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export type Expense = {
  description: string
  amount: number | null
  uuid?: string
  userId?: string
}

export const useExpenses = defineStore('expenses', {
  state: () => {
    return {
      expenses: [] as Expense[],
    }
  },
  getters: {
    allExpensesByUserId: (state) => (userId: string) => {
      return state.expenses.filter((expense) => expense.userId === userId)
    },
    // getAllExpenses: (state) => {
    //   return state.expenses
    // },
  },
  actions: {
    addExpense(expense: Expense) {
      this.expenses.push({
        description: expense.description,
        amount: expense.amount,
        uuid: uuidv4(),
      })
    },
  },
  // persist: true,
})
