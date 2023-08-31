import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'





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
      component: AboutView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:id',
      name: 'jobDetails',
      component: JobsDetails,
      props: true,
    },
    // catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound,
    }
  ]
})

export default router
