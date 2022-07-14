<template>
  <step-card>
    <!-- <template #title>Expenses</template> -->
    <template #content>
      <div class="flex justify-content-center">
        <add-expense />
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-between">
        <p-button
          class="p-button-secondary"
          label="Prev Step"
          @click="$emit('prev-step')"
        />
        <p-button
          class="p-button-success"
          label="Next Step"
          @click="$emit('next-step')"
        />
      </div>
    </template>
  </step-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddExpense from './AddExpense.vue'
import StepCard from './StepCard.vue'
</script>

<style scoped lang="scss"></style>
