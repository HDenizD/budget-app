<template>
  <div class="flex justify-content-center">
    <user-has-no-data v-if="userStore.userHasNoExpenses" />
    <!-- @skip-expenses-wizard="userStore.expensesWizardWasSkipped = true" -->
  </div>
</template>

<script setup lang="ts">
import UserHasNoData from '@/modules/dashboard/components/UserHasNoData.vue'
import { useUser } from '@/stores'

const userStore = useUser()
</script>

<style scoped></style>
