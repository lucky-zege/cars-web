import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/index/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "user",
        name: "User",
        // component: HomeView,
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/user/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
