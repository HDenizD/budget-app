<template>
  <p-card style="max-width: 650px" class="flex justify-content-center">
    <template #title> It seems that you have no expenses yet 🤷</template>
    <template #content>
      <div class="font-semibold">
        would you like to run the
        <span class="font-bold font-italic">"expenses wizard"</span> ?
      </div>
    </template>
    <template #footer>
      <div class="gap-2 flex justify-content-center">
        <p-button
          icon="pi pi-times"
          class="p-button-secondary"
          label="no, thanks. I'll do it later"
        />
        <p-button
          icon="pi pi-check"
          class="p-button-success"
          label="sure, of course ❤️"
          @click="$router.push('/expenses-wizard')"
        />
      </div>
    </template>
  </p-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
