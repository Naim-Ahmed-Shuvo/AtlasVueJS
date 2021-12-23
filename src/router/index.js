import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import NProgress from "nprogress";

//
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    
  },
  {
    path: '/blog',
    name: 'blog',
     
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
    
  },
  {
    path: '/blog/:id',
    name: 'blogDetails',
    props:true,
    component: () => import(/* webpackChunkName: "BlogDetails" */ '../views/BlogDetails.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
    
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
    
  },
  {
    path:"/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
   
  },
  {
    path:"/checkout",
    name: "checkout",
    component: () => import(/* webpackChunkName: "Checkout" */ '../views/Checkout.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
   
  },
  {
     path: "/payment",
     name: "payment",
     component: ()=>import (/* webPackChunkName: "Checkout" */'../views/Payment.vue'),
     beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
  },
  {
    path:"/profile",
    name: "profile",
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(store.getters.getSignedUser)
      // console.log(user.name)
      // console.log(" in home",user)
      if(user==null){
        next('/login')
      } else{
        next()
      }
    } 
   
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})
router.afterEach((to,from,next)=>{
NProgress.done()
next()
})


export default router
