import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from '../component/home';
import Page from '../component/page';
const router = new VueRouter({
  routes: [
    {path: '/home', component:Home},
    {path: '/page', component:Page},
  ]
})
export default router