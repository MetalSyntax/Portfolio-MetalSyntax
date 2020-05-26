<template>
    <nav class="flex items-center justify-between flex-wrap background_nav px-6 py-2 shadow-lg w-full z-10 sticky top-0" >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <nuxt-link :to="$i18n.path('')">
            <img
              id="logo"
              class="h-10 px-2 inline"
              src="../assets/img/icons/Logo-MS.png"
              alt="Logo"
            />
        </nuxt-link>
        <nuxt-link :to="$i18n.path('')" class="font-semibold hover:text-white text-gray-200 text-xl tracking-tight">
          Wonder Diaz<!--<glitch text="Wonder Diaz"></glitch>-->
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
      <!--<transition name="fade">-->
        <div :class="open ? 'block': 'hidden'"
              class="w-full block lg:flex lg:items-center lg:w-auto">
          <div  class="text-md lg:flex-grow my-1">
            <nuxt-link
              :to="$i18n.path('')"
              class="font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4"
            >{{ $t('links.home') }}</nuxt-link>
            <nuxt-link
              :to="$i18n.path('portfolio')"
              class="font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4"
            >{{ $t('links.portfolio') }}</nuxt-link>
            <nuxt-link
              :to="$i18n.path('achievements')"
              class="font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4"
            >{{ $t('links.achievements') }}</nuxt-link>
            <nuxt-link
              :to="$i18n.path('experience')"
              class="font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4"
            >{{ $t('links.experience') }}</nuxt-link>
          </div>
          <nuxt-link
            v-if="$i18n.locale === 'es'"
            :to="`/en` + $route.fullPath"
            class="font-semibold button_switch rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4 py-3 px-4"
            active-class="none"
            exact
          >{{ $t('links.english')}}</nuxt-link>
          <nuxt-link
            v-else-if="$i18n.locale === 'en'"
            :to="`/pt` + $route.fullPath.replace(/^\/[^\/]+/, '')"
            class="font-semibold button_switch rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4 py-3 px-4"
            active-class="none"
            exact
          >{{ $t('links.portuguese')}}</nuxt-link>
          <nuxt-link
            v-else
            :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
            class="font-semibold button_switch rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4 py-3 px-4"
            active-class="none"
            exact
          >{{ $t('links.spanish')}}</nuxt-link>
        </div>
      <!--</transition>-->
    </nav>
</template>

<script>
/*import Glitch from 'vue-glitch'*/

export default {
    name: 'Navigation',
    /*components: { Glitch },*/
    data() {
    return {
        open: false,
        langs: ["en", "es", "pt"],
        /*scrollPosition: null*/
      }
    },
    methods: {
        toggle() {
          this.open = !this.open;
        },
        /*updateScroll() {
          this.scrollPosition = window.scrollY
        },*/
      },
    /*mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },
    destroy() {
      window.removeEventListener('scroll', this.updateScroll)
    },*/
    watch: {
    '$route' () {
      this.open = false
    }
  }
}
</script>

<style>
/*.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}*/
</style>