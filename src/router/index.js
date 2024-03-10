import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Formations from '../components/Formations.vue'
import Experiences from '../components/Experiences.vue'
import Competences from '../components/Competences.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cv',
      redirect: '/cv/formations',
      name: 'cv',
      component: () => import('../views/CvView.vue'),
      children: [
        {
          path: 'formations',
          component: Formations
        },
        {
          path: 'experiences',
          component: Experiences
        },
        {
          path: 'competences',
          component: Competences
        },
        ]
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../views/ProjetView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
