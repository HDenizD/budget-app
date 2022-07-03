import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,

    }
  },
  getters: {},
  actions: {
    login(username: string, password: string, keepMeLoggedIn: boolean) {
      console.log('login');
      this.isLoggedIn = true;
    },
    logout() {
      console.log('logout');
      this.isLoggedIn = false;
    }
  },
})