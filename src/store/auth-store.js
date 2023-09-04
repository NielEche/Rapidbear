// src/store/index.js
import { defineStore } from 'pinia'
import { Requests } from '../requests'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {},
    accessToken: '',
    refreshToken: '',
    authenticated: false,
  }),
  getters: {
    getAuthUser(state) {
      return state.user
    },
    getAccessToken(state) {
      return state.accessToken
    },
    getRefreshToken(state) {
      return state.refreshToken
    },
  },
  actions: {
    login(user) {
      var request_data = {
        what: "authenticateUser",
        data: user,
      };

      return new Promise((resolve, reject) => {
        Requests.makePostRequest(request_data)
          .then((response) => {
            if (response.status == 200 && response.data.status == "success") {
              this.user = response.data.data.user
              this.accessToken = response.data.data.access
              this.refreshToken = response.data.data.refresh
              this.authenticated = true
              resolve(true);
            } else {
              reject(response);
            }
          })
          .catch((error) => {
            // this.toast.error(error.message);
            reject(error);
          });
      })
    },
  },
  persist: true,
});
