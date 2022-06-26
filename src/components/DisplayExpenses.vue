<template>
  <expense-item
    v-for="(item, index) in budgetStore.expenses"
    :key="index"
    :expense="item"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExpenseItem from '@/components/ExpanseItem.vue'
import { useBudgetStore } from '@/stores/budgetStore'

const budgetStore = useBudgetStore()
</script>

<style lang="scss" scoped></style>
