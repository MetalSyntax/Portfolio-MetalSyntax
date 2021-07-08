<template>
  <div>
    <div class="w-full p-4 bg-aqua-200 shadow-lg">
      <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('achievements.title')
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
            class="button-filter hover:bg-white hover:border-aqua-100"
            href="#all"
            @click="itemsFilterkey = 'All'"
            :class="{ active: itemsFilterkey == 'All' }"
          >{{ $t('achievements.filter') }}</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter"
            href="#platzi"
            @click="itemsFilterkey = 'Platzi'"
            :class="{ active: itemsFilterkey == 'Platzi' }"
          >Platzi</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter"
            href="#linkedIn"
            @click="itemsFilterkey = 'LinkedIn'"
            :class="{ active: itemsFilterkey == 'LinkedIn Learning'}"
          >LinkedIn Learning</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter"
            href="#aprende"
            @click="itemsFilterkey = 'Aprende'"
            :class="{ active: itemsFilterkey == 'Fundación Carlos Slim' }"
          >Aprende.org</a>
        </li>
        <li class="flex-1 mr-2">
          <a
            class="button-filter"
            href="#universidad"
            @click="itemsFilterkey = 'Universidad'"
            :class="{ active: itemsFilterkey == 'Universidad' }"
          >Universidad</a>
        </li>
      </ul>
      <select
        name="items"
        class="lg:hidden flex w-full justify-center mx-auto text-center rounded border-2 border-white hover:border-aqua-100 focus:border-green-500  shadow-lg text-black hover:text-green-500 hover:bg-white py-2 px-4 outline-none"
        v-model="itemsFilterkey"
      >
        <option
          value="All"
        >{{ $t('achievements.filter') }}</option>
        <option
          value="Platzi"
        >Platzi</option>
        <option
          value="LinkedIn"
        >LinkedIn Learning</option>
        <option
          value="Aprende"
        >Aprende.org</option>
        <option
          value="Universidad"
        >Universidad</option>
      </select>
    </div>
    <div
    :class="[
    itemsFilterkey == 'LinkedIn' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Aprende' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Universidad' ? 'h-screen' : '']"
    class="py-4 px-2">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="item in itemFilter"
          v-bind:key="item.id"
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="flex items-center shadow-lg overflow-hidden bg-white rounded-full mx-auto my-2 border-2 border-white hover:border-aqua-100">
            <a :href="item.link" target="_blank">
              <picture>
              <source
                :title="item.title"
                :alt="item.title"
                :srcset="require(`~/assets/img/diplomas/${item.image}.png?webp`)"
                type="image/webp"
              />
              <source
                :title="item.title"
                :alt="item.title"
                :srcset="require(`~/assets/img/diplomas/${item.image}.png`)"
                type="image/png"
              />
              <img
                class="w-20 h-20 rounded-full"
                :src="require(`~/assets/img/diplomas/${item.image}.png`)"
                :alt="item.title"
                :title="item.title"
              />
            </picture>
            </a>
            <div class="text-sm">
              <a :href="item.link" target="_blank">
                <p class="mx-2 text-gray-900 font-regular sm:text-sm md:text-lg hover:text-aqua-200">{{ item.title }}</p>
                <p class="text-gray-700 block pl-2 opacity-75 text-sm">{{ item.company }}</p>
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
      title: this.$t("head.achievements"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("description.achievements")
        }
      ]
    };
  },
  data() {
    return {
      itemsFilterkey: "All",
      items: [
        /*Platzi*/
        {
          title: "Desarrollo con Vue.js",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/98-vue/diploma/detalle/",
          image: "Vue"
        },
        {
          title: "Arquitectura Frontend",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/42-arquitecto/diploma/detalle/",
          image: "Arquitecto-Frontend"
        },
        {
          title: "Desarrollo con WordPress",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/52-desarrollo-wordpress/diploma/detalle/",
          image: "Wordpress"
        },
        {
          title: "Desarrollo con Angular",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/77-desarrollo-angular/diploma/detalle/",
          image: "Angular"
        },
        {
          title: "Backend con GO",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/54-backend-go/diploma/detalle/",
          image: "Goland"
        },
        {
          title: "Bases de Datos",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/10-base-de-datos/diploma/detalle/",
          image: "Base-de-datos"
        },
        {
          title: "Backend con PHP",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/57-desarrollo-php/diploma/detalle/",
          image: "Backend PHP"
        },
        {
          title: "Frontend con React.JS",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/62-desarrollo-react/diploma/detalle/",
          image: "React"
        },
        {
          title: "Backend con JavaScript",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/97-backend-javascript/diploma/detalle/",
          image: "Backend-JS"
        },
        {
          title: "Desarrollo con Node.js",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/99-desarrollo-nodejs/diploma/detalle/",
          image: "NodeJS"
        },
        {
          title: "Diseño de Experiencia de Usuario",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/103-diseno-ux/diploma/detalle/",
          image: "Diseno-UX"
        },
        {
          title: "Diseño de Interfaces",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/102-interfaces-ui/diploma/detalle/",
          image: "Diseno-UI"
        },
        {
          title: "Ingles",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/81-idioma-ingles/diploma/detalle/",
          image: "Ingles"
        },
        {
          title: "Apps con React Native",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/94-react-native/diploma/detalle/",
          image: "React-Native"
        },
        {
          title: "Backend con Ruby",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/53-backend-ruby/diploma/detalle/",
          image: "Backend-Ruby"
        },
        {
          title: "Diseño de Producto",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/104-diseno-producto/diploma/detalle/",
          image: "Diseno-Producto"
        },
        {
          title: "Desarrollo de Apps multiplataforma",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/41-multiplataforma/diploma/detalle/",
          image: "Apps-Multiplataformas"
        },
        {
          title: "Diseño Grafico",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/69-diseno-grafico/diploma/detalle/",
          image: "Diseno-Grafico"
        },
        {
          title: "Email Marketing",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/59-email-marketing/diploma/detalle/",
          image: "Email-Marketing"
        },
        {
          title: "Estrategia y Marketing Digital",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/83-estrategia-marketing/diploma/detalle/",
          image: "Estrategia-Marketing-Digital"
        },
        {
          title: "Marketing Basado en Datos",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/63-data-marketing/diploma/detalle/",
          image: "Marketing-Basado-Datos"
        },
        {
          title: "Inbound Marketing",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/75-inbound-marketing/diploma/detalle/",
          image: "Inbound-Marketing"
        },
        {
          title: "Outbound Marketing",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/4-outbound-marketing/diploma/detalle/",
          image: "Outbound-Marketing"
        },
        {
          title: "Negocios Online",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/6-negocios/diploma/detalle/",
          image: "Negocios-online"
        },
        {
          title: "Gestión de Proyectos",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/82-gestion-proyectos/diploma/detalle/",
          image: "Gestion-de-proyectos"
        },
        {
          title: "Transformación Digital",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/85-transformacion-digital/diploma/detalle/",
          image: "Transfomacion-digital"
        },
        {
          title: "Ventas y Mercadeo",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/80-ventas-mercadeo/diploma/detalle/",
          image: "Ventas-mercadeo"
        },
        {
          title: "Blockchain y Criptomonedas",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/carrera/73-blockchain-criptomonedas/diploma/detalle/",
          image: "Blockchain"
        },
        {
          title: "Carrera de JavaScript",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/ruta/100-escuela-javascript/diploma/detalle/",
          image: "JavaScript"
        },
          {
          title: "Desarrollo Profesional",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/ruta/46-habilidades-blandas/diploma/detalle/",
          image: "Desarrollo-Profesional"
        },
          {
          title: "SeguridadInformática",
          company: "Platzi",
          link:
            "https://platzi.com/@MetalSyntax/ruta/38-seguridad-informatica/diploma/detalle/",
          image: "Seguridad-Informática"
        },
        /*LinkedIn*/
        {
          title: "Desarrollador de Ecosistemas",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/convirtete-en-desarrollador-de-ecosistemas",
          image: "linkedin"
        },
        {
          title: "Desarrollador Web Front-End",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-desarrollador-web-front-end",
          image: "linkedin"
        },
        {
          title: "Desarrollador multiplataforma para móviles",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-desarrollador-multiplataforma-para-moviles",
          image: "linkedin"
        },
        {
          title: "Especialista en seguridad de la información",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-especialista-en-seguridad-de-la-informacion",
          image: "linkedin"
        },
        {
          title: "Experto en marketing digital",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
          image: "linkedin"
        },
        {
          title: "Gestor de proyectos",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
          image: "linkedin"
        },
        {
          title: "Coordinador de proyectos",
          company: "LinkedIn Learning",
          link:
            "https://www.linkedin.com/learning/paths/conviertete-en-coordinador-de-proyectos",
          image: "linkedin"
        },
        {
          title: "Diseñador web front-end",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
          image: "linkedin"
        },
        {
          title: "Desarrollador web full-stack",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
          image: "linkedin"
        },
        {
          title: "Experto SEO",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
          image: "linkedin"
        },
        {
          title: "Experto en marketing en social media",
          company: "LinkedIn Learning",
          link:
            "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
          image: "linkedin"
        },
        /*Carlos Slim*/
        {
          title: "Sistemas Informaticos",
          company: "Fundación Carlos Slim",
          link:
            "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtsi",
          image: "dtsi"
        },
        {
          title: "Integridad Web",
          company: "Fundación Carlos Slim",
          link:
            "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtiw",
          image: "dtiw"
        },
        {
          title: "Tecnico en Big Data",
          company: "Fundación Carlos Slim",
          link:
            "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtbd",
          image: "dtbd"
        },
        {
          title: "Gestión de AVA",
          company: "Fundación Carlos Slim",
          link:
            "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtgava",
          image: "dtgava"
        },
        {
          title: "Desarrollo de sitios web",
          company: "Fundación Carlos Slim",
          link:"https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dswam",
          image: "dswam"
        },
        /*Universidades*/
        {
          title: "Lean Management, Mejora Continua y Calidad",
          company: "UJAP",
          academy: "Universidad",
          link:"https://drive.google.com/open?id=1Ta36Uw2mWauRKtTuzn9XixAAaWOM6HwP",
          image: "UJAP"
        },
        {
          title: "Diseño y Desarrollo de Base de Datos",
          company: "UCV",
          academy: "Universidad",
          link:"https://drive.google.com/open?id=1H1rC_Kr8roxrBleEMMxfI7Ch-rse87bD",
          image: "UCV"
        }
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
    Platzi() {
      return this.items.filter(function(item) {
        return item.company == "Platzi";
      });
    },
    LinkedIn() {
      return this.items.filter(function(item) {
        return item.company == "LinkedIn Learning";
      });
    },
    Aprende() {
      return this.items.filter(function(item) {
        return item.company == "Fundación Carlos Slim";
      });
    },
    Universidad() {
      return this.items.filter(function(item) {
        return item.academy == "Universidad";
      });
    }
  }
};
</script>

<style>
.button-filter {
 @apply block text-center rounded border-2 border-white shadow-lg text-black py-2 px-4;
}
.button-filter:hover {
  @apply  bg-white text-aqua-200 border-aqua-100;
}
</style>


