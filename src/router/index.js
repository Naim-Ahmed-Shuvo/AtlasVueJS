import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
   
    
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
    
  },
  {
    path: '/blog/:id',
    name: 'blogDetails',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogDetails.vue'),
    
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue'),
    
  },
  {
    path:"/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
   
  },
  {
    path:"/profile",
    name: "profile",
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
