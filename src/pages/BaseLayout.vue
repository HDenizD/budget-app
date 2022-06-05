<template>
  <el-container class="container">
    <el-header class="header">
      <el-menu
        :default-active="activeIndex"
        class="menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="1">Dashboard</el-menu-item>
        <el-menu-item index="2">User</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="3">Settings</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="main">Main</el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.container {
  max-width: 100%;
  .header {
    --ep-header-padding: 0;
    .menu {
      display: flex;
    }
  }
  .main {
    display: flex;
    --ep-main-padding: 20px;
  }
}
</style>
