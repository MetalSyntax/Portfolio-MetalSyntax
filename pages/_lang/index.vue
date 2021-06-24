<template>
  <div class="Content overflow-x-hidden">
    <section class="bg-gray-100">
      <div class="flex flex-wrap content-center py-8 px-4 bg-white shadow-xl full-display">
        <div class="w-full">
          <img class="mb-10 mx-auto rounded-full w-64 md:2/5 lg:w-1/5" src="~/assets/img/WonderDiazPhotoGrey.jpg" alt="Wonder Diaz"/>
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
          <!--<h3
            class="text-gray-900 font-regular text-center items-center text-2xl lg:text-3xl py-2"
          >{{ $t("home.subtitle") }}</h3>-->
        </div>
      </div>
    </section>
    <section class="sm:py-2 sm:px-2 lg:py-4 lg:px-4 bg-graylight-100">
      <div class="flex flex-wrap py-4 px-4">
        <div class="sm:w-full md:w-1/6 lg:w-1/6"></div>
        <div class="sm:w-full md:w-4/6 lg:w-4/6">
          <h3 class="text-gray-900 text-center text-2xl lg:text-3xl " v-html="$t('home.heroparagraph')"></h3>
        </div>
      </div>
      <div class="w-full ml-auto lg:py-4 mr-auto">
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="icon in icons" :key="icon.id">
              <picture class="flex justify-center">
                <source
                  :title="icon.title" 
                  :alt="icon.title"
                  :srcset="require(`~/assets/img/tech/${icon.image}.png?webp`)"
                  type="image/webp"
                />
                <source
                  :title="icon.title"
                  :alt="icon.title"
                  :srcset="require(`~/assets/img/tech/${icon.image}.png`)"
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
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center w-full py-4 px-4">
        <h2 class="text-center w-full py-4 text-3xl">{{$t('home.project')}}</h2>
        <div
          v-for="item in portfolio"
          v-bind:key="item.id"
          class="sm:w-full md:w-1/2 lg:w-1/3 px-2 justify-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="rounded-lg overflow-hidden shadow-lg mx-auto my-2 bg-white border-2 border-gray-100 hover:border-aqua-100">
            <a :href="item.link" target="_blank">
              <picture>
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/computers/${item.image}.jpg?webp`)"
                  type="image/webp"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/computers/${item.image}.jpg`)"
                  type="image/jpeg"
                />
                <img
                  class="w-full"
                  :src="require(`~/assets/img/computers/${item.image}.jpg`)"
                  :alt="item.title"
                  :title="item.title"
                />
              </picture>
            </a>
            <div>
              <a :href="item.link" target="_blank">
                <p
                  class="text-center text-gray-900 text-xl pt-2 font-semibold hover:text-aqua-200"
                >{{ item.title }}</p>
              </a>
              <p
                class="text-center text-aqua-100 font-semibold text-sm pb-1 block opacity-75"
              >{{ item.company }} - {{ item.year }}</p>
              <p class="text-gray-700 text-base text-center pb-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <nuxt-link
            :to="localePath('/portfolio')"
            class="block bg-aqua-100 text-xl text-black hover:text-white mt-4 px-4 py-2 border-2 rounded-lg"
          >
          {{ $t('home.more') }}
        </nuxt-link>
      </div>
      <!--<div class="py-4 px-2">
        <div class="flex flex-wrap -mx-2">
          <div
            v-for="item in items"
            :key="item.id"
            class="sm:w-full md:w-1/2 lg:w-1/3 px-4 py-2"
            data-aos="fade"
          >
            <div class="rounded overflow-hidden shadow-lg my-2 px-4 py-2 bg-white">
              <div class="px-4 py-4">
                <div class="font-bold text-xl mb-2 text-center">
                  <picture>
                    <source
                      :title="item.title"
                      :alt="item.title"
                      :srcset="
                        require(`~/assets/img/icons/${item.image}.png?webp`)
                      "
                      type="image/webp"
                    />
                    <source
                      :title="item.title"
                      :alt="item.title"
                      :srcset="require(`~/assets/img/icons/${item.image}.png`)"
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
      </div>-->
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

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
        effect: 'coverflow',
        //grabCursor: true,
        //centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        navigation: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
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
          title: "HTML5",
          image: "HTML5",
        },
        {
          title: "CSS",
          image: "CSS",
        },
        {
          title: "Javascript",
          image: "JS",
        },
        {
          title: "WordPress",
          image: "WordPress",
        },
        {
          title: "Vue",
          image: "Vuejs",
        },
        {
          title: "Nuxt",
          image: "Nuxt",
        },
        {
          title: "React",
          image: "Reactjs",
        },
        {
          title: "Flux Pattern Architecture in React",
          image: "ReactFlux",
        },
        {
          title: "Redux",
          image: "Redux",
        },
        {
          title: "Next",
          image: "Nextjs",
        },
        {
          title: "JSON",
          image: "JSON",
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
          title: "MongoDB",
          image: "Mongodb-new",
        },
        {
          title: "Apache Cordova",
          image: "ApacheCordova",
        },
        {
          title: "Python",
          image: "python",
        },
        {
          title: "Flask",
          image: "flask",
        },
        {
          title: "Bootstrap",
          image: "bootstrap",
        },
        {
          title: "Materialize",
          image: "materialize",
        },
        {
          title: "TailWind",
          image: "tailwindcss",
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
      portfolio: [
        {
          title: "Lior Pedidos App",
          company: "Freelance",
          year: "2020",
          description: this.$t("portfolio.project27"),
          link: "https://lior-app.vercel.app/",
          image: "Lior-Pedidos-App",
        },
        {
          title: "Syntax Project Next",
          company: "Personal",
          year: "2020",
          description: this.$t("portfolio.project26"),
          link: "https://syntax-project-next.now.sh/",
          image: "Syntax-Project-Next",
        },
        {
          title: "Radio Caribe",
          company: "Freelance",
          year: "2019",
          description: this.$t("portfolio.project25"),
          link: "http://www.radiocaribe.com/",
          image: "radiocaribe",
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
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
:root {
--swiper-navigation-color: #00c08b !important;
--swiper-theme-color: #00c08b !important;
}
</style>
