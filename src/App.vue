<template>
  <menubar />
  <div v-if="authStore.isLoggedIn" class="main">
    <router-view />
  </div>
  <div v-else class="main">
    <login />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from './stores'
import Login from '@/pages/Login.vue'
import Menubar from '@/components/Menubar.vue'

const authStore = useAuth()
console.log(authStore.isLoggedIn)
</script>

<style lang="scss">
body {
  color: #ffffff;
  background-color: #040d19;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
