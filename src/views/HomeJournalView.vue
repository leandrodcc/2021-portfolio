<template>
  <section class="journal-list">
    <h1 class="journal-list__title to-uppercase">— Journal</h1>
    <JournalEntry>
      07-03-2021
      <template v-slot:entry-content>
        <p class="p--small--caps">Pay attention</p>
        <p>You cannot, and absolutely won’t talk to me or my sons.</p>
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
@import "@/assets/scss/_variables.scss";

.journal-list {
  .journal-entry:nth-child(2) {
    background-color: $pink-400;
  }

  .journal-entry:nth-child(3) {
    background-color: $pink-300;
  }

  .journal-entry:nth-child(4) {
    background-color: $pink-200;
  }

  .journal-entry:nth-child(5) {
    background-color: $pink-100;
  }

  .journal-entry:last-child {
    background-color: $pink;
  }

  .journal-entry:nth-child(n + 2):nth-child(-n + 5) {
    margin-bottom: 1rem;
  }
}
</style>
