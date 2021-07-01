/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
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
  {
    path: '/template-reference',
    name: 'TemplateReference',
    meta: {
      title: '模板引用'
    },
    component: () => import('@/views/TemplateReference.vue')
  },
  {
    path: '/teleport',
    name: 'TeleportStudy',
    component: () => import('@/views/TeleportStudy.vue')
  },
  {
    path: '/render',
    name: 'Render',
    component: () => import('@/views/RenderFunction.vue')
  },
  {
    path: '/reactive-base',
    name: 'ReactiveBase',
    component: () => import('@/views/ReactiveBase.vue')
  },
  {
    path: '/typescript',
    name: 'Typescript',
    component: () => import('@/views/Typescript.vue'),
    meta: {
      title: 'setup ts'
    }
  },
  {
    path: '/directive',
    name: 'Directive',
    component: () => import('@/views/Directive.vue'),
    meta: {
      title: '自定义指令'
    }
  },
  {
    path: '/custom-ref',
    name: 'CustomRef',
    component: () => import('@/views/CustomRef.vue'),
    meta: {
      title: '自定义ref'
    }
  },
  {
    path: '/life-circle',
    name: 'LifeCircle',
    component: () => import('@/views/LifeCircle.vue'),
    meta: {
      title: '生命周期'
    }
  },
  {
    path: '/css-module',
    name: 'CSSModule',
    component: () => import('@/views/CSSModule.vue'),
    meta: {
      title: 'css module'
    }
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import('@/views/Markdown.vue'),
    meta: {
      title: 'Markdown'
    }
  },
  {
    path: '/draggable-header',
    name: 'DraggableHeader',
    component: () => import('@/views/DraggableHeaderView.vue'),
    meta: {
      title: 'DraggableHeader'
    }
  },
  {
    path: '/my-tab',
    name: 'MyTab',
    component: () => import('@/views/MyTab.vue'),
    meta: {
      title: '标签栏'
    }
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: () => import('@/views/Hooks/Hooks.vue'),
    meta: {
      title: 'Hooks'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
