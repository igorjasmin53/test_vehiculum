import Vue from 'vue'
import VueRouter from 'vue-router'
import Bible from '../views/bible/Bible.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Bible',
    component: Bible
  },
  {
    path: '/details/:id',
    name: 'Details',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/details/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
