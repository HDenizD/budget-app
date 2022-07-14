<template>
  <step-card>
    <!-- <template #title> About you</template> -->
    <template #content>
      <div>
        <div class="grid" style="max-width: 400px; row-gap: 10px">
          <p-input-text class="w-full" type="text" placeholder="Firstname" />
          <p-input-text class="w-full" type="text" placeholder="Lastname" />
          <p-dropdown
            v-model="selectedCurrency"
            class="w-full"
            :options="currencies"
            optionLabel="label"
            optionValue="value"
            placeholder="Select your currency"
          />
          <div class="p-inputgroup">
            <p-input-text class="w-full" type="number" placeholder="Income" />
            <span class="p-inputgroup-addon">{{
              selectedCurrency || '?'
            }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #footer>footer</template>
  </step-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StepCard from './StepCard.vue'

const selectedCurrency = ref('')
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
