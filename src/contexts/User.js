import { api } from '@/service/api'
import { reactive } from 'vue'
import { useToast } from "vue-toastification";
import { localStorageStore } from './LocalStorage';

export const userStore = reactive({
  isLoaded: false,
  user: null,
  setUser(id) {
    userStore.isLoaded = true
    const token = localStorage.getItem('token')
    api.get(`user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      userStore.user = response.data
      if (window.location.pathname === '/login' || window.location.pathname === '/register') {
        window.location.href = '/feed'
      }
    }).catch((err) => {
      console.log(err)
      const toast = useToast();
      userStore.user = null;
      userStore.logout();
      toast.error("Erro ao carregar dados do usuário!")
    }).finally(() => {
      userStore.isLoaded = false
    })
  },
  decryptToken() {
    const token = localStorage.getItem('token')
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  },
  loadContext() {
    localStorageStore.asyncLocalStorage.getItem('token').then(token => {
      userStore.setUser(userStore.decryptToken(
        token
      ).userId)
    }).catch(() => {
      console.log('Não há token')
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.location.href = '/login'
      }
    })
  },
  logout() {
    localStorageStore.asyncLocalStorage.removeItem('token')
    window.location.href = '/login'
  }
})