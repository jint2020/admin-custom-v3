/*
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 11:51:05
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-24 17:15:22
 */
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/login/index.vue'
import DashboardView from '@/views/dashboard/index.vue'
import { useAppStore } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DashboardView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
})

const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if (!appStore.token) {
    whiteList.indexOf((to.path) !== -1 ? next() : next(`login?redirect=${to.path}`))
  }
  if (appStore.token && to.path === "/login"){
    next({name: 'dashboard'})
  }
  next();
})
export default router
