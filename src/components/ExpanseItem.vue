<template>
  <el-card class="box-card">
    <div class="flex items-center justify-between">
      <div class="text item">
        {{ expense.description }}: {{ expense.amount }}
      </div>
      <div>
        <el-button type="yellow" size="large" :icon="Edit"></el-button>
        <el-button type="danger" size="large" :icon="Delete"></el-button>
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
import { PropType } from 'vue'
import type { Expense } from '@/stores/budgetStore'

defineProps({
  expense: {
    type: Object as PropType<Expense>,
    default: () => {
      return {
        description: 'UNKNOWN',
        amount: 0,
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
