import AboutView from "@/pages/AboutView.vue";
import HomeView from "@/pages/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "Prasad - Bhandara Tracker",
    },
    {
      path: "/about",
      component: AboutView,
      name: "About | Prasad",
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
