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
@import "@/assets/scss/_tags.scss";

.main-transition-enter-active,
.main-transition-leave-active {
  transition: all 0.5s;
}

.main-transition-enter,
.main-transition-leave-to {
  opacity: 0;
}

// .main-transition-enter,
// .main-transition-leave-to {
//   position: relative;
//   opacity: 0;
//   background-color: $pink;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     z-index: 99;
//     background-color: $pink;
//   }
// }
</style>
