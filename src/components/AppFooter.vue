<template>
  <footer class="footer">
    <p class="footer__text p--small--caps">
      © {{ currentYear }} Leandro Contreras. Designed and developed by yours
      truly.
    </p>
    <div class="footer__links">
      <a
        class="universal-tag"
        href="https://twitter.com/leandrodcc"
        target="_blank"
        >Twitter</a
      >
      <a
        class="universal-tag"
        href="https://www.instagram.com/leandrodcc/"
        target="_blank"
        >Instagram</a
      >
      <a
        class="universal-tag"
        href="https://github.com/leandrodcc"
        target="_blank"
        >Github</a
      >
      <a
        class="universal-tag"
        href="https://dribbble.com/leandrodcc"
        target="_blank"
        >Dribbble</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: solid 0.5px $black;
  padding: 2rem 1rem;
  background: white;

  @media screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    text-align: unset;
    padding: 2.5rem 3rem;
  }
}

.footer__text {
  padding-right: 0;

  @media screen and (min-width: 48rem) {
    padding-right: 3rem;
  }
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  justify-content: center;

  @media screen and (min-width: 17.5rem) {
    justify-content: space-evenly;
  }

  @media screen and (min-width: 48rem) {
    flex-wrap: nowrap;
    margin-top: 0;
  }

  .universal-tag {
    margin-bottom: 0.75rem;
    margin-right: 0.5rem;

    @media screen and (min-width: 48rem) {
      margin-bottom: 0;
    }

    &:last-child {
      @media screen and (min-width: 48rem) {
        margin-right: 0;
      }
    }
  }
}
</style>
