<template>
  <footer>
    <p class="footer__text p--small--caps">
      © {{ currentYear }} Leandro Contreras. Designed and developed by yours
      truly.
    </p>
    <div class="footer__links">
      <button class="universal-tag">Twitter</button>
      <button class="universal-tag">Instagram</button>
      <button class="universal-tag">Dribbble</button>
      <button class="universal-tag">Github</button>
    </div>
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
