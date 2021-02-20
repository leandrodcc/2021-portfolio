<template>
  <HeaderFooterBreadcrumbPageLayout
    breadcrumb-text="To Home page"
    :router-direction="{ name: 'Home' }"
  >
    blah blah blah
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
