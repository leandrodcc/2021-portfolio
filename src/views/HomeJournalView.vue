<template>
  <section class="journal-list">
    <h1 class="journal-list__title to-uppercase">— Journal</h1>
    <JournalEntry>
      07-03-2021
      <template v-slot:entry-content>
        <blockquote>
          <p class="p--small--caps">Pay attention</p>
          <p>You cannot, and absolutely won’t talk to me or my sons.</p>
        </blockquote>
      </template>
    </JournalEntry>
  </section>
</template>

<script>
import JournalEntry from "@/components/JournalEntry";

export default {
  name: "HomeJournalView",
  components: {
    JournalEntry
  }
};
</script>

<style lang="scss">
.journal-list__title {
  text-align: right;
  padding-bottom: 3.5rem;

  @media screen and (max-width: 60rem) {
    display: none;
  }
}
</style>
