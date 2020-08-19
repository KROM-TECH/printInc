import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landing from "../views/Landing.vue";
import firebase from 'firebase/app';
import 'firebase/auth'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/services',
    name: 'Service',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/print',
    name: 'Print',
    component: () => import('../views/Print.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/Progress.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/document',
    name: 'Documents',
    component: () => import('../views/Documents.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// const isAuthenticated = true
// router.beforeEach((to, from, next) => {
//   if (to.name == 'Landing' && isAuthenticated) next({ name: 'Home' })
//   else next()
// })

router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some(record=>record.meta.requiresAuth) && !firebase.auth().currentUser){
     next({
        name: 'Login',
       query:{redirect:to.fullPath}
       })
      }
      else if (to.matched.some((record) => record.meta.requiresGuest) && firebase.auth().currentUser) {
             next({
               name: 'Home',
               query: { redirect: to.fullPath }
             });
           } else next();
})



export default router;
