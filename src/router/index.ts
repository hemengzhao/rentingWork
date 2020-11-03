import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/Home.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('/@/views/Setting.vue')
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: () => import('/@/views/LifeCycle.vue')
  }
]

export default createRouter({
  history: createWebHistory('/krry/'),
  routes
})
