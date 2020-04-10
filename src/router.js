import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: {
      path: '/login'
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/login/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./pages/home/index.vue'),
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('./pages/cases/map/index.vue'),
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('./pages/cases/grid/index.vue'),
  },
  {
    path: '/dragDrop',
    name: 'DragDrop',
    component: () => import('./pages/cases/dragDrop/index.vue'),
  },
  {
    path: '/ruler',
    name: 'Ruler',
    component: () => import('./pages/cases/ruler/index.vue'),
  },
  {
    path: '/screen/:id?',
    name: 'Screen',
    component: () => import('./pages/cases/websocket/index.vue'),
  },
  {
    path: '/mobilePage',
    name: 'MobilePage',
    component: () => import('./pages/cases/websocket/mobilePage.vue'),
  },
  {
    path: '/mobilePage',
    name: 'MobilePage',
    component: () => import('./pages/cases/websocket/mobilePage.vue'),
  },
  {
    path: '/newFunction',
    name: 'NewFunction',
    component: () => import('./pages/cases/newFunction/index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./pages/cases/test/index.vue'),
  },
];

const router = new Router({
  routes
});

export default router;
