<template>
  <p-card class="mx-auto text-center" style="width: 500px">
    <template #title> Login </template>
    <template #content>
      <div>
        <p-input-text
          v-model="loginCredentials.username"
          placeholder="Username"
          type="username"
        />
        <p-input-text
          v-model="loginCredentials.password"
          placeholder="Password"
          type="password"
        />
      </div>
    </template>
  </p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loginCredentials = ref({
  username: '',
  password: '',
})
</script>

<style lang="scss" scoped></style>
