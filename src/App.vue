<template>
  <el-config-provider namespace="ep">
    <BaseLayout />
  </el-config-provider>
</template>
<script setup lang="ts">
import BaseLayout from '@/pages/BaseLayout.vue'
import { useAppStore } from './stores/appStore'
const appStore = useAppStore()
</script>
<style>
#app {
  zoom: 1.0;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
