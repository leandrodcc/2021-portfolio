<template>
  <HeaderFooterBreadcrumbPageLayout
    breadcrumb-text="To Home page"
    :router-direction="{ name: 'Home' }"
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
          practice parking? I do not wear polyester hair, okay? Are we going
          somewhere to make left turns? As if! Do you know what time it is? You
          know, If I ever saw you do anything that wasn't ninety percent
          selfish, I'd die of shock. It's like that book I read in the 9th grade
          that said 'tis a far far better thing doing stuff for other people.
        </p>
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

.post__heading {
  display: grid;
  grid-template: 1fr / repeat(6, 1fr);
  align-items: center;
}

.post__image {
  grid-column: 1 / span 4;
  grid-row: 1;
  background-color: $pink-200;
  min-height: 23rem;
  width: 100%;
}

.post__infos {
  grid-column: 4 / span 2;
  grid-row: 1;
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

.post__content {
  padding: 2.5rem 0 6rem;
}
</style>
