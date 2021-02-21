<template>
  <div class="warning-card">
    <p class="warning-card__message">{{ warningMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    warningMessage: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.warning-card {
  width: auto;
  position: fixed;
  top: 10%;
  right: 50%;
  transform: translate(50%, 10%);
  background: white;
  border: solid 0.5px $black;
  padding: 1rem;
  text-align: center;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
}
</style>
