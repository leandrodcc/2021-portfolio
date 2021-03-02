<template>
  <div class="page-with-header-footer">
    <AppHeader />
    <slot />
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
