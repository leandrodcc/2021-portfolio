<template>
  <div class="page-with-header-footer">
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
  name: "HeaderFooterPageLayout",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
