import { defineStore } from 'pinia'

type BudgetState = {
  expenses: Expense[];
}

export type Expense = {
  description: string;
  amount: number | null;
  id: string;
}


export const useBudgetStore = defineStore('budget', {
  state: () => {
    return {
      expenses: [] as Expense[],
    } as BudgetState
  },
  getters: {},
  actions: {
    addExpense(payload: Expense) {
      this.expenses.push(payload)
    },
    updateExpense(payload: Expense) {

    },
    deleteExpense(expenseId: string) {
      const index = this.expenses.findIndex(expense => expense.id === expenseId)
      this.expenses.splice(index, 1)
    }
  }
})