<template>
  <header class="header">
    <div class="header__menu">
      <button
        class="header__menu-button"
        aria-haspopup="true"
        @click="toggleMenuView"
      >
        <figure aria-hidden="true">
          <svg
            class="angel"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#282424"
              d="M0 17.765h2.5v2.538H0zM0 35.53h2.5v2.538H0zM0 15.227h2.5v2.538H0zM2.5 15.227H5v2.538H2.5zM2.5 27.917H5v2.538H2.5z"
            />
            <path fill="#282424" d="M2.5 30.455H5v2.538H2.5z" />
            <path
              fill="#282424"
              d="M2.5 32.992H5v2.538H2.5zM2.5 38.068H5v2.538H2.5zM2.5 10.152H5v2.538H2.5zM0 10.152h2.5v2.538H0z"
            />
            <path
              fill="#FCECF6"
              d="M0 12.69h2.5v2.538H0zM2.5 12.69H5v2.538H2.5zM5 12.69h2.5v2.538H5zM5 17.765h2.5v2.538H5zM7.5 15.227H10v2.538H7.5zM7.5 27.917H10v2.538H7.5z"
            />
            <path
              fill="#FCECF6"
              d="M7.5 30.455H10v2.538H7.5zM10 30.455h2.5v2.538H10z"
            />
            <path
              fill="#FCECF6"
              d="M10 27.917h2.5v2.538H10zM10 25.379h2.5v2.538H10zM10 32.992h2.5v2.538H10z"
            />
            <path
              fill="#EDD5E2"
              d="M5 15.227h2.5v2.538H5zM5 27.917h2.5v2.538H5z"
            />
            <path fill="#EDD5E2" d="M5 30.455h2.5v2.538H5z" />
            <path
              fill="#FFC8F3"
              d="M5 35.53h2.5v2.538H5zM12.5 22.841H15v2.538h-2.5zM15 32.992h2.5v2.538H15zM17.5 35.53H20v2.538h-2.5zM20 32.992h2.5v5.076H20zM20 22.841h2.5v5.076H20zM17.5 30.455H20v2.538h-2.5z"
            />
            <path
              fill="#FFC8F3"
              d="M17.5 27.917H20v2.538h-2.5zM22.5 30.455H25v2.538h-2.5zM32.5 12.69H35v2.538h-2.5zM25 32.992h2.5v2.538H25zM35 35.53h2.5v2.538H35zM32.5 30.455H35v2.538h-2.5zM25 27.917h7.5v2.538H25z"
            />
            <path
              fill="#FFC8F3"
              d="M30 32.992h7.5v2.538H30zM17.5 22.841H20v2.538h-2.5zM17.5 20.303H20v2.538h-2.5zM27.5 17.765H30v7.614h-2.5zM35 17.765h2.5v7.614H35zM15 30.455h2.5v2.538H15zM15 25.379h2.5v2.538H15zM22.5 25.379h5v2.538h-5zM22.5 15.227h5v2.538h-5zM30 15.227h5v2.538h-5zM30 25.379h5v2.538h-5z"
            />
            <path
              fill="#AEA1BC"
              d="M12.5 17.765H15v2.538h-2.5zM15 17.765h2.5v2.538H15zM17.5 17.765h5v2.538h-5z"
            />
            <path
              fill="#DACFDD"
              d="M15 15.227h2.5v2.538H15zM17.5 15.227H20v2.538h-2.5zM17.5 10.152H25v2.538h-7.5z"
            />
            <path
              fill="#DACFDD"
              d="M15 12.69h2.5v2.538H15zM20 12.69h2.5v2.538H20zM27.5 12.69H30v2.538h-2.5zM30 10.152h2.5v2.538H30z"
            />
            <path
              fill="#FCECF6"
              d="M15 2.538h2.5v2.538H15zM32.5 2.538H35v2.538h-2.5zM17.5 0h15v2.538h-15zM17.5 5.076h15v2.538h-15zM17.5 12.69H20v2.538h-2.5zM27.5 25.379H30v2.538h-2.5zM22.5 20.303H25v5.076h-2.5zM30 20.303h2.5v5.076H30zM27.5 10.152H30v2.538h-2.5z"
            />
            <path
              fill="#AEA1BC"
              d="M15 20.303h2.5v2.538H15zM12.5 15.227H15v2.538h-2.5zM20 15.227h2.5v2.538H20zM22.5 12.69H25v2.538h-2.5zM25 10.152h2.5v5.076H25zM32.5 7.614H35v5.076h-2.5zM37.5 12.69H40v5.076h-2.5zM30 12.69h2.5v2.538H30zM27.5 15.227H30v2.538h-2.5zM35 7.614h2.5v7.614H35z"
            />
            <path
              fill="#AEA1BC"
              d="M12.5 12.69H15v2.538h-2.5zM12.5 10.152H15v2.538h-2.5zM15 10.152h2.5v2.538H15zM15 7.614h2.5v2.538H15z"
            />
            <path
              fill="#EDD5E2"
              d="M2.5 35.53H5v2.538H2.5zM7.5 17.765H10v2.538H7.5zM7.5 20.303H10v2.538H7.5zM10 20.303h2.5v2.538H10zM7.5 25.379H10v2.538H7.5zM7.5 32.992H10v2.538H7.5zM17.5 32.992H20v2.538h-2.5zM32.5 35.53H35v2.538h-2.5z"
            />
            <path fill="#FCECF6" d="M2.5 17.765H5v2.538H2.5z" />
            <path
              fill="#282424"
              d="M5 10.152h2.5v2.538H5zM7.5 12.69H10v2.538H7.5zM10 12.69h2.5v2.538H10zM10 10.152h2.5v2.538H10z"
            />
            <path
              fill="#282424"
              d="M10 15.227h2.5v2.538H10zM10 17.765h2.5v2.538H10zM7.5 22.841H10v2.538H7.5zM10 22.841h2.5v2.538H10zM7.5 35.53H10v2.538H7.5zM10 35.53h2.5v2.538H10zM10 38.068h2.5v2.538H10zM12.5 38.068H15v2.538h-2.5zM12.5 35.53H15v2.538h-2.5zM15 35.53h2.5v2.538H15zM12.5 32.992H15v2.538h-2.5z"
            />
            <path fill="#282424" d="M12.5 30.455H15v2.538h-2.5z" />
            <path
              fill="#282424"
              d="M12.5 27.917H15v2.538h-2.5zM12.5 25.379H15v2.538h-2.5zM12.5 20.303H15v2.538h-2.5zM20 20.303h2.5v2.538H20z"
            />
            <path
              fill="#C0AEE7"
              d="M22.5 22.841H25v2.538h-2.5zM30 22.841h2.5v2.538H30z"
            />
            <path
              fill="#282424"
              d="M25 20.303h2.5v5.076H25zM32.5 20.303H35v5.076h-2.5zM25 35.53h2.5v2.538H25zM27.5 32.992H30v2.538h-2.5zM30 35.53h2.5v2.538H30zM32.5 27.917H35v2.538h-2.5zM35 25.379h2.5v2.538H35zM35 15.227h2.5v2.538H35zM35 30.455h2.5v2.538H35zM37.5 17.765H40v7.614h-2.5zM37.5 32.992H40v5.076h-2.5z"
            />
            <path
              fill="#282424"
              d="M25 30.455h7.5v2.538H25zM22.5 17.765h5v2.538h-5zM30 17.765h5v2.538h-5zM15 22.841h2.5v2.538H15zM17.5 25.379H20v2.538h-2.5zM15 27.917h2.5v2.538H15zM22.5 27.917H25v2.538h-2.5zM22.5 32.992H25v5.076h-2.5zM20 27.917h2.5v5.076H20zM17.5 38.068h5v2.538h-5zM32.5 38.068h5v2.538h-5zM12.5 7.614H15v2.538h-2.5zM37.5 7.614H40v5.076h-2.5zM12.5 2.538H15v2.538h-2.5zM15 5.076h2.5v2.538H15zM17.5 7.614h15v2.538h-15zM17.5 2.538H20v2.538h-2.5zM35 2.538h2.5v5.076H35zM20 2.538h12.5v2.538H20zM15 0h2.5v2.538H15zM32.5 0H35v2.538h-2.5zM32.5 5.076H35v2.538h-2.5zM5 20.303h2.5v2.538H5zM5 25.379h2.5v2.538H5zM5 32.992h2.5v2.538H5zM5 38.068h2.5v2.538H5z"
            />
          </svg>
        </figure>
        <p class="p--small--caps">Menu</p>
      </button>
      <transition name="menu-slide">
        <nav
          v-if="isMenuOpen"
          class="header__menu-panel"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
        >
          <div class="container">
            <ul>
              <li class="header__menu-item">
                <p aria-hidden="true">I. Browse my projects</p>
                <a class="h1--mega">Home</a>
              </li>
              <li class="header__menu-item">
                <p aria-hidden="true">II. Get to know me, talk to me</p>
                <a class="h1--mega"
                  >About<span class="h1--sga--mega">/</span>Contacts</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenuView() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.header {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem;

  @media screen and (min-width: 48rem) {
    position: fixed;
    top: 0;
    right: 0;
    padding: 2.5rem 3rem;
  }
}

.header__menu-button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.header__menu-panel {
  width: 100vw;
  padding: 6rem 0;
  opacity: 1;
  position: absolute;
  top: 0%;
  left: 0;
  background-color: #fff;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 0.5s ease-out;
}

.menu-slide-enter,
.menu-slide-leave-to {
  transform: translateY(-100%);
}

.header__menu-item {
  text-transform: uppercase;

  &:first-child {
    margin-bottom: 1rem;
  }
}
</style>
