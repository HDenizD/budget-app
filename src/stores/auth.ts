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
    }
  },
  getters: {},
  actions: {
    authCheck() {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid
          console.log(user)
          this.isLoggedIn = true
          // ...
        } else {
          // User is signed out
          this.isLoggedIn = false
          // ...
        }
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
      signOut(getAuth())
      this.isLoggedIn = false
    },
    register() {
      return createUserWithEmailAndPassword(
        this.auth,
        'test@lala.de',
        'test1234'
      ).then(() => {
        this.isLoggedIn = true
      })
    },
  },
})
