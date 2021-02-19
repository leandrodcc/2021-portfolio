<template>
  <footer class="footer">
    <p class="footer__text p--small--caps">
      © {{ currentYear }} Leandro Contreras. Designed and developed by yours
      truly.
    </p>
    <div class="footer__links">
      <!-- FIXME: replace links below with true social media links -->
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

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: solid 0.5px $black;
  padding: 2rem 1rem;

  @media screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    text-align: unset;
    padding: 2.5rem 3rem;
  }
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  justify-content: space-evenly;

  @media screen and (min-width: 48rem) {
    flex-wrap: nowrap;
    margin-top: 0;
  }

  .universal-tag {
    margin-bottom: 0.75rem;
    margin-right: unset;

    @media screen and (min-width: 48rem) {
      margin-bottom: 0;
      margin-right: 0.5rem;
    }

    &:last-child {
      @media screen and (min-width: 48rem) {
        margin-right: 0;
      }
    }
  }
}
</style>
