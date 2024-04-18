/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import mainLayout  from '@/layouts/default.vue'
import { createRouter, createWebHistory } from 'vue-router'
import defaultRoutes from '@/router/defaultRoutes.js'
import Login from "@/pages/login.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: mainLayout,
     
    children: defaultRoutes,
    },
  ]
})

export default router
