<template>
  <step-card>
    <!-- <template #title> About you</template> -->
    <template #content>
      <div>
        <div class="grid m-0" style="max-width: 400px; row-gap: 10px">
          <p-input-text
            v-model="userData.firstname"
            class="w-full"
            type="text"
            placeholder="Firstname"
          />
          <p-input-text
            v-model="userData.lastname"
            class="w-full"
            type="text"
            placeholder="Lastname"
          />
          <p-dropdown
            v-model="userData.selectedCurrency"
            class="w-full"
            :options="currencies"
            optionLabel="label"
            optionValue="value"
            placeholder="Select your currency"
          />
          <div class="p-inputgroup">
            <p-input-text
              v-model="userData.income"
              class="w-full"
              type="number"
              placeholder="Income"
            />
            <span class="p-inputgroup-addon">{{
              userData.selectedCurrency || '?'
            }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-end">
        <p-button
          class="p-button-success"
          label="Next Step"
          @click="createNewUser"
        />
      </div>
    </template>
  </step-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '@/stores'
import StepCard from './StepCard.vue'
import { User } from '@/stores/user'

function createNewUser() {
  userStore
    .createNewUser(userData.value)
    .then(() => {
      emit('next-step')
    })
    .catch((err) => {
      console.log(err)
    })
}

const emit = defineEmits(['next-step'])
const userStore = useUser()

const userData = ref<User>({
  firstname: '',
  lastname: '',
  income: null,
  selectedCurrency: '',
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
