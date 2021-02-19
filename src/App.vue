<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_fonts.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_typography.scss";
</style>
