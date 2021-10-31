import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import SearchResults from '../stores/SearchResults';

// const results = SearchResults();
// console.log("router",results.state);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'PodcastDetails',
    component: () => import(/* webpackChunkName: "podcastdetails" */ '../views/PodcastById.vue')
  },
  {
    path: '/?id=:id',
    name: 'PodcastDetails2',
    component: () => import(/* webpackChunkName: "podcastdetails" */ '../views/PodcastById.vue')
  }//,
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
