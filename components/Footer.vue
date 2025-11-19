<template>
  <footer class="footer">
    <section
      class="flex flex-wrap justify-center lg:justify-between items-center w-full py-6 px-4 bg-ui-bg bg-gradient-to-b"
    >
      <h3 class="text-nvxl lg:text-2xl text-center lg:text-left leading-5 text-white font-bold">
        {{ $t("home.calltoaction") }}
      </h3>
      <a
        class="flex flex-wrap justify-center items-center bg-nuxt-green text-xl text-nuxt-dark hover:bg-white mt-4 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-nuxt-green/20 font-bold"
        href="mailto:wonderdxk@gmail.com"
        >{{ $t("home.contact") }}</a
      >
    </section>
    <section class="flex mb-0">
      <div
        class="w-full inline-flex content-center justify-center bg-ui-bg pt-6 p-4 shadow-lg"
      >
        <div class="flex gap-4">
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://linktr.ee/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/linktree.png"
              alt="Linktree"
              height="35"
              width="35"
            /> 
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://behance.net/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/behance.png"
              alt="Behance"
              height="35"
              width="35"
            /> 
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://github.com/metalsyntax" target="_blank">
            <img
              class="icons-social invert"
              src="../assets/img/social/github.png"
              alt="GitHub"
              height="35"
              width="35"
            /> 
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://x.com/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/twitterx.png"
              alt="Twitter"
              height="35"
              width="35"
            /> 
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="mailto:wonderdxk@gmail.com" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/gmail.png"
              alt="Gmail"
              height="35"
              width="35"
            /> 
          </a>
          <a
            class="p-1 hover:scale-110 transition-transform duration-300"
            href="https://api.whatsapp.com/send?phone=584123654728"
            target="_blank"
          >
            <img
              class="icons-social"
              src="../assets/img/social/whatsapp.png"
              alt="WhatsApp"
              height="35"
              width="35"
            /> 
          </a>
        </div>
      </div>
    </section>
    <section class="flex mb-0">
      <div
        class="w-full inline-flex content-center justify-center bg-ui-bg p-2 shadow-lg"
      >
        <div class="font-semibold text-sm flex flex-wrap justify-center">
          <nuxt-link
            :to="localePath('/')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t("links.home") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/portfolio')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t("links.portfolio") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/achievements')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t("links.achievements") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/experience')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t("links.experience") }}</nuxt-link
          >
        </div>
      </div>
    </section>
    <div class="flex mb-0">
      <div class="w-full bg-ui-bg pb-4 p-2">
        <p class="text-center text-gray-500 text-sm">
          ©{{ new Date().getFullYear() }} | {{ $t("footer.text") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  watch: {},
};
</script>

<style>
.icons-social {
  filter: none;
}
.link-footer-style {
  @apply block text-gray-400 text-base p-2 rounded;
}
@media (min-width: 1024px) {
  .link-footer-style {
    @apply inline-block mt-0;
  }
}
</style>
