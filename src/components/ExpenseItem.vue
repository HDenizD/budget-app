<template>
  <el-card class="box-card">
    <div class="flex items-center justify-between">
      <div class="text item">
        {{ expense.description }}: {{ expense.amount }}
      </div>
      <div>
        <el-button
          type="warning"
          size="large"
          :icon="Edit"
          @click="isEditMode = true"
        ></el-button>
        <el-button
          type="danger"
          size="large"
          :icon="Delete"
          @click="budgetStore.deleteExpense(expense.id)"
        ></el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { PropType, ref } from 'vue'
import type { Expense } from '@/stores/budgetStore'
import { useBudgetStore } from '@/stores/budgetStore'

defineProps({
  expense: {
    type: Object as PropType<Expense>,
    default: () => {
      return {
        description: 'UNKNOWN',
        amount: 0,
        id: 'noUUID',
      }
    },
  },
})

const budgetStore = useBudgetStore()
const isEditMode = ref(false)
</script>

<style lang="scss" scoped></style>
