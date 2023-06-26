import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../views/HomeLayout";
import SolutionsLayout from "../views/SolutionsLayout";

import AboutLayout from "../views/AboutLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
  },
  {
    path: "/solutions",
    name: "Solutions",
    component: SolutionsLayout,
  },
  {
    path: "/about",
    name: "About",
    component: AboutLayout,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
