import { createRouter, createWebHistory } from "vue-router"
import LoginPage from "../pages/Login.vue"
import RegisterPage from "../pages/Register.vue"
import FeedPage from "../pages/Feed.vue"

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/feed',
    name: 'FeedPage',
    component: FeedPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router