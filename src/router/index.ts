import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
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
