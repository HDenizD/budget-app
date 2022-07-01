<template>
  <el-config-provider namespace="ep">
    <BaseLayout />
  </el-config-provider>
</template>
<script setup lang="ts">
import BaseLayout from '@/pages/BaseLayout.vue'
import { useAppStore } from './stores/appStore'
import { app, database } from './firebase'
const appStore = useAppStore()

// console.log(app, analytics)
console.log(app)
console.log(database)
</script>
<style>
#app {
  zoom: 1;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
