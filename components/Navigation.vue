<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-grayblacked-100/95 px-6 py-2 shadow-lg size-100 z-50 fixed left-4 top-2 mx-2 rounded-md custom-nav"
    :class="{'scrolled': !view.atTopOfPage}"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link :to="localePath('/')">
        <img id="logo" class="h-10 px-2 inline" src="../assets/img/icons/Logo-MS.png" alt="Logo" width="56" height="56" />
        <!--<nuxt-img id="logo" class="h-10 px-2 inline" format="webp" quality="80" src="/img/icons/Logo-MS.png" width="56" height="56" preload placeholder />-->
      </nuxt-link>
      <nuxt-link
        :to="localePath('/')"
        class="font-semibold hover:text-white text-gray-200 text-xl tracking-tight"
      >
        Wonder Diaz
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div  :class="open ? 'block': 'hidden'"
    class="w-full block lg:flex lg:items-center lg:w-auto ">
      <div class="text-md lg:flex-grow my-1">
        <nuxt-link 
        :to="localePath('/')" 
        class="link-style hover:text-white">
        {{ $t('links.home') }}
      </nuxt-link>
        <nuxt-link
          :to="localePath('/portfolio')"
          class="link-style hover:text-white"
        >{{ $t('links.portfolio') }}</nuxt-link>
        <nuxt-link
          :to="localePath('/achievements')"
          class="link-style hover:text-white"
        >{{ $t('links.achievements') }}</nuxt-link>
        <nuxt-link
          :to="localePath('/experience')"
          class="link-style hover:text-white"
        >{{ $t('links.experience') }}</nuxt-link>
      </div>
      <div class>
        <div class="dropdown inline-block relative">
          <button
            class="bg-aqua-100 text-gray-900 hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span class="mr-1">{{ $t('links.language')}}</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-900 hover:text-white pt-1">
            <li class>
              <nuxt-link
                :to="switchLocalePath('en')"
                class="button-langs rounded-t hover:text-white"
                active-class="none"
                exact
                @click="setLanguage('pt')"
              >{{ $t('links.english')}}</nuxt-link>
            </li>
            <li class>
              <nuxt-link
                :to="switchLocalePath('pt')"
                class="button-langs hover:text-white"
                active-class="none"
                exact
                @click="setLanguage('pt')"
              >{{ $t('links.portuguese')}}</nuxt-link>
            </li>
            <li class>
              <nuxt-link
                :to="switchLocalePath('es')"
                class="button-langs rounded-b hover:text-white"
                active-class="none"
                exact
                @click="setLanguage('es')"
              >{{ $t('links.spanish')}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      open: false,
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    setLanguage(language) {
      sessionStorage.setItem('language', language);
    },
    toggle() {
      this.open = !this.open;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
      
    },
  },
  watch: {
    $route() {
      this.open = false;
    },
  },
};
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
#logo {
  filter: none;
}
nav.custom-nav {
  left: 1rem;
  transform: translate(-1rem);
  width: calc(100% - 1rem);
}
nav.scrolled {
  @apply shadow-2xl border-b-0;
}
.link-style {
  @apply block font-semibold text-aqua-100 rounded mr-4 text-base py-3 px-4;
}
.button-langs {
  @apply block font-semibold text-black bg-aqua-100 py-2 px-4;
}
.exact-active-link {
  @apply text-white
}
@media (min-width: 1024px) {
  .link-style {
    @apply inline-block mt-0;
  }
  .button-langs {
    @apply block mt-0;
  }
}
</style>
