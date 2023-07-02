<template>
  <div v-if="authStore.authCheckDone">
    <menubar class="" />
    <div v-if="authStore.isLoggedIn" class="main py-5 md:p-5 sm:px-1">
      <router-view />
    </div>
    <div v-else class="main py-5 md:p-5 sm:px-1">
      <router-view name="auth" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menubar from '@/components/MenuBar.vue'
import { onBeforeMount, watch } from 'vue'
import { useAuth } from './stores'
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
