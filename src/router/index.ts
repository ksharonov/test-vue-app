import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue")
  },
  {
    path: "/hotel/:id",
    name: "Hotel Page",
    props: true,
    component: () => import("@/pages/Hotel.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
