<template>
  <p-card class="p-3">
    <template #title>
      <slot name="title" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </p-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
