import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomeView from '../views/TheHomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: TheHomeView,
    props: true,
  },
  {
    path: '/detail',
    name: 'detail',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/TheDetailView.vue')
  },
  {
    path: '/allFilms',
    name: 'allFilms',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/TheAllFilmsView.vue')
  },
  {
    path: '/sortedByDateFilms',
    name: 'sortedByDateFilms',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/TheSortedByDateFilmsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router