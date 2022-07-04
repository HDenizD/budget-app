import { ref } from 'vue'

export const authValidator = ref({
  isInvalidUsername: false,
  isInvalidEmail: false,
  isInvalidPassword: false,
  isInvalidConfirmPassword: false,
})
