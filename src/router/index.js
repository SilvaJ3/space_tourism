import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue'),
    props: true,
    children: [
      {
        path: ":id",
        name: "destinationName",
        props: true,
        component: () => import(/* webpackChunkName: "destination" */ '../views/DestinationName.vue'),
      }
    ]
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue')
  },
  {
    path: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
