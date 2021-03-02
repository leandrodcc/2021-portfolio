<template>
  <HeaderFooterPageLayout>
    <section class="home__hero container--hero">
      <h1 class="h1--mega">
        <span class="h1--sga--mega">Hi! I'm </span>Leandro Contreras<span
          class="h1--sga--mega"
        >
          — and this is </span
        >my playground<span class="h1--sga--mega">.</span>
      </h1>
      <p class="p--augmented">
        I'm a digital designer currently working at Técnico Lisboa, with a major
        focus on photography.
      </p>
    </section>
    <main class="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut diam
        at massa imperdiet ultrices vel ac tellus. Etiam sollicitudin eu tellus
        et tempor. Nunc pharetra, diam eget cursus blandit, diam dolor ultricies
        ipsum, quis laoreet ligula elit ac enim. Nulla facilisi. Praesent id
        arcu sed arcu facilisis luctus. Vivamus nec aliquet arcu. Aenean quis
        molestie tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Suspendisse consectetur lacus vitae dui
        lacinia, et blandit sapien iaculis. Sed euismod tellus sapien, et
        accumsan est ultricies id. Pellentesque gravida aliquet metus malesuada
        mattis. Aliquam volutpat dapibus enim a rhoncus. Aliquam porta
        consectetur tellus, nec volutpat erat tincidunt eu. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer ex nulla, lobortis sit amet bibendum non, finibus
        mollis urna. Vivamus et turpis ac velit finibus rutrum. Morbi pulvinar
        nisi vitae justo tristique gravida. Duis et vestibulum sem. Donec et
        augue eu orci varius blandit. Maecenas tempor justo diam, eget consequat
        ante fringilla fermentum. Cras eget ornare dui. Nam eget odio porttitor,
        faucibus elit ac, lobortis mi. Morbi dui mi, consectetur vitae semper
        eu, facilisis sagittis leo. Phasellus consequat felis diam, quis semper
        magna auctor id. Morbi ut leo sit amet nisi ornare rhoncus aliquam a
        turpis. Curabitur tristique tempus dictum. Praesent ultrices quam at
        consequat consectetur. Donec id vestibulum dolor. Nulla lobortis justo
        purus. Donec cursus suscipit lorem ac aliquam. In in nisi eget orci
        consequat posuere non ut lectus. Pellentesque maximus fringilla turpis
        sed ullamcorper. Maecenas posuere nisl sed lacinia sollicitudin. Etiam
        nisl neque, placerat venenatis sollicitudin ac, efficitur sed turpis. Ut
        a egestas quam. Proin varius dui eget metus fringilla volutpat. Nulla
        eget justo tristique, fringilla sem non, facilisis mi. Proin vel
        ultricies tortor, non blandit nisi.
      </p>
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

  h1,
  p {
    text-transform: uppercase;
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
</style>
