import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/pages/HomePage.vue")
    },
    {
      path: "/about-contacts",
      name: "about-contacts",
      component: () =>
        import(/* webpackChunkName: "about-contacts" */ "@/pages/AboutPage.vue")
    }
  ]
});
