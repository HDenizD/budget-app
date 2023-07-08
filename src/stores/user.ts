import { defineStore } from 'pinia'
import type { Expense } from './expenses'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'

export type User = {
  firstname: string
  lastname: string
  income: number | null
  selectedCurrency: '€' | '$' | ''
}

interface UserStore {
  userHasNoExpenses: boolean
  expensesWizardWasSkipped: boolean
  user: User
}

export const useUser = defineStore('user', {
  state: () => {
    return {
      userHasNoExpenses: true,
      expensesWizardWasSkipped: false,
      user: {
        firstname: '',
        lastname: '',
        income: null,
        selectedCurrency: '',
      },
    } as UserStore 
  },
  getters: {},
  actions: {
    getDataFromFirebase() {
      const db = getFirestore()
      const usersRef = collection(db, 'users')

      getDocs(usersRef).then((querySnapshot) => {
        let users: DocumentData[] = []
        querySnapshot.forEach((doc: DocumentData) => {
          users.push(doc.data())
        })
        console.log(users)
      })
    },
    async createNewUser(user: User) {
      const db = getFirestore()
      const usersRef = collection(db, 'users')

      return addDoc(usersRef, user).then((docRef) => {
        console.log(docRef);
        this.user = user
      })
    },
  },
  // persist: true,
})
