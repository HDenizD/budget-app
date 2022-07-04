import { ref } from 'vue'

export const authValidator = ref({
  isInvalidUsername: false,
  isInvalidEmail: false,
  isInvalidPassword: false,
  isInvalidConfirmPassword: false,
  isPasswordAndConfirmPasswordIsSame: false,
})

export function checkPasswordAndConfirmPasswordIsSame(
  password: string,
  confirmPassword: string
) {
  if (password.length === 0 || confirmPassword.length === 0) return
  authValidator.value.isPasswordAndConfirmPasswordIsSame =
    password === confirmPassword
}
