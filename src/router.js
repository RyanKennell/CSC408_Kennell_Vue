import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CustomerDetails from './views/CustomerDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movies',
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/Movie.vue')
    },
    {
      path: '/movies/:userId',
      name: 'movie-details',
      // component: CustomerDetails
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/MovieDetails.vue')
    },
    {
      path: '/movies/:userId/rentals',
      name: 'movie-rentals',
      // component: CustomerRentals
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/MovieRentals.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/Customer.vue')
    },
    {
      path: '/customer-details/:userId',
      name: 'customer-details',
      // component: CustomerDetails
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/CustomerDetails.vue')
    },
    {
      path: '/customer-details/:userId/rentals',
      name: 'customer-rentals',
      // component: CustomerRentals
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/CustomerRentals.vue')
    }
  ]
})
