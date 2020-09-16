<template>
  <footer class="footer">
      <div class="flex mb-0">
        <div
          class="w-full inline-flex content-center justify-center bg-grayblacked-100 pt-4 p-2 shadow-lg"
        >
          <div class="flex">
            <a class="p-1" href="https://behance.net/MetalSyntax">
              <img
                class="icons-social"
                src="../assets/img/social/behance.png"
                alt="Behance"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://github.com/metalsyntax">
              <img
                class="icons-social"
                src="../assets/img/social/github.png"
                alt="GitHub"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://linkedin.com/in/metalsyntax/">
              <img
                class="icons-social"
                src="../assets/img/social/linkedin.png"
                alt="Linkedin"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://twitter.com/MetalSyntax">
              <img
                class="icons-social"
                src="../assets/img/social/twitter.png"
                alt="Twitter"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="mailto:wonderdxk@gmail.com">
              <img
                class="icons-social"
                src="../assets/img/social/gmail.png"
                alt="Twitter"
                height="35"
                width="35"
              />
            </a>
            <a class="p-1" href="https://api.whatsapp.com/send?phone=584241143120">
              <img
                class="icons-social"
                src="../assets/img/social/whatsapp.png"
                alt="Twitter"
                height="35"
                width="35"
              />
            </a>
            <!--<a class="p-1" href="https://www.instagram.com/metalsyntax/">
              <img
                class="icons-social"
                src="../assets/img/social/instagram.png"
                alt="Instagram"
                height="35"
                width="35"
              />
            </a>-->
            <!--<a class="p-1" href="https://www.facebook.com/MetalSyntax1101/">
              <img
                class="icons-social"
                src="../assets/img/social/facebook.png"
                alt="Facebook"
                height="35"
                width="35"
              />
            </a>-->
          </div>
        </div>
      </div>
      <div class="flex mb-0">
        <div
          class="w-full inline-flex content-center justify-center bg-grayblacked-100 p-2 shadow-lg"
        >
          <div class="font-semibold text-sm flex">
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
          <p class="text-center text-gray-200">© Copyright {{ new Date().getFullYear() }} | {{ $t('footer.text') }}</p>
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
