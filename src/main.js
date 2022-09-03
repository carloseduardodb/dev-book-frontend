import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from "vue-toastification";
import './assets/main.css'
import "vue-toastification/dist/index.css"

const options = {
  position: POSITION.TOP_RIGHT
};

createApp(App).use(Toast, options).use(router).mount('#app')
