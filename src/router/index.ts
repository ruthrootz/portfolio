import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog.vue';
import Article from '@/components/Article.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: 'article',
    component: Article,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
