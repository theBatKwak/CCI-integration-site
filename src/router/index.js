import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from "../stores/user.store"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import UserView from "../views/UserView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
  ],
})

router.beforeEach((to, from) => {
  // Ce code est exécuté avant chaque changement de page
  const userStore = useUserStore()
  if (to.name === "user" && !userStore.isLoggedIn) {
    return "/login"
  }
})

export default router
