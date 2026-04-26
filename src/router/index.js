import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAccommodationBySlug } from '../data/accommodations'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 24,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('../views/CompaniesView.vue'),
    },
    {
      path: '/boenden/:slug',
      name: 'accommodation',
      props: (route) => ({
        accommodation: getAccommodationBySlug(route.params.slug),
      }),
      component: () => import('../views/booking/BookingView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
