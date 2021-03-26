import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/base',
    name: 'base',
    component: () => import('@/views/Base.vue')
  }

]

export default createRouter({
  history: createWebHistory('/'),
  routes
})
