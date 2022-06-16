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
    <el-button class="w-100" type="primary" size="large">
      Add Expense
    </el-button>
  </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Expense } from '@/stores/budgetStore'

const expense = ref<Expense>({
  description: '',
  amount: null,
})
</script>

<style lang="scss" scoped>
.add-expense {
  max-width: 300px;
  width: 100%;
}
</style>
