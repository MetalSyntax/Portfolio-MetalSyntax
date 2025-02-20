<template>
  <div class="Content overflow-x-hidden">
    <section class="relative flex items-center justify-center h-screen overflow-hidden bg-graylight-400">
      <div class="flex flex-wrap content-center z-10 py-8 px-4">
        <div class="w-full">
          <img class="mb-10 mx-auto rounded-full w-64 md:2/5 lg:w-2/3" src="~/assets/img/WonderDiazPhoto.jpg" alt="Wonder Diaz"/>
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
      <video autoplay loop muted class="absolute z-1 w-auto min-w-full min-h-full max-w-none md:hidden lg:block">
        <source
          src="https://res.cloudinary.com/metalsyntax/video/upload/v1691212423/MetalSyntax-Banner-White_gndunm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section class="sm:py-2 sm:px-2 lg:py-4 lg:px-4 bg-graylight-100">
      <!--<div class="flex flex-wrap justify-center px-4 py-6 lg:p-4 sm:w-full md:w-4/5 lg:w-5/6 mx-auto my-0">
        <h2 class="text-gray-900 text-center pb-4 text-2xl lg:text-3xl w-full" v-html="$t('home.titleaboutme')"></h2>
        <p class="text-gray-900 text-left text-l pb-4 md:pb-2 lg:text-xl" v-html="$t('home.aboutmetext1')"></p>
        <p class="text-gray-900 text-left text-l pb-4 md:pb-2 lg:text-xl" v-html="$t('home.aboutmetext2')"></p>
      </div>-->
      <div class="flex flex-wrap justify-center py-6 sm:w-full md:w-full lg:w-full mx-auto my-0">
        <h2 class="text-gray-900 text-center pb-4 text-2xl lg:text-3xl w-full" v-html="$t('home.titleexperience')"></h2>
        <div
          v-for="item in experience"
          v-bind:key="item.id"
          class="w-full md:w-full lg:w-1/3 xl:w-1/3 px-2 py-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="md:flex md:flex-wrap rounded overflow-hidden shadow-lg mx-2 my-2 bg-white border-2 border-white rounded-lg hover:border-aqua-100">
            <a class="px-2 py-2 w-3/4 md:w-1/3 m-auto" :href="item.website !== '#' ? `https://${item.website}` : item.website" :target="item.website == '#' ? '' : '_blank'">
            <picture >
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/bussines/${item.image}.png?webp`)"
                  type="image/webp"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/bussines/${item.image}.png`)"
                  type="image/png"
                />
                <img
                  class="mx-auto rounded-lg w-48"
                  :src="require(`~/assets/img/bussines/${item.image}.png`)"
                  :alt="item.title"
                  :title="item.title"
                />
              </picture>
              </a>
            <div
              class="md:flex md:flex-wrap px-2 py-2 md:w-2/3 justify-center md:justify-start lg:justify-start xl:justify-start items-center"
            >
              <h2
                class="font-bold text-xl mb-2 sm:text-center md:text-left lg:text-left w-full"
              >
                {{ item.title }}
              </h2>
              <p
                class="text-gray-700 text-base sm:text-center md:text-left lg:text-left w-full"
              >
                {{ item.yearfirst }} - {{ item.yearlast }}
              </p>
              <a class="text-left" :href="item.website !== '#' ? `https://${item.website}` : item.website" :target="item.website == '#' ? '' : '_blank'">
              <p
                class="text-gray-700 text-base sm:text-center md:text-left lg:text-left w-full text-aqua-200"
              >
                {{ item.company }}
              </p>
              </a>
              <ul class="list-disc text-center md:text-left w-full">
                <li class="list-none">{{ item.task1 }}</li>
                <li class="list-none">{{ item.task2 }}</li>
                <li class="list-none">{{ item.task3 }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
        <nuxt-link
            :to="localePath('/experience')"
            class="flex flex-wrap justify-center items-center bg-aqua-100 text-xl text-black hover:text-aqua-200 hover:bg-white mt-4 px-4 py-2 border-2 hover:border-aqua-100 rounded-lg"
          >
          {{ $t('home.more') }}
        </nuxt-link>
      </div>
      </div>
      <div class="flex flex-wrap justify-center px-4 py-6 lg:p-4 sm:w-full md:w-4/5 lg:w-5/6 mx-auto my-0">
        <h2 class="text-gray-900 text-center pb-4 text-2xl lg:text-3xl w-full" v-html="$t('home.titleskills')"></h2>
        <!---<p class="text-gray-900 text-left text-l lg:text-xl" v-html="$t('home.skillstext')"></p>--->
      </div>
      <div class="w-full ml-auto lg:py-4 mr-auto">
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide bg-white rounded-full flex items-center justify-center text-center p-1" v-for="icon in icons" :key="icon.id">
              <picture class="flex justify-center align-center">
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
                  class="w-16 p-1 px-2 inline"
                  :title="icon.title"
                  :src="require(`~/assets/img/tech/${icon.image}.png`)"
                  :alt="icon.title"
                />
              </picture>
              <p class="text-center text-sm">{{ icon.title }}</p>
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
          class="sm:w-full md:w-1/2 lg:w-1/4 px-2 justify-center"
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
              <picture class="flex justify-center align-center">
                <source
                  :title="item.iconTitle" 
                  :alt="item.iconTitle"
                  :srcset="require(`~/assets/img/tech/${item.iconImage}.png?webp`)"
                  type="image/webp"
                  loading="lazy"
                  @error="handleImageError"
                />
                <source
                  :title="item.iconTitle"
                  :alt="item.iconTitle"
                  :srcset="require(`~/assets/img/tech/${item.iconImage}.png`)"
                  type="image/png"
                  loading="lazy"
                  @error="handleImageError"
                />
                <img
                  class="w-12 p-1 px-2 inline"
                  :title="item.iconTitle"
                  :src="require(`~/assets/img/tech/${item.iconImage}.png`)"
                  :alt="item.iconTitle"
                  loading="lazy"
                  @error="handleImageError"
                />
              </picture>
            </div>
          </div>
        </div>
        <nuxt-link
            :to="localePath('/portfolio')"
            class="flex flex-wrap justify-center items-center bg-aqua-100 text-xl text-black hover:text-aqua-200 hover:bg-white mt-4 px-4 py-2 border-2 hover:border-aqua-100 rounded-lg"
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
        slidesPerView: 8,
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
            slidesPerView: 7,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
      experience: [
        {
          title: this.$t("experience.redgage"),
          yearfirst: "2021",
          yearlast: this.$t("experience.status"),
          company: "RedGage, LLC.",
          website: "www.redgage.com",
          task1: this.$t("experience.task1redgage"),
          task2: this.$t("experience.task2redgage"),
          task3: this.$t("experience.task3redgage"),
          image: "redgage"
        },
        {
          title: this.$t("experience.uts"),
          yearfirst: "2024",
          yearlast: "2024",
          company: "Instituto Universitario de tecnología Antonio José de Sucre",
          website: "www.uts.edu.ve",
          task1: this.$t("experience.task1uts"),
          task2: this.$t("experience.task2uts"),
          task3: this.$t("experience.task3uts"),
          image: "uts"
        },
        {
          title: this.$t("experience.komax"),
          yearfirst: "2023",
          yearlast: "2024",
          company: "Komax, S.A.",
          website: "www.komax.cl",
          task1: this.$t("experience.task1komax"),
          task2: this.$t("experience.task2komax"),
          task3: this.$t("experience.task3komax"),
          image: "komax_sa"
        }
      ],
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
          title: "Typescript",
          image: "typescript",
        },
        {
          title: "WordPress",
          image: "WordPress",
        },
        {
          title: "Magento 2",
          image: "magento-2",
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
          title: "Flux",
          image: "flux",
        },
        {
          title: "Redux",
          image: "Redux",
        },
        {
          title: "Next",
          image: "next-js",
        },
        {
          title: "Jest",
          image: "Jest-",
        },
        {
          title: "JSON",
          image: "JSON",
        },
        {
          title: "Node.js",
          image: "nodejs",
        },
        {
          title: "Webpack",
          image: "webpack",
        },
        {
          title: "Babel",
          image: "babel",
        },
        {
          title: "Express",
          image: "express",
        },
        {
          title: "Git",
          image: "Git",
        },
        {
          title: "GitHub",
          image: "github",
        },
        {
          title: "MongoDB",
          image: "mongodb-original",
        },
        {
          title: "Mysql",
          image: "mysql-",
        },
        {
          title: "Postgresql",
          image: "Postgresql",
        },
        {
          title: "Apache Cordova",
          image: "cordova",
        },
        {
          title: "Phonegap",
          image: "phonegap",
        },
        {
          title: "Ionic",
          image: "ionic",
        },
        {
          title: "Expo",
          image: "expo",
        },
        {
          title: "SAP AppGyver",
          image: "AppGyver",
        },
        {
          title: "Bubble",
          image: "bubble",
        },
        {
          title: "PHP",
          image: "PHP",
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
          title: "Postman",
          image: "postman",
        },
        {
          title: "Docker",
          image: "Docker",
        },
        {
          title: "Jenkins",
          image: "Jenkins",
        },
        {
          title: "Vercel",
          image: "vercel",
        }, 
        {
          title: "Netlify",
          image: "netlify-n",
        },
        {
          title: "cPanel",
          image: "CPanel",
        },
        {
          title: "CyberPanel",
          image: "cyberpanel",
        },
        {
          title: "TestFlight",
          image: "TestFlight",
        },
        {
          title: "LESS",
          image: "less",
        },
        {
          title: "SASS",
          image: "sass",
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
          title: "Figma",
          image: "Figma",
        },
        {
          title: "Adobe XD",
          image: "AdobeXD",
        },
        {
          title: "Adobe Photoshop",
          image: "photoshop-v2",
        },
        {
          title: "Adobe Illustrator",
          image: "illustrator-v2",
        },
        {
          title: "Adobe InDesign",
          image: "Adobe_InDesign",
        },
        {
          title: "Blender",
          image: "Blender",
        },
        /*{
          title: "Adobe Express",
          image: "Adobe_Express",
        },
        {
          title: "Canva",
          image: "canva",
        },*/
        {
          title: "Notion",
          image: "Notion",
        },
        {
          title: "Microsoft Office",
          image: "Microsoft_365",
        },
        {
          title: "Microsoft VBA",
          image: "vba",
        },
        /*{
          title: "ChatGPT",
          image: "ChatGPT",
        },
        {
          title: "Antropic Claude",
          image: "claude",
        },
        {
          title: "Google Gemini",
          image: "google-gemini",
        },
        {
          title: "Microsoft Copilot",
          image: "copilot",
        },*/
      ],
      /*items: [
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
      ],*/
      portfolio: [
        {
          title: "Solufar - Recetario Magistral",
          company: "Freelance",
          year: "2025",
          description: this.$t("portfolio.solufar"),
          link: "https://www.behance.net/gallery/217321013/Recetario-Magistral-Solufar",
          image: "solufar",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "The North Face - Circular Design",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.circulardesign"),
          link: "https://www.behance.net/gallery/200987549/Circular-Design-Landing-The-North-Face-Peru",
          image: "tnf",
          iconTitle: "Magento 2",
          iconImage: "magento-2"
        },
        {
          title: "Business Market Finders",
          company: "Genesis Agency",
          year: "2023",
          description: this.$t("portfolio.businessmarketfinders"),
          link: "https://www.behance.net/gallery/175709925/Business-Market-Finders",
          image: "bmf",
          iconTitle: "SAP AppGyver",
          iconImage: "AppGyver"
        },
        {
          title: "Work To Earn",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.worktoearn"),
          link: "https://www.behance.net/gallery/153310391/Work-To-Earn",
          image: "worktoearn",
          iconTitle: "WordPress",
          iconImage: "WordPress"
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
  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
    }
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
    background-image: url("../../assets/img/background/home-background.jpg");
  }
}
:root {
--swiper-navigation-color: #00c08b !important;
--swiper-theme-color: #00c08b !important;
}
</style>
