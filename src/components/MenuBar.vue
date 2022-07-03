<template>
  <p-menubar :model="items">
    <template #start>
      <img
        alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        height="40"
        class="mr-2"
      />
    </template>
    <template #item="{ item }">
      <!-- TODO: ripple not working -->
      <div class="p-menuitem p-ripple" v-ripple>
        <router-link
          :to="item.to ?? ''"
          class="p-menuitem-link gap-1 border-round"
          role="menuitem"
          @click="item.command"
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
  </p-menubar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '@/stores'

const route = useRoute()
const authStore = useAuth()

const isMobileMode = ref()
const items = ref([
  {
    label: 'Dashboard',
    icon: 'dashboard',
    to: '/',
    visible: () => authStore.isLoggedIn,
  },
  {
    label: 'Statistics',
    icon: 'analytics',
    to: '/statistics',
    visible: () => authStore.isLoggedIn,
  },
  {
    label: 'Settings',
    icon: 'settings',
    to: '/settings',
    visible: () => authStore.isLoggedIn,
  },
  {
    label: 'Imprint',
    icon: 'contact_mail',
    to: '/imprint',
  },
  {
    label: 'Privacy Policy',
    icon: 'shield',
    to: '/privacy-policy',
  },
  {
    label: 'Login',
    icon: 'login',
    style: 'position: absolute; right: 15px;',
    visible: () => !isMobileMode.value && !authStore.isLoggedIn,
    to: '/login',
  },
  {
    label: 'Login',
    icon: 'logout',
    visible: () => isMobileMode.value && !authStore.isLoggedIn,
    to: '/login',
  },
  {
    label: 'Logout',
    icon: 'logout',
    visible: () => isMobileMode.value && authStore.isLoggedIn,
    command: () => authStore.logout(),
  },
  {
    label: 'Logout',
    icon: 'logout',
    visible: () => !isMobileMode.value && authStore.isLoggedIn,
    style: 'position: absolute; right: 15px;',
    command: () => authStore.logout(),
  },
])

function handleMenubarMobileMode() {
  if (window.innerWidth <= 960) {
    isMobileMode.value = true
  } else {
    isMobileMode.value = false
  }
}

function isActive(to: string) {
  return to === route.fullPath
}

onMounted(() => {
  handleMenubarMobileMode()
  window.onresize = () => {
    handleMenubarMobileMode()
  }
})
</script>

<style lang="scss" scoped></style>
