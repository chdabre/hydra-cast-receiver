import Vue from 'vue';
import VueRouter from 'vue-router';
import Splash from '@/views/Splash';
import Synth from '../views/Synth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash,
  },
  {
    path: '/synth',
    name: 'Synth',
    component: Synth,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
