import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

export const useAuth = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
    }
  },
  getters: {},
  actions: {
    auth() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid
          console.log(uid)
          // ...
        } else {
          console.log('no session')
          // User is signed out
          // ...
        }
      })
    },
    login(username: string, password: string, keepMeLoggedIn: boolean) {
      signInWithEmailAndPassword(getAuth(), username, password)
        .then(() => {
          this.isLoggedIn = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout() {
      console.log('logout')
      this.isLoggedIn = false
    },
    register() {
      return createUserWithEmailAndPassword(
        getAuth(),
        'test@lala.de',
        'test1234'
      ).then(() => {
        this.isLoggedIn = true
      })
    },
  },
})
