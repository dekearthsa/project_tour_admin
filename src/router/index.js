import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ContentView from '../views/ContentView.vue'
import ProductView from '../views/ProductView.vue'
import ProductList from '../views/ProductList.vue'
import ContentList from '../views/ContentList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/content',
      name: 'content',
      component: ContentView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductList,
    },
    {
      path: '/contentlist',
      name: 'contentlist',
      component: ContentList
    }

  ]
})

export default router
