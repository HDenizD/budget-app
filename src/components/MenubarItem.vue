<template>
  <div class="p-menuitem p-ripple" v-ripple>
    <router-link
      :to="item.to ?? ''"
      class="p-menuitem-link gap-1 border-round"
      role="menuitem"
    >
      <i
        v-if="item.icon"
        class="material-icons"
        :class="isActive(item.to) ? 'text-primary' : ''"
      >
        {{ item.icon }}
      </i>
      <span
        v-if="item.label"
        class="p-menuitem-text"
        :class="isActive(item.to) ? 'text-primary' : ''"
      >
        {{ item.label }}
      </span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const route = useRoute()

function isActive(to: string) {
  return to === route.fullPath
}
</script>

<style scoped></style>
