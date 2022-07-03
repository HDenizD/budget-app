<template>
  <p-card
    class="mx-auto mt-8 flex text-center shadow-6"
    style="max-width: 400px"
  >
    <template #title>
      <div class="flex justify-content-center align-items-center gap-2">
        <i class="material-icons">account_balance</i>
        <span>Budget App</span>
      </div>
    </template>
    <template #content>
      <div>
        <p-input-text
          v-model="loginCredentials.username"
          class="w-full my-2"
          placeholder="Username"
          type="username"
        />
        <p-input-text
          v-model="loginCredentials.password"
          class="w-full my-2"
          placeholder="Password"
          type="password"
        />
        <div class="field-checkbox my-2">
          <p-checkbox
            v-model="loginCredentials.keepMeLoggedIn"
            id="keepMeLoggedIn"
            binary
          />
          <label for="keepMeLoggedIn">Keep me logged in</label>
        </div>
        <p-button class="w-full mt-2 p-button-success" label="Login" />
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-between">
        <p-button
          label="Forgot password?"
          class="p-button-secondary p-button-text"
          @click="router.push('/forgot-password')"
        />
        <p-button
          label="Register"
          class="p-button-secondary p-button-text"
          @click="router.push('/register')"
        />
      </div>
    </template>
  </p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginCredentials = ref({
  username: '',
  password: '',
  keepMeLoggedIn: false,
})
</script>

<style lang="scss" scoped></style>
