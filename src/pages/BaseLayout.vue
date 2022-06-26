<template>
  <el-container class="container">
    <el-header class="header">
      <el-menu
        :default-active="activeIndex"
        class="menu"
        mode="horizontal"
        :ellipsis="false"
        router
        @select="handleSelect"
      >
        <el-menu-item index="/dashboard">Dashboard</el-menu-item>
        <el-menu-item index="/user">User</el-menu-item>
        <el-menu-item index="/budget">Budget</el-menu-item>
        <div class="flex-grow" />
        <!-- <el-menu-item index="3">Settings</el-menu-item> -->
      </el-menu>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const activeIndex = ref('')

const handleSelect = (key: string, keyPath: string[]) => {
  activeIndex.value = key
}

onMounted(() => {
  activeIndex.value = location.pathname
})
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
    --ep-main-padding: 20px;
    max-width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
