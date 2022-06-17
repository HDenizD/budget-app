<template>
  <div>
    <el-card
      v-for="(item, index) in budgetStore.expenses"
      :key="index"
      class="box-card"
    >
      <div class="flex items-center justify-between">
        <div class="text item">{{ item.description }}: {{ item.amount }}</div>
        <div>
          <el-button type="yellow" size="large" :icon="Edit" ></el-button>
          <el-button
            type="danger"
            size="large"
            :icon="Delete"
          ></el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBudgetStore } from '@/stores/budgetStore'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const budgetStore = useBudgetStore()
</script>

<style lang="scss" scoped></style>
