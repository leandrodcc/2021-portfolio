<template>
  <HeaderFooterPageLayout>
    <section class="home__hero container--hero">
      <h1 class="h1--mega to-uppercase">
        <span class="h1--sga--mega">Hi! I'm </span>Leandro Contreras<span
          class="h1--sga--mega"
        >
          — and this is </span
        >my playground<span class="h1--sga--mega">.</span>
      </h1>
      <p class="p--augmented to-uppercase">
        I'm a digital designer currently working at Técnico Lisboa, with a major
        focus on photography.
      </p>
    </section>
    <nav class="home__nav container to-uppercase">
      <ul>
        <li><router-link :to="{ name: 'Projects' }">Projects</router-link></li>
        <li>
          <router-link :to="{ name: 'Photography' }">Photography</router-link>
        </li>
        <li><router-link :to="{ name: 'Journal' }">Journal</router-link></li>
      </ul>
    </nav>
    <main class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </HeaderFooterPageLayout>
</template>

<script>
import HeaderFooterPageLayout from "@/layouts/HeaderFooterPageLayout";

export default {
  name: "HomePage",
  components: {
    HeaderFooterPageLayout
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

/* hero styles */

.home__hero {
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    padding-top: 0;
    padding-bottom: 4rem;
  }

  @media screen and (min-width: 64rem) {
    padding-top: 0;
    padding-bottom: 7rem;
  }

  @media only screen and (min-height: 81.25rem) and (max-device-width: 64rem) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    padding-bottom: 6rem;
  }

  h1 {
    @media screen and (min-width: 48rem) {
      padding-right: 4rem;
    }

    @media screen and (max-width: 82rem) and (min-width: 80rem) {
      padding-right: 0;
    }

    @media screen and (min-width: 82rem) {
      padding-right: 8rem;
    }
  }

  p {
    text-align: right;
    margin-top: 1.5rem;

    @media screen and (min-width: 75rem) {
      padding-left: 10rem;
    }

    @media screen and (min-width: 82rem) {
      padding-left: 20rem;
    }
  }
}

/* nav styles */
.home__nav {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-top: solid 0.5px $black;
  border-bottom: solid 0.5px $black;

  @media screen and (min-width: 48rem) {
    border-top: solid 1px $black;
    border-bottom: solid 1px $black;
  }

  ul {
    display: flex;
    justify-content: center;

    :nth-child(2) {
      margin: 0 1rem;

      @media screen and (min-width: 48rem) {
        margin: 0 1.5rem;
      }
    }

    a {
      position: relative;
      @media screen and (max-width: 48rem) {
        font-size: 0.75rem;
        letter-spacing: 0.03em;
      }

      &.router-link-exact-active {
        &::before {
          @media screen and (min-width: 17.625rem) {
            content: "— ";
          }
        }

        &::after {
          @media screen and (max-width: 47.5rem) {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background: $pink;
            filter: blur(1rem) saturate(2);
          }
        }
      }
    }
  }
}

/* home nav transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
