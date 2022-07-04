<template>
  <p-card class="mx-auto mt-8 shadow-6" style="max-width: 400px">
    <template #title>
      <div class="flex align-items-center">
        <p-button
          icon="pi pi-arrow-left"
          class="p-button-rounded p-button-text p-button-secondary absolute"
          @click="router.push('/')"
        />
        <span class="mx-auto">Register</span>
      </div>
    </template>
    <template #content> content </template>
    <template #footer> footer </template>
  </p-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss"></style>
