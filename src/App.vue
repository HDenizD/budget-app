<template>
  <div v-if="authStore.authCheckDone">
    <menubar class="mb-5" />
    <div v-if="authStore.isLoggedIn" class="main">
      <router-view />
    </div>
    <div v-else class="main">
      <router-view name="auth" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { useAuth } from './stores'
import Menubar from '@/components/Menubar.vue'
import { router } from './router'

const authStore = useAuth()

watch(
  () => authStore.isLoggedIn,
  () => {
    router.push('/dashboard')
  }
)

onBeforeMount(() => {
  authStore.authCheck()
})
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
