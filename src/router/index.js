import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ResourceCalculatorList from '../views/ResourceCalculatorList.vue'
import CraftableItem from '../views/CraftableItem.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/resource-calculator',
    name: 'ResourceCalculator',
    component: ResourceCalculatorList
  },{
    path: '/resource-calculator/:idOfCraftableItem',
    name: 'CraftableItem',
    component: CraftableItem,
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
