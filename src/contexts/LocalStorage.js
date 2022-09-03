import { reactive } from 'vue'

export const localStorageStore = reactive({
  isLoaded: false,
  asyncLocalStorage: {
    setItem: function (key, value) {
      return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
      });
    },
    getItem: function (key) {
      return Promise.resolve().then(function () {
        return localStorage.getItem(key);
      });
    }
  }
})