import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'category/:id',
        name: 'Category',
        component: Category,
      },
      {
        path: 'category/sub/:cid',
        name: 'SubCategory',
        component: () => import('@/views/Category/SubCategory.vue'),
      },
      {
        path: 'product/:gid',
        name: 'Goods',
        component: () => import('@/views/Goods/index.vue')
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior () {
    // vue2 x,y 控制
    // vue3 left, top 控制
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

export default router
