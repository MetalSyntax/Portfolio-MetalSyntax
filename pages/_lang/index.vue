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
              $t('home.industrialengineer'),
              $t('home.webdeveloper'),
              $t('home.webdesing')
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
        </div>
      </div>
    </section>
    <section class="sm:py-2 sm:px-2 lg:py-4 lg:px-4 bg-graylight-100">
      <div class="flex flex-wrap px-4 py-6 lg:p-4 sm:w-full md:w-4/6 lg:w-4/6 mx-auto my-0">
        <h3 class="text-gray-900 text-center text-2xl lg:text-3xl" v-html="$t('home.heroparagraph')"></h3>
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
      </section>
      <section class="flex flex-wrap justify-center w-full py-6 px-4 bg-graylight-100">
        <h2 class="text-center w-full py-4 text-3xl">{{$t('home.project')}}</h2>
        <div
          v-for="item in portfolio"
          v-bind:key="item.id"
          class="sm:w-full md:w-1/3 lg:w-1/4 px-2 justify-center"
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
                  :srcset="require(`~/assets/img/projects/${item.image}-.jpg?webp`)"
                  type="image/webp"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/projects/${item.image}-.jpg`)"
                  type="image/jpeg"
                />
                <img
                  class="w-full"
                  :src="require(`~/assets/img/projects/${item.image}-.jpg`)"
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
              <p class="text-gray-700 text-base text-center p-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <nuxt-link
            :to="localePath('/portfolio')"
            class="block bg-aqua-100 text-xl text-black hover:text-white mt-4 px-4 py-2 border-2 rounded-lg"
          >
          {{ $t('home.more') }}
        </nuxt-link>
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
          title: this.$t("home.engineering"),
          text: this.$t("home.text1"),
          alt: "Engineering",
          image: "engineer",
        },
        {
          title: this.$t("home.developing"),
          text: this.$t("home.text2"),
          alt: "Source Code",
          image: "interface",
        },
        {
          title: this.$t("home.design"),
          text: this.$t("home.text3"),
          alt: "Design",
          image: "tool",
        },
        {
          title: this.$t("home.marketing"),
          text: this.$t("home.text4"),
          alt: "Commercial",
          image: "tools-and-utensils",
        },
        {
          title: this.$t("home.analysis"),
          text: this.$t("home.text5"),
          alt: "Graph",
          image: "seo-and-web",
        },
        {
          title: this.$t("home.support"),
          text: this.$t("home.text6"),
          alt: "Service",
          image: "communications",
        },
      ],
      portfolio: [
        {
          title: "Syntax Stream",
          company: "Personal",
          year: "2021",
          description: this.$t("portfolio.syntaxstream"),
          link: "https://www.behance.net/gallery/121536125/Stream-Syntax",
          image: "Syntax-Stream",
        },
        {
          title: "The Senior Care Foundation",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.theseniorcarefoundation"),
          link: "https://theseniorcarefoundation.org/",
          image: "TSCF",
        },
        {
          title: "Lior Pedidos App",
          company: "Freelance",
          year: "2020",
          description: this.$t("portfolio.liorapp"),
          link: "https://lior-app.vercel.app/",
          image: "Lior-App",
        },
        {
          title: "Syntax Project Next",
          company: "Personal",
          year: "2020",
          description: this.$t("portfolio.syntaxprojectnext"),
          link: "https://syntax-project-next.now.sh/",
          image: "Tech-Cube",
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
  @apply bg-graylight-200 bg-center bg-no-repeat;
  height: calc(100vh - 56px);
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
