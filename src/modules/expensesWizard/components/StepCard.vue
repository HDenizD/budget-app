<template>
  <p-card>
    <template #title>
      <slot name="title" />
    </template>
    <template #content>
      <slot name="content" />s
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </p-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
