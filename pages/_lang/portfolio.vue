<template>
  <div>
    <div class="w-full p-4 mt-24 bg-white">
      <vue-typed-js
        class="justify-center py-2"
        :strings="[$t('portfolio.title')]"
        :loop="true"
        :showCursor="false"
        :typeSpeed="100"
      >
        <h1
          class="text-aqua-200 font-medium text-center items-center text-3xl lg:text-4xl"
        >
          &lt;
          <span class="typing"></span>/&gt;
        </h1>
      </vue-typed-js>
    </div>
    <div class="w-full px-6 py-4 text-center">
      <span class="text-gray-900 font-base text-xl lg:text-2xl">
        {{ $t("portfolio.heroparagraph") }}
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
            >{{ $t("portfolio.filter") }}</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#Komax"
            @click="itemsFilterkey = 'Komax'"
            :class="{ active: itemsFilterkey == 'Komax' }"
            >Komax</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#genesis"
            @click="itemsFilterkey = 'genesis'"
            :class="{ active: itemsFilterkey == 'genesis' }"
            >Genesis Agency</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#equipo360"
            @click="itemsFilterkey = 'equipo360'"
            :class="{ active: itemsFilterkey == 'equipo360' }"
            >Equipo 360</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#virtually"
            @click="itemsFilterkey = 'virtually'"
            :class="{ active: itemsFilterkey == 'virtually' }"
            >Virtually Present</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#kainver"
            @click="itemsFilterkey = 'kainver'"
            :class="{ active: itemsFilterkey == 'kainver' }"
            >Kainver</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#domiserver"
            @click="itemsFilterkey = 'Domiserver'"
            :class="{ active: itemsFilterkey == 'Domiserver' }"
            >Domiserver</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#personal"
            @click="itemsFilterkey = 'Personal'"
            :class="{ active: itemsFilterkey == 'Personal' }"
            >Personal</a
          >
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter-project"
            href="#freelance"
            @click="itemsFilterkey = 'Freelance'"
            :class="{ active: itemsFilterkey == 'Freelance' }"
            >Freelance</a
          >
        </li>
      </ul>
      <select
        name="items"
        class="lg:hidden flex w-full justify-center mx-auto text-center rounded border-2 border-white hover:border-aqua-100 focus:border-green-500 shadow-lg text-black hover:text-green-500 hover:bg-white py-2 px-4 outline-none"
        v-model="itemsFilterkey"
      >
        <option value="All">{{ $t("portfolio.filter") }}</option>
        <option value="Komax">Komax</option>
        <option value="genesis">Genesis Agency</option>
        <option value="equipo360">Equipo 360</option>
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
        itemsFilterkey == 'freelance' ? 'lg:h-screen' : '',
      ]"
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
          <div
            class="rounded-lg overflow-hidden shadow-lg mx-auto my-2 bg-white border-2 border-white hover:border-aqua-100"
          >
            <a :href="item.link" target="_blank">
              <picture>
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="
                    require(`~/assets/img/projects/${item.image}-.jpg?webp`)
                  "
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
              <!--<nuxt-img
                :title="item.title"
                :alt="item.title"
                format="webp"
                quality="80"
                :src="`/img/projects/${item.image}-.jpg`"
                class="w-full"
                loading="lazy"
              />  -->
            </a>
            <div>
              <a :href="item.link" target="_blank">
                <p
                  class="text-center text-gray-900 text-xl pt-2 font-semibold hover:text-aqua-200"
                >
                  {{ item.title }}
                </p>
              </a>
              <p
                class="text-center text-aqua-100 font-semibold text-sm block opacity-75"
              >
                {{ item.company }} - {{ item.year }}
              </p>
              <p class="text-gray-700 text-base text-center p-2">
                {{ item.description }}
              </p>
              <div
                class="flex flex-nowrap justify-center overflow-x-auto py-2 hide-scrollbar"
              >
                <div
                  v-for="(icon, index) in item.icons"
                  :key="index"
                  class="flex-shrink-0"
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
                      class="w-10 h-10 object-contain"
                      :title="icon.title"
                      :src="require(`~/assets/img/tech/${icon.image}.png`)"
                      :alt="icon.title"
                      loading="lazy"
                      width="40"
                      height="40"
                    />
                  </picture>
                </div>
              </div>
              <div class="flex flex-wrap justify-center">
                <!--<nuxt-picture
                  v-for="(icon, index) in item.icons"
                  :key="index"
                  :title="icon.title"
                  :alt="icon.title"
                  format="webp"
                  quality="80"
                  :src="`/img/tech/${icon.image}.png`"
                  placeholder
                  :img-attrs="{
                    class: 'w-12 p-1',
                    height: '56',
                    width: '56',
                    loading: 'lazy',
                  }"
                  @error="handleImageError"
                />-->
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
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Ecommerce App",
          company: "Personal",
          year: "2025",
          description: this.$t("portfolio.ecommerceapp"),
          link: "https://www.behance.net/gallery/220324399/Ecommerce-App",
          image: "Ecommerce-App",
          icons: [
            { title: "React.js", image: "Reactjs" },
            { title: "Node.js", image: "nodejs" },
          ],
        },
        {
          title: "Dashboard Particles",
          company: "Personal",
          year: "2025",
          description: this.$t("portfolio.dashboardparticles"),
          link: "https://www.behance.net/gallery/220321939/Dashboard-Particle",
          image: "Dasboard-Particles",
          icons: [
            {
              title: "Figma",
              image: "Figma",
            },
          ],
        },
        {
          title: "Class Manager",
          company: "Freelance",
          year: "2025",
          description: this.$t("portfolio.classmanager"),
          link: "https://www.behance.net/gallery/220323193/Class-Manager-App",
          image: "Class-Manager",
          icons: [
            { title: "ionic", image: "ionic" },
            { title: "Angular", image: "Angular" },
          ],
        },
        {
          title: "Solufar - Recetario Magistral",
          company: "Personal",
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
          title: "JC Cake x GAP",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.gapxcake"),
          link: "https://www.behance.net/gallery/200986933/Landing-Page-JC-CAKE-GAP-Peru",
          image: "gap",
          icons: [
            { title: "Magento 2", image: "magento-2" },
            { title: "HTML5", image: "HTML5" },
            { title: "CSS3", image: "CSS" },
            { title: "JavaScript", image: "JS" },
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
          title: "Barbie x Kipling",
          company: "Komax",
          year: "2024",
          description: this.$t("portfolio.barbiexkipling"),
          link: "https://www.behance.net/gallery/200987501/Landing-x-Kipling-kipling-Peru",
          image: "kip",
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
          title: "La Martena",
          company: "Genesis Agency",
          year: "2023",
          description: this.$t("portfolio.lamartena"),
          link: "https://www.behance.net/gallery/175647981/La-Martena",
          image: "lamartena",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "PasareLab",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.pasarelab"),
          link: "https://www.behance.net/gallery/153310385/PasareLab",
          image: "pasarelab",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
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
        {
          title: "Den Gode Fisk Fra Havet",
          company: "Equipo 360",
          year: "2022",
          description: this.$t("portfolio.dengodefiskfrahavet"),
          link: "https://www.behance.net/gallery/153310395/Den-Gode-Fisk-Fra-Havet",
          image: "dengodefiskfrahavet",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Boundless Builders",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.boundlessbuilders"),
          link: "https://www.behance.net/gallery/153307579/Boundless-Builders",
          image: "boundless-builders",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Clinica Medica",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.clinicamedica"),
          link: "https://www.behance.net/gallery/153307581/Clinica-Medica",
          image: "clinicamedica",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Sand of Isla Morada",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.sandsofislamorada"),
          link: "https://sandsofislamorada.com/",
          image: "sandsofislamorada",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "The Senior Care Foundation",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.theseniorcarefoundation"),
          link: "https://theseniorcarefoundation.org/",
          image: "TSCF",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Vitalcare",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.vitalcare"),
          link: "https://www.behance.net/gallery/175651013/Vitalcare",
          image: "vitalcare",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Syntax Stream",
          company: "Personal",
          year: "2021",
          description: this.$t("portfolio.syntaxstream"),
          link: "https://www.behance.net/gallery/121536125/Stream-Syntax",
          image: "Syntax-Stream",
          icons: [
            {
              title: "Adobe XD",
              image: "AdobeXD",
            },
          ],
        },
        {
          title: "Lior Pedidos App",
          company: "Freelance",
          year: "2020",
          description: this.$t("portfolio.liorapp"),
          link: "https://lior-app.vercel.app/",
          image: "Lior-App",
          icons: [
            {
              title: "Nuxt.js",
              image: "Nuxt",
            },
            {
              title: "Vue",
              image: "Vuejs",
            },
            {
              title: "TailWind",
              image: "tailwindcss",
            },
          ],
        },
        {
          title: "Syntax Project Next",
          company: "Personal",
          year: "2020",
          description: this.$t("portfolio.syntaxprojectnext"),
          link: "https://syntax-project-next.now.sh/",
          image: "Tech-Cube",
          icons: [
            {
              title: "Next.js",
              image: "Nextjs",
            },
          ],
        },
        {
          title: "Classic Wheels Usa",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.classicwheelsusa"),
          link: "https://classicwheelsusa.com/",
          image: "Classic-Wheels-Usa",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Semilla Multicultural-",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.semillamulticultural"),
          link: "https://semillamulticultural.com/",
          image: "Semilla-Multicultural",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Bardisa LYL Center",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.bardisalylcenter"),
          link: "https://bardisalylcenter.com/",
          image: "BDS",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Radio Caribe",
          company: "Freelance",
          year: "2019",
          description: this.$t("portfolio.radiocaribe"),
          link: "http://www.radiocaribe.com/",
          image: "Radio-Caribe",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Florida Doctors Group",
          company: "Virtually Present",
          year: "2019",
          description: this.$t("portfolio.floridadoctorsgroup"),
          link: "https://fdgmso.com/",
          image: "FDGMSO",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Syntax Note",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.syntaxnote"),
          link: "https://metalsyntax.github.io/Notes/",
          image: "Syntax-Note",
          icons: [
            {
              title: "AngularJS",
              image: "angularjs",
            },
          ],
        },
        {
          title: "Syntax Monitor",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.syntaxmonitor"),
          link: "https://metalsyntax.github.io/Syntax-Monitor/",
          image: "Syntax-Monitor",
          icons: [
            {
              title: "Jquery",
              image: "jquery",
            },
          ],
        },
        {
          title: "Ofertas del Motor",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.ofertasdelmotor"),
          link: "https://www.behance.net/gallery/96603035/ODM",
          image: "Ofertas-del-motor",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Mi Secretaria Virtual",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.misecretariavirtual"),
          link: "https://www.behance.net/gallery/96600341/MSV",
          image: "Mi-Secretaria-Virtual",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Renderizados",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.renderizados"),
          link: "https://www.behance.net/gallery/96600761/Renderizados",
          image: "Renderizados",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Soluciones Web",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.solucionesweb"),
          link: "https://www.behance.net/gallery/79186095/Soluciones-Web",
          image: "Soluciones-Web",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "AW Travel Guides",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.awtravelguides"),
          link: "https://www.behance.net/gallery/79183575/AW-Travel-Guides",
          image: "AW-Travel-Guides",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Traductores Malaga",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.traductoresmalaga"),
          link: "https://www.behance.net/gallery/72284307/Traductores-Malaga",
          image: "Traductores-Malaga",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Domiserver",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.domiserver"),
          link: "https://www.behance.net/gallery/66801367/DomiServer",
          image: "DomiServer",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Latin Talents",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.latintalents"),
          link: "https://www.behance.net/gallery/66800623/LatinTalents",
          image: "LatinTalens",
          icons: [
            { title: "WordPress", image: "WordPress" },
            { title: "PHP", image: "PHP" },
          ],
        },
        {
          title: "Methods",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.methods"),
          link: "https://metalsyntax.github.io/Methods/",
          image: "Methods",
          icons: [
            { title: "PhoneGap", image: "phonegap" },
            { title: "HTML5", image: "HTML5" },
            { title: "CSS3", image: "CSS" },
            { title: "JavaScript", image: "JS" },
          ],
        },
        {
          title: "Code of Paid",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.codeofpaid"),
          link: "https://www.behance.net/gallery/66803173/Code-of-Paid",
          image: "Yanbal-Code-Of-Paid",
          icons: [
            { title: "PhoneGap", image: "phonegap" },
            { title: "HTML5", image: "HTML5" },
            { title: "CSS3", image: "CSS" },
            { title: "JavaScript", image: "JS" },
          ],
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
      event.target.style.display = "none";
    },
  },
};
</script>

<style>
.button-filter-project {
  @apply block text-black text-center rounded border-2 border-white shadow-lg bg-white py-2 px-4;
}
.button-filter-project:hover {
  @apply bg-white border-aqua-100 text-aqua-200;
}
.button-filter-project.active {
  @apply bg-white border-aqua-100 text-aqua-200;
}
</style>
