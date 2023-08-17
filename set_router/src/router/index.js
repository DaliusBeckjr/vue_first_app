import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aboutview from '../views/AboutView.vue'
import Moreview from '../views/MoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutview
    },
    {
      path: '/more',
      name: 'more',
      component: Moreview
    },
  ]
})

export default router
