<template>
  <step-card>
    <!-- <template #title> About you</template> -->
    <template #content>
      <div>
        <div class="grid m-0" style="max-width: 400px; row-gap: 10px">
          <p-input-text
            v-model="aboutYouData.firstname"
            class="w-full"
            type="text"
            placeholder="Firstname"
          />
          <p-input-text
            v-model="aboutYouData.lastname"
            class="w-full"
            type="text"
            placeholder="Lastname"
          />
          <p-dropdown
            v-model="aboutYouData.selectedCurrency"
            class="w-full"
            :options="currencies"
            optionLabel="label"
            optionValue="value"
            placeholder="Select your currency"
          />
          <div class="p-inputgroup">
            <p-input-text
              v-model="aboutYouData.income"
              class="w-full"
              type="number"
              placeholder="Income"
            />
            <span class="p-inputgroup-addon">{{
              aboutYouData.selectedCurrency || '?'
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
          :disabled="!aboutYouDataIsValid"
          @click="$emit('next-step')"
        />
      </div>
    </template>
  </step-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import StepCard from './StepCard.vue'

type AboutYouData = {
  firstname: string
  lastname: string
  selectedCurrency: string
  income: number | null
}

const aboutYouData = ref<AboutYouData>({
  firstname: '',
  lastname: '',
  income: null,
  selectedCurrency: '',
})

const aboutYouDataIsValid = computed(() => {
  return (
    aboutYouData.value.firstname.length > 0 &&
    aboutYouData.value.lastname.length > 0 &&
    aboutYouData.value.income !== null &&
    aboutYouData.value.selectedCurrency.length > 0
  )
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
