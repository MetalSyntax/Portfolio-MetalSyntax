<template>
  <footer class="footer">
    <section
      class="flex flex-wrap justify-center lg:justify-between items-center w-full py-6 px-4 bg-graylight-200"
    >
      <h3 class="text-nvxl lg:text-2xl text-center lg:text-left leading-5">
        {{ $t("home.calltoaction") }}
      </h3>
      <a
        class="flex flex-wrap justify-center items-center bg-aqua-100 text-xl text-black hover:text-aqua-200 hover:bg-white mt-4 px-4 py-2 border-2 hover:border-aqua-100 rounded-lg"
        href="mailto:wonderdxk@gmail.com"
        >{{ $t("home.contact") }}</a
      >
    </section>
    <section class="flex mb-0">
      <div
        class="w-full inline-flex content-center justify-center bg-grayblacked-100 pt-6 p-4 shadow-lg"
      >
        <div class="flex">
          <a class="p-1" href="https://linktr.ee/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/linktree.png"
              alt="Linktree"
              height="35"
              width="35"
            /> 
            <!--<nuxt-img
              class="icons-social"
              format="webp"
              quality="80"
              src="/img/social/linktree.png"
              alt="Linktree"
              width="35"
              height="35"
              loading="lazy"
              placeholder
            /> -->
          </a>
          <a class="p-1" href="https://behance.net/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/behance.png"
              alt="Behance"
              height="35"
              width="35"
            /> 
            <!--<nuxt-img
              class="icons-social"
              format="webp"
              quality="80"
              src="/img/social/behance.png"
              alt="Behance"
              width="35"
              height="35"
              loading="lazy"
              placeholder
            /> -->
          </a>
          <a class="p-1" href="https://github.com/metalsyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/github.png"
              alt="GitHub"
              height="35"
              width="35"
            /> 
            <!--<nuxt-img
              class="icons-social"
              format="webp"
              quality="80"
              src="/img/social/github.png"
              alt="GitHub"
              width="35"
              height="35"
              loading="lazy"
              placeholder
            /> -->
          </a>
          <a class="p-1" href="https://x.com/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/twitterx.png"
              alt="Twitter"
              height="35"
              width="35"
            /> 
            <!--<nuxt-img
              class="icons-social"
              format="webp"
              quality="80"
              src="/img/social/twitterx.png"
              alt="Twitter"
              width="35"
              height="35"
              loading="lazy"
              placeholder
            /> -->
          </a>
          <a class="p-1" href="mailto:wonderdxk@gmail.com" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/gmail.png"
              alt="Gmail"
              height="35"
              width="35"
            /> 
            <!--<nuxt-img
              class="icons-social"
              format="webp"
              quality="80"
              src="/img/social/gmail.png"
              alt="Gmail"
              width="35"
              height="35"
              loading="lazy"
              placeholder
            /> -->
          </a>
          <a
            class="p-1"
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
            <!--<nuxt-img
              class="icons-social"
              format="webp"
              quality="80"
              src="/img/social/whatsapp.png"
              alt="WhatsApp"
              width="35"
              height="35"
              loading="lazy"
              placeholder
            /> -->
          </a>
        </div>
      </div>
    </section>
    <section class="flex mb-0">
      <div
        class="w-full inline-flex content-center justify-center bg-grayblacked-100 p-2 shadow-lg"
      >
        <div class="font-semibold text-sm flex flex-wrap justify-center">
          <nuxt-link
            :to="localePath('/')"
            class="link-footer-style hover:text-white"
            >{{ $t("links.home") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/portfolio')"
            class="link-footer-style hover:text-white"
            >{{ $t("links.portfolio") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/achievements')"
            class="link-footer-style hover:text-white"
            >{{ $t("links.achievements") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/experience')"
            class="link-footer-style hover:text-white"
            >{{ $t("links.experience") }}</nuxt-link
          >
        </div>
      </div>
    </section>
    <div class="flex mb-0">
      <div class="w-full bg-grayblacked-100 pb-4 p-2">
        <p class="text-center text-gray-200">
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
  @apply block text-aqua-100 text-base p-2 rounded;
}
@media (min-width: 1024px) {
  .link-footer-style {
    @apply inline-block mt-0;
  }
}
</style>
