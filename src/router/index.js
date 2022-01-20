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
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotUse.vue')
  },
  {
    path: '/provideInject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "provideInject" */ '../views/ProvideInject.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "compositionAPI" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/compositionAPI2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "compositionAPI2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionAPI3',
    name: 'CompositionAPI3',
    component: () => import(/* webpackChunkName: "compositionAPI3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/compositionAPI4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "compositionAPI4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/compositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "compositionAPIProvide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/customDirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customDirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugins.vue')
  },
  {
    path: '/storeAccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "storeAccess" */ '../views/StoreAccess.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: () => import(/* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
