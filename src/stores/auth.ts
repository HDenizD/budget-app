import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

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
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
        this.authCheckDone = true
      })
    },
    async login(username: string, password: string, keepMeLoggedIn: boolean) {
      return signInWithEmailAndPassword(this.auth, username, password)
        .then(() => {
          this.isLoggedIn = true
        })
        .catch((err: FirebaseError) => {
          console.log(err.message)
        })
    },
    async logout() {
      return signOut(getAuth()).then(() => {
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
