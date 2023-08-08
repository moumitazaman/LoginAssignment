import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../components/Home.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    
   
  ]
})

export default router