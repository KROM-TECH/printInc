import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/info",
    name: "Info",
    component: () =>
      import("../views/Info.vue")
  },
  {
    path: "/services",
    name: "Service",
    component: () =>
      import("../views/Services.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const isAuthenticated = true
router.beforeEach((to, from, next) => {
  if (to.name == 'Landing' && isAuthenticated) next({ name: 'Home' })
  else next()
})

export default router;
