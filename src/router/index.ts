import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "HOME",
    component: Home,
  },
  {
    path: "/about",
    name: "ABOUT",
    component: About,
  },
  {
    path: "/blog",
    name: "BLOG",
    component: Blog,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
