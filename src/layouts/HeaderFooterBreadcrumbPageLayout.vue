<template>
  <div
    class="page-with-header-breadcrumb"
    :class="{ 'page-with-header-breadcrumb--about': onAboutPage }"
  >
    <AppHeader :is-breadcrumb-needed="true">
      <router-link
        class="universal-tag--xl"
        :to="routerDirection"
        custom
        v-slot="{ navigate }"
      >
        <button @click="navigate" @keypress.enter="navigate">
          <span aria-hidden="true">&#60;</span> {{ breadcrumbText }}
        </button>
      </router-link>
    </AppHeader>
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "HeaderFooterBreadcrumbPageLayout",
  components: {
    AppHeader,
    AppFooter
  },
  props: {
    breadcrumbText: {
      type: String,
      required: true
    },
    routerDirection: {
      type: Object,
      required: true
    },
    onAboutPage: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.page-with-header-breadcrumb {
  padding-top: 0;

  @media screen and (min-width: 48rem) {
    padding-top: 144px;
  }
}

.page-with-header-breadcrumb--about {
  @include horizontal-grad;
}
</style>
