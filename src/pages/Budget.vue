<template>
  <add-expenses />
  <el-divider />
  <div>
    <!-- <el-input
      v-model="budgetData.salary"
      size="large"
      type="number"
      placeholder="Salery"
    >
      <template #append>€</template>
    </el-input> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddExpenses from '@/components/AddExpenses.vue'

const budgetData = ref({
  salary: 0,
  expenses: 0,
  income: 0,
  balance: 0,
})

const expenses = ref([])
</script>

<style lang="scss" scoped></style>
