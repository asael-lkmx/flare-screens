import { createRouter, createWebHistory } from "vue-router";
import Screens from "@/views/Screens.vue";
import Columns from "@/views/Columns.vue";

const routes = [
  { path: "/", component: Screens },
  { path: "/columns", component: Columns },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;