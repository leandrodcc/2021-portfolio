<template>
  <section class="journal-list">
    <h1 class="to-uppercase">— Projects</h1>
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
}
</style>
