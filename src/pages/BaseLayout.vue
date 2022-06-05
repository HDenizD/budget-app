<template>
  <el-container class="container">
    <el-header class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-menu-item index="3">Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="main">Main</el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.container {
  max-width: 100%;
  .header {
    --ep-header-padding: 0;
  }
  .main {
    display: flex;
    --ep-main-padding: 20px;
  }
}
</style>
