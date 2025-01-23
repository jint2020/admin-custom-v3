import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from '@/views/login/index.vue'
import DashboardView from "@/views/dashboard/index.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: DashboardView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
  scrollBehavior: (to, from, savedPosition) => ({
    left: 0,
    top: 0
  })
});

export default router;