import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/pages/HomePage.vue")
    },
    {
      path: "/about-contacts",
      name: "AboutContacts",
      component: () =>
        import(/* webpackChunkName: "about-contacts" */ "@/pages/AboutPage.vue")
    },
    {
      path: "/post",
      name: "Post",
      component: () =>
        import(/* webpackChunkName: "about-contacts" */ "@/pages/PostPage.vue")
    },
    {
      path: "*",
      name: "PageNotFound",
      component: () =>
        import(
          /* webpackChunkName: "404-not-found" */ "@/pages/PageNotFoundPage.vue"
        )
    }
  ]
});
