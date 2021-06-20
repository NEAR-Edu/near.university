import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/earn',
    name: 'Earn',
    // route level code-splitting
    // this generates a separate chunk (earn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "earn" */ '../pages/EarnPage.vue')
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../pages/LearnPage.vue')
  },
  {
    path: '/connect',
    name: 'Connect',
    component: () => import('../pages/ConnectPage.vue')
  },
  {
    path: '/certify',
    name: 'Certify',
    component: () => import('../pages/CertifyPage.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/DashboardPage.vue')
  },
  {
    path: '/signout',
    name: 'Signout',
    component: () => import('../pages/DashboardPage.vue')
  },
  {
    path: '/near-website',
    beforeEnter() {
      window.open('https://near.org', '_blank');
    }
  },
  {
    path: '/near-docs',
    beforeEnter() {
      window.open('https://docs.near.org', '_blank');
    }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../pages/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
