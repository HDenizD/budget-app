import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

export const useAuth = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
      auth: getAuth(),
      authCheckDone: false,
    }
  },
  getters: {},
  actions: {
    authCheck() {
      new Promise(() => {
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            this.isLoggedIn = true
          } else {
            this.isLoggedIn = false
          }
          this.authCheckDone = true
        })
      })
    },
    login(username: string, password: string, keepMeLoggedIn: boolean) {
      signInWithEmailAndPassword(this.auth, username, password)
        .then(() => {
          this.isLoggedIn = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout() {
      console.log('logout')
      signOut(getAuth()).then(() => {
        this.isLoggedIn = false
      })
    },
    register() {
      createUserWithEmailAndPassword(
        this.auth,
        'test@lala.de',
        'test1234'
      ).then(() => {
        this.isLoggedIn = true
      })
    },
  },
})
