<template>
  <div>
    <div class="w-full p-4 bg-white">
      <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('portfolio.title')
            ]"
            :loop="true"
            :showCursor="false"
            :typeSpeed="100"
          >
            <h1 class="text-gray-100 font-medium text-center items-center text-3xl lg:text-4xl">
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
          title: "Solufar - Recetario Magistral",
          company: "Freelance",
          year: "2025",
          description: this.$t("portfolio.solufar"),
          link: "https://www.behance.net/gallery/217321013/Recetario-Magistral-Solufar",
          image: "solufar",
        },
        {
          title: "JC Cake x GAP",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.gapxcake"),
          link: "https://www.behance.net/gallery/200986933/Landing-Page-JC-CAKE-GAP-Peru",
          image: "gap",
        },
        {
          title: "The North Face - Circular Design",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.circulardesign"),
          link: "https://www.behance.net/gallery/200987549/Circular-Design-Landing-The-North-Face-Peru",
          image: "tnf",
        },
        {
          title: "Barbie x Kipling",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.barbiexkipling"),
          link: "https://www.behance.net/gallery/200987501/Landing-x-Kipling-kipling-Peru",
          image: "kip",
        },
        {
          title: "Business Market Finders",
          company: "Genesis Agency",
          year: "2023",
          description: this.$t("portfolio.businessmarketfinders"),
          link: "https://www.behance.net/gallery/175709925/Business-Market-Finders",
          image: "bmf",
        },
        {
          title: "La Martena",
          company: "Genesis Agency",
          year: "2023",
          description: this.$t("portfolio.lamartena"),
          link: "http://lamartena.com/",
          image: "lamartena",
        },
        {
          title: "PasareLab",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.pasarelab"),
          link: "https://www.behance.net/gallery/153310385/PasareLab",
          image: "pasarelab",
        },
        {
          title: "Work To Earn",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.worktoearn"),
          link: "https://www.behance.net/gallery/153310391/Work-To-Earn",
          image: "worktoearn",
        },
        {
          title: "Den Gode Fisk Fra Havet",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.dengodefiskfrahavet"),
          link: "https://www.behance.net/gallery/153310395/Den-Gode-Fisk-Fra-Havet",
          image: "dengodefiskfrahavet",
        },
        {
          title: "Boundless Builders",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.boundlessbuilders"),
          link: "https://www.behance.net/gallery/153307579/Boundless-Builders",
          image: "boundless-builders",
        },
        {
          title: "Clinica Medica",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.clinicamedica"),
          link: "https://www.behance.net/gallery/153307581/Clinica-Medica",
          image: "clinicamedica",
        },
        {
          title: "Sand of Isla Morada",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.sandsofislamorada"),
          link: "https://sandsofislamorada.com/",
          image: "sandsofislamorada",
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
          title: "Vitalcare",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.vitalcare"),
          link: "https://www.behance.net/gallery/175651013/Vitalcare",
          image: "vitalcare",
        },
        {
          title: "Syntax Stream",
          company: "Personal",
          year: "2021",
          description: this.$t("portfolio.syntaxstream"),
          link: "https://www.behance.net/gallery/121536125/Stream-Syntax",
          image: "Syntax-Stream",
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
        },
        {
          title: "Classic Wheels Usa",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.classicwheelsusa"),
          link: "https://classicwheelsusa.com/",
          image: "Classic-Wheels-Usa",
        },
        {
          title: "Semilla Multicultural-",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.semillamulticultural"),
          link: "https://semillamulticultural.com/",
          image: "Semilla-Multicultural",
        },
        {
          title: "Bardisa LYL Center",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.bardisalylcenter"),
          link: "https://bardisalylcenter.com/",
          image: "BDS",
        },
        {
          title: "Radio Caribe",
          company: "Freelance",
          year: "2019",
          description: this.$t("portfolio.radiocaribe"),
          link: "http://www.radiocaribe.com/",
          image: "Radio-Caribe",
        },
        {
          title: "Florida Doctors Group",
          company: "Virtually Present",
          year: "2019",
          description: this.$t("portfolio.floridadoctorsgroup"),
          link: "https://fdgmso.com/",
          image: "FDGMSO",
        },
        {
          title: "Syntax Note",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.syntaxnote"),
          link: "https://metalsyntax.github.io/Notes/",
          image: "Syntax-Note"
        },
        {
          title: "Syntax Monitor",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.syntaxmonitor"),
          link: "https://metalsyntax.github.io/Syntax-Monitor/",
          image: "Syntax-Monitor"
        },
        {
          title: "Ofertas del Motor",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.ofertasdelmotor"),
          link: "https://www.behance.net/gallery/96603035/ODM",
          image: "Ofertas-del-motor",
        },
        {
          title: "Mi Secretaria Virtual",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.misecretariavirtual"),
          link: "https://www.behance.net/gallery/96600341/MSV",
          image: "Mi-Secretaria-Virtual",
        },
        {
          title: "Renderizados",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.renderizados"),
          link: "https://www.behance.net/gallery/96600761/Renderizados",
          image: "Renderizados",
        },
        {
          title: "Soluciones Web",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.solucionesweb"),
          link: "https://www.behance.net/gallery/79186095/Soluciones-Web",
          image: "Soluciones-Web",
        },
        {
          title: "AW Travel Guides",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.awtravelguides"),
          link: "https://www.behance.net/gallery/79183575/AW-Travel-Guides",
          image: "AW-Travel-Guides",
        },
        {
          title: "Traductores Malaga",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.traductoresmalaga"),
          link: "https://www.behance.net/gallery/72284307/Traductores-Malaga",
          image: "Traductores-Malaga",
        },
        {
          title: "Domiserver",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.domiserver"),
          link: "https://www.behance.net/gallery/66801367/DomiServer",
          image: "DomiServer"
        },
        {
          title: "Latin Talents",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.latintalents"),
          link: "https://www.behance.net/gallery/66800623/LatinTalents",
          image: "LatinTalens"
        },
        {
          title: "Methods",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.methods"),
          link: "https://metalsyntax.github.io/Methods/",
          image: "Methods"
        },
        {
          title: "Code of Paid",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.codeofpaid"),
          link: "https://www.behance.net/gallery/66803173/Code-of-Paid",
          image: "Yanbal-Code-Of-Paid"
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
