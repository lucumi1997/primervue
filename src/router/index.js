import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Servicios from '../views/menu/Servicios.vue'
import Contactos from '../views/menu/Contactos.vue'
import Acerca from '../views/menu/Acerca.vue'
import Imagenes from '../views/menu/Imagenes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '/contactos',
      name: 'Contactos',
      component: Contactos
    },
    {
      path: '/acerca',
      name: 'Acerca',
      component: Acerca
    },
    {
      path: '/imagenes',
      name: 'Imagenes',
      component: Imagenes
    },
  ]
})

export default router
