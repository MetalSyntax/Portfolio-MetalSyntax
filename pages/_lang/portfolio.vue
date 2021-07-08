<template>
  <div>
    <div class="w-full p-4 bg-aqua-200 shadow-lg">
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
        <option value="Virtually">Virtually Present</option>
        <option value="kainver">Kainver</option>
        <option value="Domiserver">DomiServer</option>
        <option value="Personal">Personal</option>
        <option value="Freelance">Freelance</option>
      </select>
    </div>
    <div
      :class="[
    itemsFilterkey == 'Virtually' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Domiserver' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Personal' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Freelance' ? 'lg:h-screen' : '']"
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
          title: "Syntax Stream",
          company: "Personal",
          year: "2021",
          description: this.$t("portfolio.project28"),
          link: "https://www.behance.net/gallery/121536125/Stream-Syntax",
          image: "Syntax-Stream",
        },
        {
          title: "The Senior Care Foundation",
          company: "Virtually Present",
          year: "2021",
          description: this.$t("portfolio.project30"),
          link: "https://theseniorcarefoundation.org/",
          image: "TSCF",
        },
        {
          title: "Lior Pedidos App",
          company: "Freelance",
          year: "2020",
          description: this.$t("portfolio.project27"),
          link: "https://lior-app.vercel.app/",
          image: "Lior-App",
        },
        {
          title: "Syntax Project Next",
          company: "Personal",
          year: "2020",
          description: this.$t("portfolio.project26"),
          link: "https://syntax-project-next.now.sh/",
          image: "Tech-Cube",
        },
        {
          title: "Bardisa LYL Center",
          company: "Virtually Present",
          year: "2020",
          description: this.$t("portfolio.project29"),
          link: "https://bardisalylcenter.com/",
          image: "BDS",
        },
        {
          title: "Radio Caribe",
          company: "Freelance",
          year: "2019",
          description: this.$t("portfolio.project25"),
          link: "http://www.radiocaribe.com/",
          image: "Radio-Caribe",
        },
        {
          title: "Florida Doctors Group",
          company: "Virtually Present",
          year: "2019",
          description: this.$t("portfolio.project31"),
          link: "https://fdgmso.com/",
          image: "FDGMSO",
        },
        {
          title: "Syntax Note",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.project1"),
          link: "https://metalsyntax.github.io/Notes/",
          image: "Syntax-Note"
        },
        {
          title: "Syntax Monitor",
          company: "Personal",
          year: "2019",
          description: this.$t("portfolio.project0"),
          link: "https://metalsyntax.github.io/Syntax-Monitor/",
          image: "Syntax-Monitor"
        },
        {
          title: "Ofertas del Motor",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.project24"),
          link: "https://www.behance.net/gallery/96603035/ODM",
          image: "Ofertas-del-motor",
        },
        {
          title: "Mi Secretaria Virtual",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.project23"),
          link: "https://www.behance.net/gallery/96600341/MSV",
          image: "Mi-Secretaria-Virtual",
        },
        {
          title: "Renderizados",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.project22"),
          link: "https://www.behance.net/gallery/96600761/Renderizados",
          image: "Renderizados",
        },
        {
          title: "Soluciones Web",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.project21"),
          link: "https://www.behance.net/gallery/79186095/Soluciones-Web",
          image: "Soluciones-Web",
        },
        {
          title: "AW Travel Guides",
          company: "kainver",
          year: "2019",
          description: this.$t("portfolio.project19"),
          link: "https://www.behance.net/gallery/79183575/AW-Travel-Guides",
          image: "AW-Travel-Guides",
        },
        {
          title: "Traductores Malaga",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project20"),
          link: "https://www.behance.net/gallery/72284307/Traductores-Malaga",
          image: "Traductores-Malaga",
        },
        /*{
          title: "Life Fitness",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project18"),
          link:
            "https://www.behance.net/gallery/76360309/Tiendas-de-Webs-Gimnasio-1",
          image: "tiendadewebs-gimnasios-web-1",
        },
        {
          title: "Lawfrim",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project17"),
          link:
            "https://www.behance.net/gallery/96604757/Tienda-de-Webs-Abogados-1",
          image: "tiendadewebs-abogados-web-1",
        },
        {
          title: "R. Jurídico",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project16"),
          link:
            "https://www.behance.net/gallery/96604783/Tienda-de-Webs-Abogados-2",
          image: "tiendadewebs-abogados-web-2",
        },
        {
          title: "Planchart",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project15"),
          link:
            "https://www.behance.net/gallery/96604795/Tienda-de-Webs-Abogados-3",
          image: "tiendadewebs-abogados-web-3",
        },
        {
          title: "Brick State",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project14"),
          link:
            "https://www.behance.net/gallery/96604291/Tienda-de-Webs-Construccion-1",
          image: "tiendadewebs-construccion-web-1",
        },
        {
          title: "Avantia",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project13"),
          link:
            "https://www.behance.net/gallery/96604325/Tienda-de-Webs-Construccion-2",
          image: "tiendadewebs-construccion-web-2",
        },
        {
          title: "Alliance",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project12"),
          link:
            "https://www.behance.net/gallery/96604455/Tienda-de-Webs-Construccion-3",
          image: "tiendadewebs-construccion-web-3",
        },
        {
          title: "MediaOrbit",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project11"),
          link:
            "https://www.behance.net/gallery/96604987/Tienda-de-Webs-Inmuebles-1",
          image: "tiendadewebs-inmobiliarias-web-1",
        },
        {
          title: "Starlines",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project10"),
          link:
            "https://www.behance.net/gallery/76362391/Tiendas-de-Webs-Inmobiliarias-2",
          image: "tiendadewebs-inmobiliarias-web-2",
        },
        {
          title: "Netcoms",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project9"),
          link:
            "https://www.behance.net/gallery/76361415/Tienda-de-Webs-Inmobiliarias-3",
          image: "tiendadewebs-inmobiliarias-web-3",
        },
        {
          title: "Gearworks",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project8"),
          link:
            "https://www.behance.net/gallery/96599965/Tiendas-de-Web-Marketing-1",
          image: "tiendadewebs-marketing-web-1",
        },
        {
          title: "MediaBurn",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project7"),
          link:
            "https://www.behance.net/gallery/73168833/Tienda-de-Webs-Marketing-2",
          image: "tiendadewebs-marketing-web-2"
        },
        {
          title: "App-Market",
          company: "kainver",
          year: "2018",
          description: this.$t("portfolio.project6"),
          link:
            "https://www.behance.net/gallery/73164583/Tienda-de-Webs-Marketing-3",
          image: "tiendadewebs-marketing-web-3"
        },*/
        {
          title: "Domiserver",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.project5"),
          link: "https://www.behance.net/gallery/66801367/DomiServer",
          image: "DomiServer"
        },
        {
          title: "Latin Talents",
          company: "Domiserver",
          year: "2018",
          description: this.$t("portfolio.project4"),
          link: "https://www.behance.net/gallery/66800623/LatinTalents",
          image: "LatinTalens"
        },
        {
          title: "Methods",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.project3"),
          link: "https://metalsyntax.github.io/Methods/",
          image: "Methods"
        },
        {
          title: "Code of Paid",
          company: "Personal",
          year: "2017",
          description: this.$t("portfolio.project2"),
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
</style>
