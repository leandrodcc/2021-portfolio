<template>
  <div class="journal-entry">
    <p class="journal-entry__date p--small--normal">
      <slot></slot>
    </p>
    <div class="journal-entry__content">
      <slot name="entry-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JournalEntry"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.journal-entry {
  width: 100%;
  padding: 1rem;
  background-color: $pink-400;

  @media screen and (min-width: 60rem) {
    padding: 1.5rem 2rem 2rem;
  }
}

.journal-entry__date {
  margin-bottom: 1rem;

  @media screen and (min-width: 60rem) {
    margin-bottom: 1.5rem;
  }
}

.journal-entry__content {
  p + p,
  h2 + p {
    margin-top: 0.25rem;
  }

  div + div {
    margin-top: 1rem;
  }

  blockquote {
    h2 + p {
      margin-top: unset;
    }
  }
}
</style>
