<template>
  <p-tab-menu :activeIndex="activeIndex" :model="tabs" class="p-tabmenu" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
const tabs = ref([
  {
    label: 'Step1',
  },
  {
    label: 'Step2',
  },
  {
    label: 'Step3',
  },
  {
    label: 'Step4',
  },
])
</script>

<style scoped></style>
