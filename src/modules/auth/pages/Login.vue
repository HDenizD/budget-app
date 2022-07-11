<template>
  <p-card class="mx-auto mt-8 shadow-6" style="max-width: 400px">
    <template #title>
      <div class="flex justify-content-center align-items-center gap-2">
        <i class="material-icons">account_balance</i>
        <span>Budget App</span>
      </div>
    </template>
    <template #content>
      <!-- TODO: make a wrapper input component, with validation etc. -->
      <p-input-text
        v-model="loginCredentials.username"
        class="w-full my-2"
        :class="authValidator.isInvalidUsername ? 'p-invalid' : ''"
        placeholder="Username"
        type="username"
        @input="authValidator.isInvalidUsername = false"
      />
      <small
        v-if="authValidator.isInvalidUsername"
        id="username2-help"
        class="p-error scalein animation-duration-500 block pb-2"
      >
        Username cannot be empty
      </small>
      <p-input-text
        v-model="loginCredentials.password"
        class="w-full my-2"
        :class="authValidator.isInvalidPassword ? 'p-invalid' : ''"
        placeholder="Password"
        type="password"
        @input="authValidator.isInvalidPassword = false"
        @keyup.enter="login"
      />
      <small
        v-if="authValidator.isInvalidPassword"
        id="username2-help"
        class="p-error scalein animation-duration-500 block pb-2"
      >
        Password cannot be empty
      </small>
      <div class="field-checkbox my-2">
        <p-checkbox
          v-model="loginCredentials.keepMeLoggedIn"
          id="keepMeLoggedIn"
          binary
        />
        <label for="keepMeLoggedIn" class="cursor-pointer select-none"
          >Keep me logged in</label
        >
      </div>
      <p-button
        class="w-full mt-2 p-button-success"
        label="Login"
        @click="login"
      />
    </template>
    <template #footer>
      <div class="flex justify-content-between">
        <p-button
          label="Forgot password?"
          class="p-button-secondary text-sm p-button-text"
          @click="router.push('/forgot-password')"
        />
        <p-button
          label="Register"
          class="p-button-secondary text-sm p-button-text"
          @click="router.push('/register')"
        />
      </div>
    </template>
  </p-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores'
import { authValidator } from '@/utils/form/validators'

const router = useRouter()
const authStore = useAuth()

const loginCredentials = ref({
  username: 'test@lala.de',
  password: 'test1234',
  keepMeLoggedIn: false,
})

const isUsernameEmpty = computed(() => {
  return loginCredentials.value.username.length === 0
})
const isPasswordEmpty = computed(() => {
  return loginCredentials.value.password.length === 0
})

function validate() {
  return new Promise((resolve) => {
    if (isUsernameEmpty.value && isPasswordEmpty.value) {
      authValidator.value.isInvalidUsername = true
      authValidator.value.isInvalidPassword = true
      return
    }
    if (isUsernameEmpty.value) {
      authValidator.value.isInvalidUsername = true
      return
    }
    if (isPasswordEmpty.value) {
      authValidator.value.isInvalidPassword = true
      return
    }
    resolve(true)
  })
}

function login() {
  validate().then(() => {
    authStore.login(
      loginCredentials.value.username,
      loginCredentials.value.password,
      loginCredentials.value.keepMeLoggedIn
    )
    console.log('hier');
    router.push('/dashboard')
  })
}
</script>

<style lang="scss" scoped></style>
