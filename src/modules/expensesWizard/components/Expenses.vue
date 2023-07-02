<template>
  <step-card>
    <!-- <template #title>Expenses</template> -->
    <template #content>
      <div>
        <add-expense />
        <expense-item
          v-for="expense in expensesStore.expenses"
          :key="expense.uuid"
          :expenseData="expense"
        />
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-between">
        <p-button
          class="p-button-secondary"
          label="Prev Step"
          @click="$emit('prev-step')"
        />
        <p-button
          class="p-button-success"
          label="Next Step"
          @click="$emit('next-step')"
        />
      </div>
    </template>
  </step-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useExpenses } from '@/stores/expenses'
import AddExpense from './AddExpense.vue'
import ExpenseItem from './ExpenseItem.vue'
import StepCard from './StepCard.vue'

const expensesStore = useExpenses()
</script>

<style scoped lang="scss"></style>
