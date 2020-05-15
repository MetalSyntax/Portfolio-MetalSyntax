<template>
  <footer class="footer">
      <div class="flex mb-0">
        <div
          class="w-full inline-flex content-center justify-center background_footer pt-4 p-2 shadow-lg"
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
            <a class="p-1" href="https://www.instagram.com/metalsyntax/">
              <img
                class="icons-social"
                src="../assets/img/social/instagram.png"
                alt="Instagram"
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
            <a class="p-1" href="https://www.facebook.com/MetalSyntax1101/">
              <img
                class="icons-social"
                src="../assets/img/social/facebook.png"
                alt="Facebook"
                height="35"
                width="35"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex mb-0">
        <div
          class="w-full inline-flex content-center justify-center background_footer p-2 shadow-lg"
        >
          <div class="font-semibold text-sm flex">
            <nuxt-link
              :to="$i18n.path('')"
              class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded"
            >{{ $t('links.home') }}</nuxt-link>
            <nuxt-link
              :to="$i18n.path('portfolio')"
              class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded"
            >{{ $t('links.portfolio') }}</nuxt-link>
            <nuxt-link
              :to="$i18n.path('achievements')"
              class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded"
            >{{ $t('links.achievements') }}</nuxt-link>
            <nuxt-link
              :to="$i18n.path('experience')"
              class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded"
            >{{ $t('links.experience') }}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex mb-0">
        <div class="w-full background_copy pb-4 p-2 shadow-lg">
          <p class="text-center text-gray-200">© {{ new Date().getFullYear() }} | {{ $t('footer.text') }}</p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
    return {
        langs: ["en", "es", "pt"]
        }
    },
    watch: {
    
  }
}
</script>

<style>

</style>