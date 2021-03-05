<template>
  <section class="journal-list">
    <h1 class="journal-list__title to-uppercase">— Journal</h1>
    <JournalEntry />
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
.journal-list {
  padding-top: 3.5rem;
  padding-bottom: 4rem;
}

.journal-list__title {
  text-align: right;
  padding-bottom: 3.5rem;
}
</style>
