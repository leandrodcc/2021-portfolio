<template>
  <div>
    <AppHeader />

    <main class="container">
      <slot />
    </main>
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
  }
};
</script>
