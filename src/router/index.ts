/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'sss'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/data-property',
    name: 'DataProperty',
    component: () => import(/* webpackChunkName: "data_property" */ '@/views/DataProperty.vue')
  },
  {
    path: '/event-handler',
    name: 'EventHandler',
    component: () => import('@/views/EventHandler.vue')
  },
  {
    path: '/provider-inject',
    name: 'ProviderInject',
    component: () => import('@/views/ProviderInject.vue')
  },
  {
    path: '/async-components',
    name: 'AsyncComponents',
    component: () => import('@/views/AsyncComponents.vue')
  },
  {
    path: '/setup',
    name: 'TestSetUp',
    component: () => import('@/views/TestSetUp.vue')
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: () => import('@/views/CompositionApi.vue')
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
