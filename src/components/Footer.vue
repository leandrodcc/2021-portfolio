<template>
  <footer>
    <p class="p--small--caps">
      © {{ currentYear }} Leandro Contreras. Designed and developed by yours
      truly.
    </p>
    <div></div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
