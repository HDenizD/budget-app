<template>
  <form @submit.prevent="onSubmit">
    <step-card>
      <!-- <template #title> About you</template> -->
      <template #content>
        <div>
          <div class="grid m-0" style="max-width: 400px; row-gap: 10px w-full">
            <p-input-text
              v-model="userData.firstname"
              class="w-full"
              type="text"
              required
              placeholder="Firstname"
            />
            <p-input-text
              v-model="userData.lastname"
              class="w-full"
              type="text"
              required
              placeholder="Lastname"
            />
            <p-dropdown
              v-model="userData.currency"
              class="w-full"
              :options="currencies"
              optionLabel="label"
              optionValue="value"
              placeholder="Select your currency"
              required
            />
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
            <div class="p-inputgroup">
              <p-input-text
                v-model="userData.income"
                class="w-full"
                type="number"
                required
                placeholder="Income"
              />
              <span class="p-inputgroup-addon">{{
                userData.currency || '?'
              }}</span>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-end">
          <p-button type="submit" class="p-button-success" label="Next Step" />
        </div>
      </template>
    </step-card>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '@/stores'
import { User } from '@/stores/user'
import { useField, useForm } from 'vee-validate'
import StepCard from './StepCard.vue'

function onSubmit() {
  userStore
    .createNewUser(userData.value)
    .then(() => {
      emit('next-step')
    })
    .catch((err) => {
      console.log(err)
    })
}

const { handleSubmit } = useForm()
const { errorMessage } = useField('text')
const emit = defineEmits(['next-step'])
const userStore = useUser()

const userData = ref<User>({
  firstname: '',
  lastname: '',
  income: null,
  currency: '',
})

const currencies = ref([
  {
    label: 'Euro (€)',
    value: '€',
  },
  {
    label: 'Dollar ($)',
    value: '$',
  },
])
</script>

<style scoped lang="scss"></style>
