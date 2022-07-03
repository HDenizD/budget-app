<template>
  <p-card>
    <template #title> Advanced Card </template>
    <template #content>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </div>
    </template>
    <template #footer>
      <p-button icon="pi pi-check" label="Save" />
      <p-button
        icon="pi pi-times"
        label="Cancel"
        class="p-button-secondary"
        style="margin-left: 0.5em"
      />
    </template>
  </p-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
