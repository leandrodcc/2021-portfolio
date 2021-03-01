<template>
  <div id="app">
    <transition name="main-transition" mode="out-in">
      <RouterView />
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_fonts.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_typography.scss";
@import "@/assets/scss/_grid.scss";
@import "@/assets/scss/_layouts.scss";
@import "@/assets/scss/_tags.scss";
@import "@/assets/scss/_code.scss";

@mixin scanners {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 40vh;
  z-index: 99;
  background: linear-gradient(0, transparent 0%, $pink 50%, transparent 100%);
}

@keyframes scanMoveUp {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-1000%);
  }
}

@keyframes scanMoveDown {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(1000%);
  }
}

.main-transition-enter-active,
.main-transition-leave-active {
  transition: opacity 0.7s;
}

.main-transition-enter,
.main-transition-leave-to {
  opacity: 0;
}

.main-transition-leave-active,
.main-transition-enter-active {
  position: relative;
  height: 100vh;
}

.main-transition-leave-active::before {
  @include scanners;
  top: -20%;
  animation: scanMoveDown 3s;
}

.main-transition-enter-active::before {
  @include scanners;
  bottom: -10%;
  animation: scanMoveUp 3s;
}
</style>
