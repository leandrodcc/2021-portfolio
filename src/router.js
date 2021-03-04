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
        import(/* webpackChunkName: "home" */ "@/pages/HomePage.vue"),
      children: [
        {
          path: "",
          alias: "projects",
          name: "Projects",
          component: () =>
            import(
              /* webpackChunkName: "projects-view" */ "@/views/HomeProjectsView.vue"
            )
        },
        {
          path: "photography",
          name: "Photography",
          component: () =>
            import(
              /* webpackChunkName: "photography-view" */ "@/views/HomePhotographyView.vue"
            )
        },
        {
          path: "journal",
          name: "Journal",
          component: () =>
            import(
              /* webpackChunkName: "journal-view" */ "@/views/HomeJournalView.vue"
            )
        }
      ]
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
