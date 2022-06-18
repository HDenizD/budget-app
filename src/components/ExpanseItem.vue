<template>
  <el-card
    v-for="(item, index) in expenses"
    :key="index"
    class="box-card"
  >
    <div class="flex items-center justify-between">
      <div class="text item">{{ item.description }}: {{ item.amount }}</div>
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
  expenses: {
    type: Array as PropType<Expense[]>,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped></style>
