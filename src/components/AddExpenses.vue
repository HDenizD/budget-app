<template>
  <el-space class="add-expense" direction="vertical" fill>
    <el-input
      v-model="expense.description"
      size="large"
      placeholder="For what?"
    />
    <el-input
      v-model="expense.amount"
      size="large"
      type="number"
      placeholder="How much?"
    />
    <el-button class="w-100" type="primary" size="large" @click="addExpense">
      Add Expense
    </el-button>
  </el-space>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Expense } from '@/stores/budgetStore'
import { useBudgetStore } from '@/stores/budgetStore'
import { v4 as uuidv4 } from 'uuid'

const budgetStore = useBudgetStore()

const expense = ref<Expense>({
  description: '',
  amount: null,
  id: '',
})

const isDescriptionAndAmountNotSet = computed(() => {
  return expense.value.description === '' && expense.value.amount === null
})

function addExpense() {
  if (isDescriptionAndAmountNotSet.value) return
  expense.value.id = uuidv4()
  budgetStore.addExpense(expense.value)
  expense.value = {
    description: '',
    amount: null,
    id: '',
  }
}
</script>

<style lang="scss" scoped>
.add-expense {
  display: flex;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
}
</style>
