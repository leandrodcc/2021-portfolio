<template>
  <HeaderFooterBreadcrumbPageLayout
    breadcrumb-text="To Home page"
    :router-direction="{ name: 'Projects' }"
  >
    <article class="post">
      <header class="post__heading">
        <figure class="post__image"></figure>
        <div class="post__infos">
          <div class="post__meta">
            <span class="universal-tag universal-tag--decorative post__date"
              >26 - 01 -2019</span
            >
            <span class="universal-tag universal-tag--decorative post__category"
              >Development</span
            >
          </div>
          <h1 class="post__title">The problem with huge applications is...</h1>
          <p class="post__excerpt">
            There’s always gonna be a problem or two...OK maybe more than that.
          </p>
          <small class="post__photo-credit p--small--caps">
            Photo by Anastasia Beaverhausen
          </small>
        </div>
      </header>
      <main class="post__content container">
        <p>
          The LA city bus driver who took a chance on an unknown kid. Want to
          practice parking?
          <a href="https://github.com/" target="_blank"
            >I do not wear polyester hair, okay?</a
          >
          Are we going somewhere to make left turns? As if! Do you know what
          time it is? You know, If I ever saw you do anything that wasn't ninety
          percent selfish, I'd die of shock. It's like that book I read in the
          9th grade that said 'tis a far far better thing doing stuff for other
          people.
        </p>
        <figure>
          <img src="Image/img.jpg" alt="" />
          <figcaption>
            Sometimes, shit can happen. It’s all gonna work well in the end.
          </figcaption>
        </figure>
        <p>
          How, how do you like this to be? Natural and automatic for ya...I love
          the way you wrap around my heart, filling me up I didn’t know before,
          it just comes automatic My senses move at the smallest body movements
          It just comes so natural It just comes Automatic. I’ve waited for
          these fantasies every day My heart is breathing toward you The
          momentarily scattering sounds reach you Telling you all the truths
          about my love. Warm velvet skin, lips with a soft light on them Eyes
          that are wet like rain, it’s all beautiful. I love the way you wrap
          around my heart, filling me up I didn’t know before, it just comes
          automatic My senses move at the smallest body movements It just comes
          so natural, it just comes automatic — The sugar rush comes over me at
          once I’m so naturally stopped in front of you I close my eyes and open
          them again But I can’t wake up from this deep dream. Warm velvet skin,
          lips with a soft light on them Eyes that are wet like rain, it’s all
          beautiful...Your warm hands, your soft smile In your world, it’s all
          beautiful. It just comes automatic.
        </p>
        <blockquote>
          <h2>The child looks and recognizes before it can speak.</h2>
          <p>— John Berger, Ways of Seeing. 1970.</p>
        </blockquote>
        <p>
          It just comes so natural, it just comes automatic — The sugar rush
          comes over me at once I’m so naturally stopped in front of you I close
          my eyes and open them again But I can’t wake up from this deep dream.
          Warm velvet skin, lips with a soft light on them Eyes that are wet
          like rain, it’s all beautiful...Your warm hands, your soft smile In
          your world, it’s all beautiful. It just comes automatic.
        </p>
        <p>
          I close my eyes and open them again But I can’t wake up from this deep
          dream. Warm velvet skin, lips with a soft light on them Eyes that are
          wet like rain, <code>it’s all beautiful...</code> warm hands, your
          soft smile In your world, it’s all beautiful. It just comes automatic.
        </p>
        <pre data-lang="css"><code>p { color: red; }
body { background-color: #eee; }</code></pre>
        <p>It just comes so natural...it just comes Automatic.</p>
      </main>
    </article>
  </HeaderFooterBreadcrumbPageLayout>
</template>

<script>
import HeaderFooterBreadcrumbPageLayout from "@/layouts/HeaderFooterBreadcrumbPageLayout";

export default {
  name: "PostPage",
  components: {
    HeaderFooterBreadcrumbPageLayout
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

/* post heading styles */
.post__heading {
  display: grid;
  grid-template: repeat(2, auto) / 1fr;
  align-items: flex-start;

  @media screen and (min-width: 60rem) {
    align-items: center;
    grid-template: 1fr / repeat(12, 1fr);
  }
}

.post__image {
  grid-column: auto;
  grid-row: auto;
  background-color: $pink;
  min-height: 12.5rem;
  width: 100%;
  margin-bottom: 1rem;

  @media screen and (min-width: 60rem) {
    grid-column: 1 / span 7;
    grid-row: 1;
    min-height: 23rem;
    margin-bottom: 0;
  }
}

.post__infos {
  grid-column: auto;
  grid-row: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  @media screen and (min-width: 60rem) {
    display: initial;
    text-align: unset;
    grid-column: 6 / span 5;
    grid-row: 1;
    padding: 0;
  }

  @media screen and (max-width: 60rem) {
    &::after {
      content: "";
      width: 6.25rem;
      height: 0.0313rem;
      background: $black;
      margin: 1.5rem 0;
    }
  }

  @media only screen and (min-height: 81.25rem) and (max-device-width: 64rem) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    grid-column: 6 / span 6;
  }
}

.post__meta {
  display: flex;
  margin-bottom: 1.375rem;

  :first-child {
    margin-right: 0.5rem;
  }
}

.post__title {
  margin-bottom: 1rem;
}

.post__excerpt {
  margin-bottom: 0.5rem;
}

.post__title,
.post__excerpt {
  max-width: 40.375rem;
}

/* post content styles */
.post__content {
  padding: 0 1rem 3rem;

  @media screen and (min-width: 60rem) {
    padding: 2.5rem 0 6rem;
  }

  a {
    padding-bottom: 0.125rem;
    border-bottom: solid 0.4px $black-muted;
    transition: background 0.3s;

    &:hover {
      background: $pink-300;
    }
  }

  figure {
    padding: 2rem 0;

    @media screen and (min-width: 60rem) {
      padding: 2.5rem 0;
    }
  }

  img {
    width: 100%;
    height: 12.5rem;
    background: $pink;

    @media screen and (min-width: 60rem) {
      height: 23rem;
    }
  }

  figcaption {
    margin-top: 0.5rem;
  }

  blockquote {
    margin: 0 auto;
    padding: 2.5rem 0;
    max-width: 18rem;
    text-align: initial;

    @media screen and (min-width: 48rem) {
      text-align: center;
      max-width: 45.5rem;
    }

    @media screen and (min-width: 60rem) {
      padding: 3rem 0;
    }
  }

  pre {
    margin: 2rem 0;
  }
}
</style>
