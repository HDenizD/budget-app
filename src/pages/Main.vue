<template>
  <menu-bar />
  <p-button>Test</p-button>
  <p-card>
    <template #title> Advanced Card </template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
      consequuntur error repudiandae numquam deserunt quisquam repellat libero
      asperiores earum nam nobis, culpa ratione quam perferendis esse,
      cupiditate neque quas!
    </template>
  </p-card>
</template>

<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue'
</script>

<style scoped></style>
