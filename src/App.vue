<template>
  <menubar />
  <div class="main">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Menubar from '@/components/Menubar.vue'
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
