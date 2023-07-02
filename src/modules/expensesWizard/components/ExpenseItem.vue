<template>
  <div>{{ expenseData.description }} - {{ expenseData.amount }}</div>
</template>

<script setup lang="ts">
import type { Expense } from '@/stores/expenses'
import { PropType } from 'vue'

defineProps({
  expenseData: {
    type: Object as PropType<Expense>,
    required: true,
  },
})
</script>

<style scoped lang="scss"></style>
