<template>
  <div>
    <div class="w-full p-4 mt-24 bg-white">
      <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('portfolio.title')
            ]"
            :loop="true"
            :showCursor="false"
            :typeSpeed="100"
          >
            <h1 class="text-aqua-200 font-medium text-center items-center text-3xl lg:text-4xl">
              &lt;
              <span class="typing"></span>/&gt;
            </h1>
          </vue-typed-js>
    </div>
    <div class="w-full px-6 py-4 text-center">
        <span class="text-gray-900 font-base text-xl lg:text-2xl">
          {{ $t('portfolio.heroparagraph') }}
        </span>
    </div>
    <div class="w-full px-2 pt-6">
      <ul class="hidden lg:flex flex-wrap">
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#all"
            @click="itemsFilterkey = 'All'"
            :class="{ active: itemsFilterkey == 'All' }"
          >{{ $t('portfolio.filter') }}</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#Komax"
            @click="itemsFilterkey = 'Komax'"
            :class="{ active: itemsFilterkey == 'Komax' }"
          >Komax</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#genesis"
            @click="itemsFilterkey = 'genesis'"
            :class="{ active: itemsFilterkey == 'genesis' }"
          >Genesis Agency</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#equipo360"
            @click="itemsFilterkey = 'equipo360'"
            :class="{ active: itemsFilterkey == 'equipo360' }"
          >Equipo 360</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#virtually"
            @click="itemsFilterkey = 'virtually'"
            :class="{ active: itemsFilterkey == 'virtually' }"
          >Virtually Present</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#kainver"
            @click="itemsFilterkey = 'kainver'"
            :class="{ active: itemsFilterkey == 'kainver' }"
          >Kainver</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#domiserver"
            @click="itemsFilterkey = 'Domiserver'"
            :class="{ active: itemsFilterkey == 'Domiserver'}"
          >Domiserver</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#personal"
            @click="itemsFilterkey = 'Personal'"
            :class="{ active: itemsFilterkey == 'Personal' }"
          >Personal</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#freelance"
            @click="itemsFilterkey = 'Freelance'"
            :class="{ active: itemsFilterkey == 'Freelance' }"
          >Freelance</a>
        </li>
      </ul>
      <select
        name="items"
        class="lg:hidden flex w-full justify-center mx-auto text-center rounded border-2 border-white hover:border-aqua-100 focus:border-green-500 shadow-lg text-black hover:text-green-500 hover:bg-white py-2 px-4 outline-none"
        v-model="itemsFilterkey"
      >
        <option value="All">{{ $t('portfolio.filter') }}</option>
        <option value="Komax">Komax</option>
        <option value="genesis">Genesis Agency</option>
        <option value="equipo360">Equipo 360 </option>
        <option value="virtually">Virtually Present</option>
        <option value="kainver">Kainver</option>
        <option value="domiserver">DomiServer</option>
        <option value="personal">Personal</option>
        <option value="freelance">Freelance</option>
      </select>
    </div>
    <div
      :class="[
    itemsFilterkey == 'Komax' ? 'lg:h-screen' : '',
    itemsFilterkey == 'genesis' ? 'lg:h-screen' : '',
    itemsFilterkey == 'equipo360' ? 'lg:h-screen' : '',
    itemsFilterkey == 'virtually' ? 'lg:h-screen' : '',
    itemsFilterkey == 'domiserver' ? 'lg:h-screen' : '',
    itemsFilterkey == 'personal' ? 'lg:h-screen' : '',
    itemsFilterkey == 'freelance' ? 'lg:h-screen' : '']"
      class="p-4 px-2"
    >
      <div class="flex flex-wrap justify-center -mx-2">
        <div
          v-for="item in itemFilter"
          v-bind:key="item.id"
          class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 justify-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="rounded-lg overflow-hidden shadow-lg mx-auto my-2 bg-white border-2 border-white hover:border-aqua-100">
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
                class="text-center text-aqua-100 font-semibold text-sm block opacity-75"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("head.portfolio"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("description.portfolio"),
        },
      ],
    };
  },
  data() {
    return {
      itemsFilterkey: "All",
      items: [
        {
          title: "Crux Food",
          company: "Freelance",
          year: "2025",
          description: this.$t("portfolio.cruxfood"),
          link: "https://www.behance.net/gallery/220324661/Crux-Food-Re-design",
          image: "Crux-Food",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Ecommerce App",
          company: "Personal",
          year: "2025",
          description: this.$t("portfolio.ecommerceapp"),
          link: "https://www.behance.net/gallery/220324399/Ecommerce-App",
          image: "Ecommerce-App",
          iconTitle: "Reactjs",
          iconImage: "Reactjs"
        },
        {
          title: "Dashboard Particles",
          company: "Personal",
          year: "2025",
          description: this.$t("portfolio.dashboardparticles"),
          link: "https://www.behance.net/gallery/220321939/Dashboard-Particle",
          image: "Dasboard-Particles",
          iconTitle: "Figma",
          iconImage: "Figma"
        },
        {
          title: "Class Manager",
          company: "Freelance",
          year: "2025",
          description: this.$t("portfolio.classmanager"),
          link: "https://www.behance.net/gallery/220323193/Class-Manager-App",
          image: "Class-Manager",
          iconTitle: "Ionic",
          iconImage: "ionic"
        },
        {
          title: "Solufar - Recetario Magistral",
          company: "Personal",
          year: "2025",
          description: this.$t("portfolio.solufar"),
          link: "https://www.behance.net/gallery/217321013/Recetario-Magistral-Solufar",
          image: "solufar",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "JC Cake x GAP",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.gapxcake"),
          link: "https://www.behance.net/gallery/200986933/Landing-Page-JC-CAKE-GAP-Peru",
          image: "gap",
          iconTitle: "Magento 2",
          iconImage: "magento-2"
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
          title: "Barbie x Kipling",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.barbiexkipling"),
          link: "https://www.behance.net/gallery/200987501/Landing-x-Kipling-kipling-Peru",
          image: "kip",
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
          title: "La Martena",
          company: "Genesis Agency",
          year: "2023",
          description: this.$t("portfolio.lamartena"),
          link: "https://www.behance.net/gallery/175647981/La-Martena",
          image: "lamartena",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "PasareLab",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.pasarelab"),
          link: "https://www.behance.net/gallery/153310385/PasareLab",
          image: "pasarelab",
          iconTitle: "WordPress",
          iconImage: "WordPress"
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
        },
        {
          title: "Den Gode Fisk Fra Havet",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.dengodefiskfrahavet"),
          link: "https://www.behance.net/gallery/153310395/Den-Gode-Fisk-Fra-Havet",
          image: "dengodefiskfrahavet",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Boundless Builders",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.boundlessbuilders"),
          link: "https://www.behance.net/gallery/153307579/Boundless-Builders",
          image: "boundless-builders",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Clinica Medica",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.clinicamedica"),
          link: "https://www.behance.net/gallery/153307581/Clinica-Medica",
          image: "clinicamedica",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Sand of Isla Morada",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.sandsofislamorada"),
          link: "https://sandsofislamorada.com/",
          image: "sandsofislamorada",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "The Senior Care Foundation",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.theseniorcarefoundation"),
          link: "https://theseniorcarefoundation.org/",
          image: "TSCF",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Vitalcare",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.vitalcare"),
          link: "https://www.behance.net/gallery/175651013/Vitalcare",
          image: "vitalcare",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Syntax Stream",
          company: "Personal",
          year: "2021",
          description: this.$t("portfolio.syntaxstream"),
          link: "https://www.behance.net/gallery/121536125/Stream-Syntax",
          image: "Syntax-Stream",
          iconTitle: "Adobe XD",
          iconImage: "AdobeXD"
        },
        {
          title: "Lior Pedidos App",
          company: "Freelance",
          year: "2020",
          description: this.$t("portfolio.liorapp"),
          link: "https://lior-app.vercel.app/",
          image: "Lior-App",
          iconTitle: "Nuxt.js",
          iconImage: "Nuxt"
        },
        {
          title: "Syntax Project Next",
          company: "Personal",
          year: "2020",
          description: this.$t("portfolio.syntaxprojectnext"),
          link: "https://syntax-project-next.now.sh/",
          image: "Tech-Cube",
          iconTitle: "Next.js",
          iconImage: "Nextjs"
        },
        {
          title: "Classic Wheels Usa",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.classicwheelsusa"),
          link: "https://classicwheelsusa.com/",
          image: "Classic-Wheels-Usa",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Semilla Multicultural-",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.semillamulticultural"),
          link: "https://semillamulticultural.com/",
          image: "Semilla-Multicultural",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Bardisa LYL Center",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.bardisalylcenter"),
          link: "https://bardisalylcenter.com/",
          image: "BDS",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Radio Caribe",
          company: "Freelance",
          year: "2019",
          description: this.$t("portfolio.radiocaribe"),
          link: "http://www.radiocaribe.com/",
          image: "Radio-Caribe",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Florida Doctors Group",
          company: "Virtually Present",
          year: "2019",
          description: this.$t("portfolio.floridadoctorsgroup"),
          link: "https://fdgmso.com/",
          image: "FDGMSO",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Syntax Note",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.syntaxnote"),
          link: "https://metalsyntax.github.io/Notes/",
          image: "Syntax-Note",
          iconTitle: "Angurjs",
          iconImage: "angularjs"
        },
        {
          title: "Syntax Monitor",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.syntaxmonitor"),
          link: "https://metalsyntax.github.io/Syntax-Monitor/",
          image: "Syntax-Monitor",
          iconTitle: "Jquery",
          iconImage: "jquery"
        },
        {
          title: "Ofertas del Motor",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.ofertasdelmotor"),
          link: "https://www.behance.net/gallery/96603035/ODM",
          image: "Ofertas-del-motor",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Mi Secretaria Virtual",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.misecretariavirtual"),
          link: "https://www.behance.net/gallery/96600341/MSV",
          image: "Mi-Secretaria-Virtual",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Renderizados",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.renderizados"),
          link: "https://www.behance.net/gallery/96600761/Renderizados",
          image: "Renderizados",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Soluciones Web",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.solucionesweb"),
          link: "https://www.behance.net/gallery/79186095/Soluciones-Web",
          image: "Soluciones-Web",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "AW Travel Guides",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.awtravelguides"),
          link: "https://www.behance.net/gallery/79183575/AW-Travel-Guides",
          image: "AW-Travel-Guides",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Traductores Malaga",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.traductoresmalaga"),
          link: "https://www.behance.net/gallery/72284307/Traductores-Malaga",
          image: "Traductores-Malaga",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Domiserver",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.domiserver"),
          link: "https://www.behance.net/gallery/66801367/DomiServer",
          image: "DomiServer",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Latin Talents",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.latintalents"),
          link: "https://www.behance.net/gallery/66800623/LatinTalents",
          image: "LatinTalens",
          iconTitle: "WordPress",
          iconImage: "WordPress"
        },
        {
          title: "Methods",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.methods"),
          link: "https://metalsyntax.github.io/Methods/",
          image: "Methods",
          iconTitle: "PhoneGap",
          iconImage: "phonegap"
        },
        {
          title: "Code of Paid",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.codeofpaid"),
          link: "https://www.behance.net/gallery/66803173/Code-of-Paid",
          image: "Yanbal-Code-Of-Paid",
          iconTitle: "PhoneGap",
          iconImage: "phonegap"
        },
      ],
    };
  },
  computed: {
    itemFilter() {
      return this[this.itemsFilterkey];
    },
    All() {
      return this.items;
    },
    Komax() {
      return this.items.filter(function (item) {
        return item.company == "Komax";
      });
    },
    genesis() {
      return this.items.filter(function (item) {
        return item.company == "Genesis Agency";
      });
    },
    equipo360() {
      return this.items.filter(function (item) {
        return item.company == "Equipo 360";
      });
    },
    virtually() {
      return this.items.filter(function (item) {
        return item.company == "Virtually Present";
      });
    },
    kainver() {
      return this.items.filter(function (item) {
        return item.company == "kainver";
      });
    },
    Domiserver() {
      return this.items.filter(function (item) {
        return item.company == "Domiserver";
      });
    },
    Freelance() {
      return this.items.filter(function (item) {
        return item.company == "Freelance";
      });
    },
    Personal() {
      return this.items.filter(function (item) {
        return item.company == "Personal";
      });
    },
  },
  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
    }
  },
};
</script>

<style>
.button-filter-project {
  @apply block text-black text-center rounded border-2 border-white shadow-lg bg-white py-2 px-4;
}
.button-filter-project:hover {
  @apply bg-white border-aqua-100 text-aqua-200 ;
}
.button-filter-project.active {
  @apply bg-white border-aqua-100 text-aqua-200 ;
}
</style>
