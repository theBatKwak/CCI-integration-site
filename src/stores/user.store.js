import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
  }),
  actions: {
    setUserData: function (data) {
      // On stocke dans le store les données reçues depuis
      // 'data'
      this.token = data.token
      this.username = data.username
      this.email = data.email
      this.firstName = data.firstName
      this.lastName = data.lastName
    },
    removeUserData: function () {
      this.token = null
      this.username = null
      this.email = null
      this.firstName = null
      this.lastName = null
    },
  },
  getters: {
    isLoggedIn: function () {
      return this.token !== null
    },
  },
})
