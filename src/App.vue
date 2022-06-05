<template>
  <el-config-provider namespace="ep">
    <BaseLayout />
  </el-config-provider>
</template>
<script setup lang="ts">
import BaseLayout from '@/pages/BaseLayout.vue'
</script>
<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
