import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/Contact.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "computed" */ '../views/Computed.vue')
  },
  {
    path: '/sampleSearch',
    name: 'SampleSearch',
    component: () => import(/* webpackChunkName: "sampleSearch" */ '../views/SampleSearch.vue')
  },
  {
    path: '/sampleSave',
    name: 'SampleSave',
    component: () => import(/* webpackChunkName: "sampleSave" */ '../views/SampleSave.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
