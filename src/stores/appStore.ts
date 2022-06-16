import { defineStore } from 'pinia'

type AppState = {
  test: string;
}

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      test: 'test'
    } as AppState
  },
  getters: {},
  actions: {}
})