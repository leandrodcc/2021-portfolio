<template>
  <transition name="warning-fade">
    <div v-if="isWarningNeeded">
      <div class="warning-sign">
        <p class="warning-sign__message">
          <slot />
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isWarningNeeded: {
      type: Boolean,
      default: false,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.warning-sign {
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
    padding: 1.25rem;
  }
}

.warning-fade-enter-active,
.warning-fade-leave-active {
  position: fixed;
  top: 10%;
  width: inherit;
  transition: all 0.3s;
}
.warning-fade-enter,
.warning-fade-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
