import { createRouter, createWebHistory } from "vue-router"
import LoginPage from "../pages/Login.vue"
import RegisterPage from "../pages/Register.vue"
import FeedPage from "../pages/Feed.vue"
import EditPostPage from "../pages/EditPost.vue"
import SearchUserPage from "../pages/SearchUser.vue"

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
  {
    path: '/edit-post/:id',
    name: 'EditPostPage',
    component: EditPostPage
  },
  {
    path: '/search/:searchTerm',
    name: 'SearchUser',
    component: SearchUserPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router