<template>
  <HeaderFooterBreadcrumbPageLayout
    breadcrumb-text="To Home page"
    :on-about-page="true"
    :router-direction="{ name: 'Home' }"
  >
    <main class="about-page">
      <div class="about-page__container">
        <div class="about-page__content">
          <section class="about-page__about-section">
            <h1 class="about-page__about-section__title h1--mega">
              About
              <span aria-hidden="true" class="h1--sga--mega">&#8212;</span>
            </h1>
            <div class="about-page__about-section__description">
              <p>
                LEANDRO CONTRERAS is a Portuguese/Venezuelan designer based in
                Lisbon, with a focus on digital design and development,
                photography, art direction and with a love for everything
                magical and approachable. With a background in Public Relations
                and Corporate Communication, LEANDRO’s approach to design is
                intrinsicately linked with how we speak and manifest our words
                and expressions to the world: the message is as important as the
                aesthetics. When it comes to photography, LEANDRO tries to go to
                the root of why reality is stranger than fiction by capturing
                otherwordly details in his subjects, as they traverse the
                ordinary rhythms of life.
              </p>
              <p>
                As open to chaos as to beauty, LEANDRO provides visual solutions
                with a combination of classical elements with unexpected
                details, to give a idyosyncratic voice to each project he works
                on. Outcomes of his work often include website and web-app
                development, identity, graphic design for social media,
                photography and copywriting. He is also available for freelance
                work.
              </p>
            </div>
          </section>
          <section class="about-page__contacts-section">
            <h1 class="about-page__contacts-section__title h1--mega">
              <span aria-hidden="true" class="h1--sga--mega">&#8212;</span>
              Contacts
            </h1>
            <div class="about-page__contacts-section__contact-box">
              <button
                class="universal-tag--xl copy-email"
                @click="copyEmailToClipboard"
              >
                hello@leandrodcc.com
              </button>
              <button class="universal-tag--xl">Twitter</button>
              <button class="universal-tag--xl">Instagram</button>
              <button class="universal-tag--xl">Dribbble</button>
              <button class="universal-tag--xl">Github</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  </HeaderFooterBreadcrumbPageLayout>
</template>

<script>
import HeaderFooterBreadcrumbPageLayout from "@/layouts/HeaderFooterBreadcrumbPageLayout";

export default {
  name: "AboutPage",
  data() {
    return {
      clipboardButtonText: undefined
    };
  },
  components: {
    HeaderFooterBreadcrumbPageLayout
  },
  methods: {
    async copyEmailToClipboard(event) {
      if (!navigator.clipboard) {
        return;
      }
      this.clipboardButtonText = event.target.innerText;
      try {
        await navigator.clipboard.writeText(this.clipboardButtonText);
        alert("Copied e-mail to clipboard!");
      } catch (err) {
        alert("Failed to copy e-mail to clipboard!", err);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_grid.scss";

.about-page {
  width: 100%;
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @include horizontal-grad;
}

.about-page__container {
  @include containerStructure;

  @media screen and (min-width: 48rem) {
    max-width: 40rem;
  }

  @media screen and (min-width: 64rem) {
    max-width: 55rem;
  }

  @media screen and (min-width: 75rem) {
    max-width: 68rem;
    padding: 0;
  }

  @media screen and (min-width: 87.5rem) {
    max-width: 80rem;
    padding: 0;
  }
}

.about-page__content > * {
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 4rem;
    }
  }
}

.about-page__about-section__title {
  margin-bottom: 1.5rem;
}

.about-page__about-section__description {
  padding-left: 0;

  @media screen and (min-width: 65rem) {
    padding-left: 4.5rem;
  }
}

.about-page__contacts-section {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
}

.about-page__contacts-section__title {
  white-space: nowrap;
  padding-right: 0;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 48rem) {
    padding-right: 3rem;
    margin-bottom: 0;
  }
}

.about-page__contacts-section__contact-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  .universal-tag--xl {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}

.about-page__about-section__title,
.about-page__contacts-section__title {
  text-transform: uppercase;
}

.copy-email {
  text-transform: unset;
}
</style>
