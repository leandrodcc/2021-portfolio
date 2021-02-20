<template>
  <HeaderFooterBreadcrumbPageLayout>
    <div class="about-page__navigation">
      <router-link tag="button" class="universal-tag--xl" :to="{ name: 'Home' }"
        ><span aria-hidden="true">&#60;</span> To Home page</router-link
      >
    </div>
  </HeaderFooterBreadcrumbPageLayout>
</template>

<script>
import HeaderFooterBreadcrumbPageLayout from "@/layouts/HeaderFooterBreadcrumbPageLayout";

export default {
  name: "AboutPage",
  components: {
    HeaderFooterBreadcrumbPageLayout
  }
};
</script>
