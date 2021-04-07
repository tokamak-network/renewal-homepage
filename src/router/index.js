import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../views/HomeLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
