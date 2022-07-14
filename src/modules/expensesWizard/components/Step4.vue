<template>
  <step-card>
    <template #title>Step4</template>
    <template #content>content</template>
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
import StepCard from './StepCard.vue'
</script>

<style scoped lang="scss"></style>
