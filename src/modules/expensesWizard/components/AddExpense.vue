<template>
  <div class="p-inputgroup m-auto" style="max-width: 600px">
    <p-input-text
      v-model="expense.description"
      placeholder="For what?"
      type="text"
    />
    <p-input-text
      v-model="expense.amount"
      placeholder="How much?"
      type="number"
    />
    <p-button
      label="Add"
      icon-pos="right"
      icon="pi pi-plus"
      @click="addExpense"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useExpenses } from '@/stores'
import type { Expense } from '@/stores/expenses'

const expensesStore = useExpenses()

const expense = ref<Expense>({
  description: '',
  amount: null,
})

function addExpense() {
  if (expense.value.description && expense.value.amount) {
    expensesStore.addExpense(expense.value)
    expense.value.description = ''
    expense.value.amount = null
  }
}
</script>

<style scoped lang="scss"></style>
