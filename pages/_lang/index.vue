<template>
  <div class="Content overflow-x-hidden">
    <div class="bg-gray-100">
      <div class="flex flex-wrap content-center py-8 px-4 bg-white shadow-xl full-display">
        <div class="w-full">
          <h1
            class="text-gray-900 font-semibold items-center text-center text-4xl lg:text-5xl py-2"
          >Wonder Díaz</h1>
          <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('home.titletyped1'),
              $t('home.titletyped2'),
              $t('home.titletyped3')
            ]"
            :loop="true"
            :showCursor="false"
            :typeSpeed="100"
          >
            <h2 class="text-aqua-100 font-medium text-center items-center text-3xl lg:text-4xl">
              &lt;
              <span class="typing"></span>/&gt;
            </h2>
          </vue-typed-js>
          <h3
            class="text-gray-900 font-regular text-center items-center text-2xl lg:text-3xl py-2"
          >{{ $t("home.subtitle") }}</h3>
        </div>
      </div>
    </div>
    <div class="sm:py-2 sm:px-2 lg:py-4 lg:px-4 bg-graylight-100">
      <div class="flex flex-wrap py-4 px-4">
        <div class="sm:w-full md:w-1/6 lg:w-1/6"></div>
        <div class="sm:w-full md:w-4/6 lg:w-4/6">
          <p class="text-gray-900 text-center text-xl">
            {{ $t("home.heroparagraph2") }}
            <strong>HTML5, CSS3, JavaScript, JSON, PHP, SQL, NoSQL</strong>
            .
            {{ $t("home.heroparagraph3") }}
            <strong>
              JQuery, WebPack, Vue, Nuxt, React, Next.js, Node.js, Sass,
              Materialize, Bootstrap, TailWindCss, WordPress
            </strong>
            ,
            {{ $t("home.heroparagraph4") }}
          </p>
        </div>
      </div>
      <div class="w-full ml-auto mr-auto">
        <!--<div
          class="justify-center w-24 md:w-3/12 lg:w-2/12 xl:w-1/12"
          v-for="icon in icons"
          v-bind:key="icon"
          data-aos="fade"
        >
          <picture>
            <source
              :title="icon.title"
              :alt="icon.title"
              :src="require(`~/assets/img/tech/${icon.image}.png?webp`)"
              type="image/webp"
            />
            <source
              :title="icon.title"
              :alt="icon.title"
              :src="require(`~/assets/img/tech/${icon.image}.png`)"
              type="image/png"
            />
            <img
              class="w-full p-1 px-2 inline"
              :title="icon.title"
              :src="require(`~/assets/img/tech/${icon.image}.png`)"
              :alt="icon.title"
            />
          </picture>
        </div>-->
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="icon in icons" v-bind:key="icon">
            <picture class="flex justify-center">
              <source
                :title="icon.title"
                :alt="icon.title"
                :src="require(`~/assets/img/tech/${icon.image}.png?webp`)"
                type="image/webp"
              />
              <source
                :title="icon.title"
                :alt="icon.title"
                :src="require(`~/assets/img/tech/${icon.image}.png`)"
                type="image/png"
              />
              <img
                class="w-32 p-1 px-2 inline"
                :title="icon.title"
                :src="require(`~/assets/img/tech/${icon.image}.png`)"
                :alt="icon.title"
              />
            </picture>
          </swiper-slide>
        </swiper>
        <!--<div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="icon in icons" v-bind:key="icon">
              <picture>
                <source
                  :title="icon.title"
                  :alt="icon.title"
                  :src="require(`~/assets/img/tech/${icon.image}.png?webp`)"
                  type="image/webp"
                />
                <source
                  :title="icon.title"
                  :alt="icon.title"
                  :src="require(`~/assets/img/tech/${icon.image}.png`)"
                  type="image/png"
                />
                <img
                  class="w-32 p-1 px-2 inline"
                  :title="icon.title"
                  :src="require(`~/assets/img/tech/${icon.image}.png`)"
                  :alt="icon.title"
                />
              </picture>
            </div>
          </div>
        </div>-->
      </div>
      <div class="py-4 px-2">
        <div class="flex flex-wrap -mx-2">
          <div
            v-for="item in items"
            v-bind:key="item.id"
            class="sm:w-full md:w-1/2 lg:w-1/3 px-4 py-2"
            data-aos="fade"
          >
            <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
              <div class="px-4 py-4">
                <div class="font-bold text-xl mb-2 text-center">
                  <picture>
                    <source
                      :title="item.title"
                      :alt="item.title"
                      :src="
                        require(`~/assets/img/icons/${item.image}.png?webp`)
                      "
                      type="image/webp"
                    />
                    <source
                      :title="item.title"
                      :alt="item.title"
                      :src="require(`~/assets/img/icons/${item.image}.png`)"
                      type="image/png"
                    />
                    <img
                      class="h-10 lg:h-16 px-2 inline skills"
                      :src="require(`~/assets/img/icons/${item.image}.png`)"
                      :alt="item.title"
                    />
                  </picture>
                  <h3>{{ item.title }}</h3>
                </div>
                <p class="text-gray-900 text-base text-center">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("head.home"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("description.home"),
        },
      ],
    };
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      },
      icons: [
        {
          title: "WordPress",
          image: "WordPress",
        },
        {
          title: "Nuxt",
          image: "Nuxt",
        },
        {
          title: "Next",
          image: "Nextjs",
        },
        {
          title: "TailWind",
          image: "tailwindcss",
        },
        {
          title: "MongoDB",
          image: "Mongodb-new",
        },
        {
          title: "Node",
          image: "NodeJS-black",
        },
        {
          title: "Express",
          image: "express-trans",
        },
        {
          title: "Vue",
          image: "Vuejs",
        },
        {
          title: "React",
          image: "Reactjs",
        },
        {
          title: "Python",
          image: "Python-trans",
        },
        {
          title: "Flask",
          image: "flask",
        },
        {
          title: "Bootstrap",
          image: "bootstrap4",
        },
        {
          title: "Adobe XD",
          image: "AdobeXD",
        },
        {
          title: "Photoshop",
          image: "photoshop-v2",
        },
        {
          title: "Illustrator",
          image: "illustrator-v2",
        },
        {
          title: "Figma",
          image: "Figma",
        },
      ],
      items: [
        {
          title: this.$t("home.title1"),
          text: this.$t("home.text1"),
          alt: "Engineering",
          image: "engineer",
        },
        {
          title: this.$t("home.title2"),
          text: this.$t("home.text2"),
          alt: "Source Code",
          image: "interface",
        },
        {
          title: this.$t("home.title3"),
          text: this.$t("home.text3"),
          alt: "Design",
          image: "tool",
        },
        {
          title: this.$t("home.title4"),
          text: this.$t("home.text4"),
          alt: "Commercial",
          image: "tools-and-utensils",
        },
        {
          title: this.$t("home.title5"),
          text: this.$t("home.text5"),
          alt: "Graph",
          image: "seo-and-web",
        },
        {
          title: this.$t("home.title6"),
          text: this.$t("home.text6"),
          alt: "Service",
          image: "communications",
        },
      ],
    };
  },
};
</script>

<style>
.skills {
  filter: none;
}
.skills:hover {
  filter: grayscale(100);
}
.full-display {
  @apply bg-graylight-200 bg-center bg-no-repeat h-screen;
  background-blend-mode: normal;
}
@media (min-width: 1023px) {
  .full-display {
    height: calc(100vh - 72px);
    background-image: url("../../assets/img/background/home-background-white.jpg");
  }
}
</style>
