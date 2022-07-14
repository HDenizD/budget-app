<template>
  <div class="mb-4">
    <div class="text-4xl font-semibold mb-2">Expenses Wizard 🧙‍♂️</div>
    <div>
      The Expenses Wizard helps you set up your expenses.
      <br />
      Just fill out the formula and click on "Next Step" to proceed.
    </div>
  </div>
  <p-tab-menu :model="items" />
  <router-view @next-step="stepper('next')" @prev-step="stepper('prev')" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

type StepItems = {
  label: string
  to: string
}[]

const currentStepIndex = ref(0)
const items = ref<StepItems>([
  {
    label: 'About\u00A0you',
    to: '/expenses-wizard/step1',
  },
  {
    label: 'Step2',
    to: '/expenses-wizard/step2',
  },
  {
    label: 'Step3',
    to: '/expenses-wizard/step3',
  },
  {
    label: 'Step4',
    to: '/expenses-wizard/step4',
  },
])

watch(
  () => route.fullPath,
  () => {
    if (route.fullPath === '/expenses-wizard') {
      router.push('/expenses-wizard/step1')
    }
  }
)

function stepper(direction: 'next' | 'prev') {
  let currentStepIndex = items.value.findIndex(
    (item) => item.to === route.fullPath
  )

  if (direction === 'next') currentStepIndex++
  if (direction === 'prev') currentStepIndex--

  router.push(items.value[currentStepIndex]?.to)
}

onMounted(() => {
  if (route.fullPath === '/expenses-wizard') {
    router.push('/expenses-wizard/step1')
  }

  currentStepIndex.value = items.value.findIndex(
    (item) => item.to === route.fullPath
  )
})
</script>

<style scoped lang="scss">
:deep(.p-tabmenuitem) {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
}
:deep(.p-menuitem-link) {
  justify-content: center;
}
</style>
