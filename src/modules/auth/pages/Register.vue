<template>
  <p-card class="mx-auto mt-8 shadow-6" style="max-width: 400px">
    <template #title>
      <div class="flex align-items-center">
        <p-button
          icon="pi pi-arrow-left"
          class="p-button-rounded p-button-text p-button-secondary absolute"
          @click="router.push('/')"
        />
        <span class="mx-auto">Register</span>
      </div>
    </template>
    <template #content>
      <p-input-text
        v-model="registerCredentials.username"
        class="w-full my-2"
        placeholder="Username"
        :class="authValidator.isInvalidUsername ? 'p-invalid' : ''"
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
        v-model="registerCredentials.email"
        :class="authValidator.isInvalidEmail ? 'p-invalid' : ''"
        class="w-full my-2"
        type="email"
        placeholder="Email"
        @input="authValidator.isInvalidEmail = false"
      />
      <small
        v-if="authValidator.isInvalidEmail"
        id="username2-help"
        class="p-error scalein animation-duration-500 block pb-2"
      >
        Username cannot be empty
      </small>

      <p-password
        v-model="registerCredentials.password"
        class="w-full"
        :class="authValidator.isInvalidPassword ? 'p-invalid' : ''"
        inputClass="w-full my-2"
        placeholder="Password"
        toggleMask
        panelClass="password-panel"
        @input="authValidator.isInvalidPassword = false"
      />
      <small
        v-if="authValidator.isInvalidPassword"
        id="username2-help"
        class="p-error scalein animation-duration-500 block pb-2"
      >
        Username cannot be empty
      </small>

      <p-input-text
        v-model="registerCredentials.confirmPassword"
        :class="authValidator.isInvalidConfirmPassword ? 'p-invalid' : ''"
        class="w-full my-2"
        type="password"
        placeholder="Confirm password"
        @input="authValidator.isInvalidConfirmPassword = false"
      />
      <small
        v-if="authValidator.isInvalidConfirmPassword"
        id="username2-help"
        class="p-error scalein animation-duration-500 block pb-2"
      >
        Username cannot be empty
      </small>
      <!-- TODO: need a good validation -->
      <!-- <small
        v-if="
          registerCredentials.confirmPassword.length !== 0 &&
          !authValidator.isPasswordAndConfirmPasswordIsSame
        "
        id="username2-help"
        class="p-error scalein animation-duration-500 block pb-2"
      >
        Passwords not same!
      </small> -->
      <!-- <div class="field-checkbox my-2">
        <p-checkbox id="acceptTerms" binary />
        <label for="keepMeLoggedIn" class="cursor-pointer select-none">
          Accept Terms & Conditions
        </label>
      </div> -->
      <p-button
        class="w-full mt-2 p-button-success"
        label="Register"
        @click="register"
      />
    </template>
    <!-- <template #footer> footer </template> -->
  </p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  authValidator,
  checkPasswordAndConfirmPasswordIsSame,
} from '@/utils/form/validators'
const router = useRouter()

const registerCredentials = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

function register() {
  checkPasswordAndConfirmPasswordIsSame(
    registerCredentials.value.password,
    registerCredentials.value.confirmPassword
  )
  // authValidator.value.isInvalidUsername = true
  // authValidator.value.isInvalidEmail = true
  // authValidator.value.isInvalidPassword = true
  // authValidator.value.isInvalidConfirmPassword = true
}
</script>

<style scoped lang="scss">
.password-panel {
  top: 200px;
  position: relative;
}
</style>
