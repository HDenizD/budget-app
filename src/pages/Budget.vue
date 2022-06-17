<template>
  <add-expenses />
  <el-divider />
  <display-expenses />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddExpenses from '@/components/AddExpenses.vue'
import DisplayExpenses from '@/components/DisplayExpenses.vue'

const budgetData = ref({
  salary: 0,
  expenses: 0,
  income: 0,
  balance: 0,
})

const expenses = ref([])
</script>

<style lang="scss" scoped></style>
