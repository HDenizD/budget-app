<template>
  <div class="add-expense w-25">
    <el-space wrap fill alignment="start" size="small">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Expense } from '@/stores/budgetStore'

const expense = ref<Expense>({
  description: '',
  amount: 0,
})
</script>

<style lang="scss" scoped>
.add-expense {
  flex-wrap: nowrap;
}
</style>
