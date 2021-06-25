<template>
  <footer class="footer">
      <div class="flex mb-0">
        <div
          class="w-full inline-flex content-center justify-center bg-grayblacked-100 pt-6 p-4 shadow-lg"
        >
          <div class="flex">
            <a class="p-1" href="https://behance.net/MetalSyntax" target="_blank">
              <img
                class="icons-social"
                src="../assets/img/social/behance.png"
                alt="Behance"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://github.com/metalsyntax" target="_blank">
              <img
                class="icons-social"
                src="../assets/img/social/github.png"
                alt="GitHub"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://linkedin.com/in/metalsyntax/" target="_blank">
              <img
                class="icons-social"
                src="../assets/img/social/linkedin.png"
                alt="Linkedin"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://twitter.com/MetalSyntax" target="_blank">
              <img
                class="icons-social"
                src="../assets/img/social/twitter.png"
                alt="Twitter"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="mailto:wonderdxk@gmail.com" target="_blank">
              <img
                class="icons-social"
                src="../assets/img/social/gmail.png"
                alt="Twitter"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://api.whatsapp.com/send?phone=584241143120" target="_blank">
              <img
                class="icons-social"
                src="../assets/img/social/whatsapp.png"
                alt="Twitter"
                height="35"
                width="35"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex mb-0">
        <div
          class="w-full inline-flex content-center justify-center bg-grayblacked-100 p-2 shadow-lg"
        >
          <div class="font-semibold text-sm flex flex-wrap justify-center">
            <nuxt-link
              :to="localePath('/')"
              class="link-footer-style hover:text-white"
            >{{ $t('links.home') }}</nuxt-link>
            <nuxt-link
              :to="localePath('/portfolio')"
              class="link-footer-style hover:text-white"
            >{{ $t('links.portfolio') }}</nuxt-link>
            <nuxt-link
              :to="localePath('/achievements')"
              class="link-footer-style hover:text-white"
            >{{ $t('links.achievements') }}</nuxt-link>
            <nuxt-link
              :to="localePath('/experience')"
              class="link-footer-style hover:text-white"
            >{{ $t('links.experience') }}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex mb-0">
        <div class="w-full bg-grayblacked-200 pb-4 p-2 shadow-lg">
          <p class="text-center text-gray-200">©{{ new Date().getFullYear() }} | {{ $t('footer.text') }}</p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
    return {
        /*langs: ["en", "es", "pt"]*/
        }
    },
    watch: {

  }
}
</script>

<style>
.icons-social {
  filter: none;
}
.link-footer-style {
  @apply block text-aqua-100 text-base p-2 rounded;
}
@media (min-width: 1024px) {
  .link-footer-style {
    @apply inline-block mt-0;
  }
}
</style>
