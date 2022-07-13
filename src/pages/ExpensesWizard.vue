<template>
  <p-tab-menu :model="items" />
  <router-view />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const items = ref([
  {
    label: 'Step1',
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

onMounted(() => {
  if (route.fullPath === '/expenses-wizard') {
    router.push('/expenses-wizard/step1')
  }
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
