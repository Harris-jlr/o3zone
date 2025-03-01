import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/About.vue'
import schedule from '/src/views/samplepage.vue'
import promo from '/src/views/promo.vue'
import ozone from '/src/views/spa.vue'
import pemf from '/src/views/mat.vue'
const routes = [
    {
        path: '/',
        name: '/',
        component: home,
     },
     {
        path: '/about',
        name: 'about',
        component: about,
     },
   {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
   },
   {
      path: '/promo',
      name: 'promo',
      component: promo,
   },
   {
    path: '/ozone',
    name: 'ozone',
    component: ozone,
    },
    {
    path: '/pemf',
    name: 'pemf',
    component: pemf,
    },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router