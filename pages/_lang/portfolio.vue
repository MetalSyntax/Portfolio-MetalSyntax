<template>
  <div>
    <div class="w-full p-4 title-background shadow-lg">
      <h1 class="text-gray-100 text-center text-3xl">&lt;{{ $t('portfolio.title') }}/&gt;</h1>
    </div>
    <div class="py-4 px-2">
      <div class="flex flex-wrap justify-center -mx-2">
        <div
          v-for="item in items"
          v-bind:key="item.id"
          class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 justify-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="rounded-lg overflow-hidden shadow-lg mx-auto my-2 bg-white projects">
            <a :href="item.link" target="_blank">
              <img class="w-full" :src="item.image" :alt="item.title" />
            </a>
            <div>
              <a :href="item.link" target="_blank">
                <p
                  class="text-center text-gray-900 text-xl pl-2 pt-2 font-semibold"
                >{{ item.title }}</p>
                <p class="text-center text-gray-700 text-sm pl-2 pb-2 block opacity-75">
                  {{ item.company }} - {{ item.year }}
                </p>
              </a>
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
          content: this.$t("description.portfolio")
        }
      ]
    };
  },
  data() {
    return {
      items: [
        {
          title: "Radio Caribe",
          year: "2019",
          company: "Independiente",
          link: "http://www.radiocaribe.com/",
          image: require("../../assets/img/computers/radiocaribe.jpg")
        },
        {
          title: "Ofertas del Motor",
          company: "kainver",
          year: "2019",
          link: "#",
          image: require("../../assets/img/computers/ofertasdelmotor.jpg")
        },
        {
          title: "Mi Secretaria Virtual",
          company: "kainver",
          year: "2019",
          link: "#",
          image: require("../../assets/img/computers/misecretariavirtual.jpg")
        },
        {
          title: "Renderizados",
          company: "kainver",
          year: "2019",
          link: "#",
          image: require("../../assets/img/computers/renderizados.jpg")
        },
        {
          title: "Soluciones Web",
          company: "kainver",
          year: "2019",
          link: "#",
          image: require("../../assets/img/computers/solucionesweb.jpg")
        },
        {
          title: "Traductores Malaga",
          company: "kainver",
          year: "2018",
          link: "https://www.behance.net/gallery/72284307/Traductores-Malaga",
          image: require("../../assets/img/computers/TraductoresMalaga.jpg")
        },
        {
          title: "AW Travel Guides",
          company: "kainver",
          year: "2019",
          link: "https://www.behance.net/gallery/79183575/AW-Travel-Guides",
          image: require("../../assets/img/computers/AwTravelGuides.jpg")
        },
        {
          title: "Life Fitness",
          company: "kainver",
          year: "2018",
          link:
            "https://www.behance.net/gallery/76360309/Tiendas-de-Webs-Gimnasio-1",
          image: require("../../assets/img/computers/tiendadewebs-gimnasios-web-1.jpg")
        },
        {
          title: "Lawfrim",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-abogados-web-1.jpg")
        },
        {
          title: "R. Jurídico",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-abogados-web-2.jpg")
        },
        {
          title: "Planchart",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-abogados-web-3.jpg")
        },
        {
          title: "Brick State",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-construccion-web-1.jpg")
        },
        {
          title: "Avantia",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-construccion-web-2.jpg")
        },
        {
          title: "Alliance",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-construccion-web-3.jpg")
        },
        {
          title: "MediaOrbit",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-inmobiliarias-web-1.jpg")
        },
        {
          title: "Starlines",
          company: "kainver",
          year: "2018",
          link:
            "https://www.behance.net/gallery/76362391/Tiendas-de-Webs-Inmobiliarias-2",
          image: require("../../assets/img/computers/tiendadewebs-inmobiliarias-web-2.jpg")
        },
        {
          title: "Netcoms",
          company: "kainver",
          year: "2018",
          link:
            "https://www.behance.net/gallery/76361415/Tienda-de-Webs-Inmobiliarias-3",
          image: require("../../assets/img/computers/tiendadewebs-inmobiliarias-web-3.jpg")
        },
        {
          title: "Gearworks",
          company: "kainver",
          year: "2018",
          link: "#",
          image: require("../../assets/img/computers/tiendadewebs-marketing-web-1.jpg")
        },
        {
          title: "MediaBurn",
          company: "kainver",
          year: "2018",
          link:
            "https://www.behance.net/gallery/73168833/Tienda-de-Webs-Marketing-2",
          image: require("../../assets/img/computers/tiendadewebs-marketing-web-2.jpg")
        },
        {
          title: "App-Market",
          company: "kainver",
          year: "2018",
          link:
            "https://www.behance.net/gallery/73164583/Tienda-de-Webs-Marketing-3",
          image: require("../../assets/img/computers/tiendadewebs-marketing-web-3.jpg")
        },
        {
          title: "Domiserver",
          company: "Domiserver",
          year: "2018",
          link: "https://www.behance.net/gallery/66801367/DomiServer",
          image: require("../../assets/img/computers/Domiserver.jpg")
        },
        {
          title: "Latin Talents",
          company: "Domiserver",
          year: "2018",
          link: "https://www.behance.net/gallery/66800623/LatinTalents",
          image: require("../../assets/img/computers/LatinTalen.jpg")
        },
        {
          title: "Methods",
          company: "Personal",
          year: "2017",
          link: "https://metalsyntax.github.io/Methods/",
          image: require("../../assets/img/computers/metalsyntax-github-io-Methods.jpg")
        },
        {
          title: "Code of Paid",
          company: "Personal",
          year: "2017",
          link: "https://www.behance.net/gallery/66803173/Code-of-Paid",
          image: require("../../assets/img/computers/metalsyntax-github-io-Code-Of-Paid.jpg")
        },
        {
          title: "Syntax Note",
          company: "Personal",
          year: "2019",
          link: "https://metalsyntax.github.io/Notes/",
          image: require("../../assets/img/computers/metalsyntax-github-io-Notes.jpg")
        },
        {
          title: "Syntax Monitor",
          company: "Personal",
          year: "2019",
          link: "https://metalsyntax.github.io/Syntax-Monitor/",
          image: require("../../assets/img/computers/metalsyntax-github-io-Syntax-Monitor.jpg")
        }
      ]
    };
  }
};
</script>

<style>
.projects {
  border: solid 2px #ffffff;
}
.projects:hover {
  border: solid 2px #00c08b;
}
</style>