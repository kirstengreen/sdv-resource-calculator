import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resource-calculator',
    name: 'Resource Calculator',
    component: () => import(/* webpackChunkName: "ResourceCalculator" */ '../views/ResourceCalculatorList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
