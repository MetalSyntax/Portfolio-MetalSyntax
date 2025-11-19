<template>
  <div class="Content overflow-x-hidden">
    <section
      class="relative flex items-center justify-center h-screen overflow-hidden bg-ui-bg bg-gradient-to-b"
      style="--tw-gradient-from: color-mix(in oklab, var(--ui-bg-muted) 40%, transparent);"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-nuxt-green/20 to-transparent opacity-30 rounded-full blur-3xl"></div>
        <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-ui-bg"></div>
      </div>

      <div class="flex flex-wrap content-center z-10 py-8 px-4 relative">
        <div class="w-full text-center">
          <div class="relative inline-block mb-10">
             <div class="absolute inset-0 bg-nuxt-green blur-xl opacity-20 rounded-full"></div>
             <img
              class="relative rounded-full w-48 md:w-64 lg:w-72 border-4 border-aqua-200 shadow-2xl"
              src="~/assets/img/WonderDiazPhoto.jpg"
              alt="Wonder Diaz"
              width="500px"
              height="500px"
            />
          </div>
         
          <h1
            class="font-bold items-center text-center text-5xl lg:text-7xl py-4 tracking-tight"
          >
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Wonder Díaz
            </span>
          </h1>
          <vue-typed-js
            class="justify-center py-4"
            :strings="[
              $t('home.industrialengineer'),
              $t('home.webdeveloper'),
              $t('home.webdesing'),
            ]"
            :loop="true"
            :showCursor="true"
            :cursorChar="'_'"
            :typeSpeed="50"
            :backSpeed="30"
          >
            <h2
              class="text-nuxt-green font-mono text-center items-center text-2xl lg:text-3xl bg-black/30 px-6 py-2 rounded-lg border border-nuxt-gray/50 backdrop-blur-sm"
            >
              <span class="text-gray-500 mr-2">$</span><span class="typing"></span>
            </h2>
          </vue-typed-js>
        </div>
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute z-1 w-auto min-w-full min-h-full max-w-none md:hidden lg:block"
      >
        <source
          src="https://res.cloudinary.com/metalsyntax/video/upload/v1691212426/MetalSyntax-Banner-Black_xdfbpg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
    <section class="sm:py-2 sm:px-2 lg:py-4 lg:px-4 bg-ui-bg bg-gradient-to-b">
      <div
        class="flex flex-wrap justify-center py-6 sm:w-full md:w-full lg:w-full mx-auto my-0"
      >
        <h2
          class="text-white text-center pb-4 text-2xl lg:text-3xl w-full font-bold"
          v-html="$t('home.titleexperience')"
        ></h2>
        <div class="w-full text-center pb-6">
          <p class="text-ui-text-muted text-lg" style="color: var(--ui-text-muted)">
            {{ $t('home.experiencedescription') }}
          </p>
        </div>
        <div
          v-for="item in experience"
          v-bind:key="item.id"
          class="w-full md:w-full lg:w-1/3 xl:w-1/3 px-4 py-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div
            class="md:flex md:flex-wrap rounded-xl overflow-hidden shadow-lg mx-2 my-2 bg-ui-bg border border-gray-800 hover:border-nuxt-green transition-colors duration-300 h-full"
          >
            <a
              class="px-2 py-2 w-3/4 md:w-1/3 m-auto"
              :href="
                item.website !== '#' ? `https://${item.website}` : item.website
              "
              :target="item.website == '#' ? '' : '_blank'"
            >
              <picture>
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="
                    require(`~/assets/img/bussines/${item.image}.png?webp`)
                  "
                  type="image/webp"
                  width="128"
                  height="128"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/bussines/${item.image}.png`)"
                  type="image/png"
                  width="128"
                  height="128"
                />
                <img
                  class="mx-auto rounded-lg w-32 bg-transparent"
                  :src="require(`~/assets/img/bussines/${item.image}.png`)"
                  :alt="item.title"
                  :title="item.title"
                  width="128"
                  height="128"
                />
              </picture>
            </a>
            <div
              class="md:flex md:flex-wrap px-4 py-4 md:w-2/3 justify-center md:justify-start lg:justify-start xl:justify-start items-center"
            >
              <h2
                class="font-bold text-xl mb-2 sm:text-left md:text-left lg:text-left w-full text-white"
              >
                {{ item.title }}
              </h2>
              <p
                class="text-gray-400 text-base sm:text-left md:text-left lg:text-left w-full"
              >
                {{ item.yearfirst }} - {{ item.yearlast }}
              </p>
              <a
                class="text-left w-full"
                :href="
                  item.website !== '#'
                    ? `https://${item.website}`
                    : item.website
                "
                :target="item.website == '#' ? '' : '_blank'"
              >
                <p
                  class="text-base sm:text-left md:text-left lg:text-left w-full text-nuxt-green hover:text-nuxt-green/80 transition-colors"
                >
                  {{ item.company }}
                </p>
              </a>
              <ul
                class="list-disc lg:text-left sm:text-left md:text-left w-full text-gray-300 mt-2"
              >
                <li class="list-none mb-1 text-sm">{{ item.task1 }}</li>
                <li class="list-none mb-1 text-sm">{{ item.task2 }}</li>
                <li class="list-none mb-1 text-sm">{{ item.task3 }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <nuxt-link
            :to="localePath('/experience')"
            class="flex flex-wrap justify-center items-center bg-nuxt-green text-xl text-nuxt-dark font-bold hover:bg-white mt-8 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-nuxt-green/20"
          >
            {{ $t("home.more") + " " + $t("experience.title") }}
          </nuxt-link>
        </div>
      </div>
      <div
        class="flex flex-wrap justify-center px-4 py-6 lg:p-4 sm:w-full md:w-4/5 lg:w-5/6 mx-auto my-0"
      >
        <h2
          class="text-white text-center pb-4 text-2xl lg:text-3xl w-full font-bold"
          v-html="$t('home.titleskills')"
        ></h2>
        <div class="w-full text-center pb-6">
          <p class="text-ui-text-muted text-lg" style="color: var(--ui-text-muted)">
            {{ $t('home.skillsdescription') }}
          </p>
        </div>
      </div>
      <div class="w-full ml-auto lg:py-4 mr-auto">
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide bg-ui-bg/30 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center text-center p-4 border border-gray-700 hover:border-nuxt-green transition-colors"
              v-for="icon in icons"
              :key="icon.id"
            >
              <picture class="flex justify-center align-center mb-2">
                <source
                  :title="icon.title"
                  :alt="icon.title"
                  :srcset="require(`~/assets/img/tech/${icon.image}.png?webp`)"
                  type="image/webp"
                  height="56"
                />
                <source
                  :title="icon.title"
                  :alt="icon.title"
                  :srcset="require(`~/assets/img/tech/${icon.image}.png`)"
                  type="image/png"
                  height="56"
                />
                <img
                  class="w-12 h-12 object-contain icon-grayscale"
                  :title="icon.title"
                  :src="require(`~/assets/img/tech/${icon.image}.png`)"
                  :alt="icon.title"
                  height="56"
                />
              </picture>
              <p class="text-center text-xs text-gray-300 font-medium">{{ icon.title }}</p>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-wrap justify-center w-full py-12 px-4 bg-ui-bg"
    >
      <h2 class="text-center w-full pt-8 pb-4 text-3xl lg:text-4xl font-bold text-white">{{ $t("home.project") }}</h2>
      <div class="w-full text-center pb-8">
        <p class="text-ui-text-muted text-lg" style="color: var(--ui-text-muted)">
          {{ $t('home.projectdescription') }}
        </p>
      </div>
      <div
        v-for="item in portfolio"
        v-bind:key="item.id"
        class="sm:w-full md:w-1/2 lg:w-1/4 px-4 py-4 justify-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div
          class="rounded-xl overflow-hidden shadow-xl mx-auto bg-ui-bg bg-gradient-to-b border border-gray-800 hover:border-nuxt-green transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
        >
          <a :href="item.link" target="_blank" class="block overflow-hidden relative group">
             <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <picture>
              <source
                :title="item.title"
                :alt="item.title"
                :srcset="
                  require(`~/assets/img/projects/${item.image}-.jpg?webp`)
                "
                type="image/webp"
                width="750"
                height="450"
              />
              <source
                :title="item.title"
                :alt="item.title"
                :srcset="require(`~/assets/img/projects/${item.image}-.jpg`)"
                type="image/jpeg"
                width="750"
                height="450"
              />
              <img
                class="w-full transform group-hover:scale-105 transition-transform duration-500"
                :src="require(`~/assets/img/projects/${item.image}-.jpg`)"
                :alt="item.title"
                :title="item.title"
                width="750"
                height="450"
              />
            </picture>
          </a>
          <div class="p-6 flex-grow flex flex-col">
            <a :href="item.link" target="_blank">
              <p
                class="text-center text-white text-xl font-bold hover:text-nuxt-green transition-colors mb-1"
              >
                {{ item.title }}
              </p>
            </a>
            <p
              class="text-center text-nuxt-green font-semibold text-sm pb-3 block opacity-90"
            >
              {{ item.company }} - {{ item.year }}
            </p>
            <p class="text-gray-400 text-sm text-center mb-4 flex-grow">
              {{ item.description }}
            </p>
            <div
              class="flex flex-wrap justify-center gap-2 mt-auto"
            >
              <div
                v-for="(icon, index) in item.icons"
                :key="index"
                class="bg-graylight-300 rounded-full p-2"
                :title="icon.title"
              >
                <picture>
                  <source
                    :title="icon.title"
                    :alt="icon.title"
                    :srcset="
                      require(`~/assets/img/tech/${icon.image}.png?webp`)
                    "
                    type="image/webp"
                  />
                  <source
                    :title="icon.title"
                    :alt="icon.title"
                    :srcset="require(`~/assets/img/tech/${icon.image}.png`)"
                    type="image/png"
                  />
                  <img
                    class="w-6 h-6 object-contain"
                    :title="icon.title"
                    :src="require(`~/assets/img/tech/${icon.image}.png`)"
                    :alt="icon.title"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-8">
        <nuxt-link
            :to="localePath('/portfolio')"
            class="flex flex-wrap justify-center items-center bg-nuxt-green text-xl text-nuxt-dark font-bold hover:bg-white mt-8 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-nuxt-green/20"
        >
            {{ $t("home.more") + " " + $t("portfolio.title") }}
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

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
        freeMode: true,
        speed: 5000,
        allowTouchMove: false,
        /*pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },*/
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
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
          yearfirst: "Feb. 2021",
          yearlast: this.$t("experience.status"),
          company: "RedGage, LLC.",
          website: "www.redgage.com",
          task1: this.$t("experience.task1redgage"),
          task2: this.$t("experience.task2redgage"),
          task3: this.$t("experience.task3redgage"),
          image: "redgage",
        },
        {
          title: this.$t("experience.ditrali"),
          yearfirst: "Jun. 2025",
          yearlast: this.$t("experience.status"),
          company: "Ditrali",
          website: "www.ditrali.com",
          task1: this.$t("experience.task1ditrali"),
          task2: this.$t("experience.task2ditrali"),
          task3: this.$t("experience.task3ditrali"),
          image: "ditrali"
        },
        {
          title: this.$t("experience.uts"),
          yearfirst: "Jun. 2024",
          yearlast: "Ago. 2024",
          company:
            "Instituto Universitario de tecnología Antonio José de Sucre",
          website: "www.uts.edu.ve",
          task1: this.$t("experience.task1uts"),
          task2: this.$t("experience.task2uts"),
          task3: this.$t("experience.task3uts"),
          image: "uts",
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
          title: "Prestashop",
          image: "Prestashop",
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
          title: "Codeigniter",
          image: "Codeigniter",
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
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "The North Face - Circular Design",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.circulardesign"),
          link: "https://www.behance.net/gallery/200987549/Circular-Design-Landing-The-North-Face-Peru",
          image: "tnf",
          icons: [
            { title: "Magento 2", image: "magento-2" },
            { title: "HTML5", image: "HTML5" },
            { title: "CSS3", image: "CSS" },
            { title: "JavaScript", image: "JS" },
          ],
        },
        {
          title: "Business Market Finders",
          company: "Genesis Agency",
          year: "2023",
          description: this.$t("portfolio.businessmarketfinders"),
          link: "https://www.behance.net/gallery/175709925/Business-Market-Finders",
          image: "bmf",
          icons: [
            { title: "SAP AppGyver", image: "AppGyver" },
            { title: "JavaScript", image: "JS" },
          ],
        },
        {
          title: "Work To Earn",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.worktoearn"),
          link: "https://www.behance.net/gallery/153310391/Work-To-Earn",
          image: "worktoearn",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  methods: {
    handleImageError(event) {
      event.target.style.display = "none";
    },
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


.icon-grayscale {
  filter: grayscale(100%) brightness(150%);
  transition: filter 0.3s ease;
}

.icon-grayscale:hover {
  filter: grayscale(0%) brightness(100%);
}
.swiper-wrapper {
  transition-timing-function: linear !important;
}
/*.swiper-slide img {
  filter: grayscale(1);
}*/
/*.swiper-viewport {
  background-color: transparent;
}*/
@media (min-width: 1023px) {
  .full-display {
    height: calc(100vh - 72px);
    background-image: url("../../assets/img/background/home-background.jpg");
  }
}

</style>
