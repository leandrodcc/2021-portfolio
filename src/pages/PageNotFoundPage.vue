<template>
  <div>
    <AppHeader />
    <main class="page-not-found-page">
      <div class="page-not-found-page__container">
        <div class="page-not-found-page__content">
          <h1 class="page-not-found-page__title h1--sga--mega">
            Error 404: <span class="h1--mega">Page not found</span>.
          </h1>
          <p class="page-not-found-page__description p--augmented">
            It seems the page you were trying to access doesn’t exist on this
            realm. Maybe you were trying to snoop around, who knows? Anyway,
            there’s nothing here...you should go somewhere else.
          </p>
          <router-link
            tag="button"
            class="universal-tag--xl"
            :to="{ name: 'Home' }"
            ><span aria-hidden="true">&#60;</span> To Home page</router-link
          >
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";

export default {
  name: "PageNotFoundPage",
  components: {
    AppFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_grid.scss";

.page-not-found-page {
  width: 100%;
  min-height: calc(100vh - 106px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include vertical-grad--2;
}

.page-not-found-page__container {
  @include containerStructure;

  @media screen and (min-width: 48rem) {
    max-width: 42rem;
  }

  @media screen and (min-width: 75rem) {
    max-width: 52rem;
    padding: 0;
  }
}

.page-not-found-page__content * {
  margin-bottom: 1.5rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.page-not-found-page__title {
  text-transform: uppercase;
  text-align: right;
}
</style>
