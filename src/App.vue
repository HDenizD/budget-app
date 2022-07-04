<template>
  <menubar />
  <div v-if="authStore.isLoggedIn" class="main">
    <router-view />
  </div>
  <div v-else class="main">
    <router-view name="auth" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from './stores'
import Menubar from '@/components/Menubar.vue'
import { onMounted } from 'vue'

const router = useRouter()
const authStore = useAuth()

// onMounted(() => {
//   if (!authStore.isLoggedIn) {
//     router.push('/login')
//   }
// })
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
