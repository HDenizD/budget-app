import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

export const useAuth = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
      authCheckDone: false,
      activeUserId: '',
    }
  },
  getters: {},
  actions: {
    authCheck() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.isLoggedIn = true
          this.activeUserId = getAuth().currentUser?.uid || ''
        } else {
          this.isLoggedIn = false
          this.activeUserId = ''
        }
        this.authCheckDone = true
      })
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider()
      return signInWithPopup(getAuth(), provider)
        .then(() => {
          this.isLoggedIn = true
          this.activeUserId = getAuth().currentUser?.uid || ''
        })
        .catch((err: FirebaseError) => {
          console.log(err.message)
        })
    },
    async login(username: string, password: string, keepMeLoggedIn: boolean) {
      return signInWithEmailAndPassword(getAuth(), username, password)
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
        this.activeUserId = ''
      })
    },
    register() {
      createUserWithEmailAndPassword(
        getAuth(),
        'test@lala.de',
        'test1234'
      ).then(() => {
        this.isLoggedIn = true
      })
    },
  },
  // persist: true,
})
