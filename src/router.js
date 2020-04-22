import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/sign',
      name: 'Sign',
      component: () => import('./views/Sign.vue')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('./views/Order.vue')
    }
  ]
})
