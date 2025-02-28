import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/About.vue'
import schedule from '/src/views/samplepage.vue'
import promo from '/src/views/promo.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
     },
     {
        path: '/home',
        name: 'home',
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
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router