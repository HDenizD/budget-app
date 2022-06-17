import { defineStore } from 'pinia'

type BudgetState = {
  expenses: Expense[];
}

export type Expense = {
  description: string;
  amount: number | null;
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
    }
  }
})