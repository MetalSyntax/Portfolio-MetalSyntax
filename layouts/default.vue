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
          href: "https://metalsyntax.000webhostapp.com" + this.$route.path
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
#logo {
  filter: none;
}
.icons-social {
  filter: none;
}
.link {
  color: #00c08b;
}
.link-footer {
  color: #00c08b;
}
.link-footer:hover {
  color: #e2e8f0;
}
.link:hover {
  color: #e2e8f0;
}
.button_switch {
  background: #00c08b;
}
button:focus {
  outline: 0px auto white;
}
.background_nav {
  background: #00100b;
}
.background_footer {
  background: #001810;
}
.background_copy {
  background: #00100b;
}
.title-background {
  background: #00976D;
}
.title-hover:hover{
  color:#00976D;
}
</style>
