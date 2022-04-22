import { createRouter, createWebHistory } from "vue-router";
import SpotifyView from "@/views/SpotifyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "spotify",
      component: SpotifyView,
    },
  ],
});

export default router;
