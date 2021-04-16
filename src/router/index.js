import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../views/HomeLayout";
import SolutionsLayout from "../views/SolutionsLayout";

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
];

const router = new VueRouter({
  routes,
});

export default router;
