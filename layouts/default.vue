<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <Navigation />

    <nuxt />

    <Footer />

  </div>
</template>

<script>

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
/*import Glitch from 'vue-glitch'*/

export default {
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: "https://metalsyntax.vercel.app" + this.$route.path
        }
      ]
    };
  },
  data() {
    return {
      /*theme: "theme-light",*/
    };
  },
  methods: {
    /*toggleTheme() {
      this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
    }*/
  },
   watch: {

  },components: {
    Navigation,
    Footer
  },
  computed: {

  }
};
</script>

<style>

</style>
