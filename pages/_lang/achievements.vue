<template>
<div>
 <div class="w-full p-4">
  <h1 class="text-gray-800 text-center text-3xl">&lt;{{ $t('achievements.title') }}/&gt;</h1>
 </div>
<div class="py-4 px-2">
 <div class="flex flex-wrap -mx-2"> 
  <div v-for="item in items" v-bind:key="item.id" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="500">
  <div class="flex items-center shadow-lg overflow-hidden bg-white rounded-full mx-auto my-2">
    <a :href="item.link">
    <img class="w-20 h-20 rounded-full" :src="item.img" :alt="item.title">
    </a>
      <div class="text-sm">
        <a :href="item.link">
        <p class="mx-2 text-gray-900 font-regular text-lg">{{ item.title }}</p>
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
  head () {
    return { 
    title: this.$t('head.achievements'), 
    meta: [
          { 
            hid: 'description', name: 'description', content: this.$t('description.achievements') 
          }
        ]
      }
    },
   data(){
     return {
       items: [
      { title: 'Desarrollo con Vue.js', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/98-vue/diploma/detalle/",
      img: require('../../assets/img/diplomas/Vue.png')},
      { title: 'Arquitectura Frontend', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/42-arquitecto/diploma/detalle/",
      img: require('../../assets/img/diplomas/Arquitecto-Frontend.png')},
      { title: 'Desarrollo con WordPress', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/52-desarrollo-wordpress/diploma/detalle/",
      img: require('../../assets/img/diplomas/Wordpress.png')},
      { title: 'Desarrollo con Angular', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/77-desarrollo-angular/diploma/detalle/",
      img: require('../../assets/img/diplomas/Angular.png')},
      { title: 'Backend con GO', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/54-backend-go/diploma/detalle/",
      img: require('../../assets/img/diplomas/Goland.png')},
      { title: 'Bases de Datos', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/10-base-de-datos/diploma/detalle/",
      img: require('../../assets/img/diplomas/Base-de-datos.png')},
      { title: 'Backend con PHP', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/57-desarrollo-php/diploma/detalle/",
      img: require('../../assets/img/diplomas/Backend PHP.png')},
      { title: 'Frontend con React.JS', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/62-desarrollo-react/diploma/detalle/",
      img: require('../../assets/img/diplomas/React.png')},
      { title: 'Backend con JavaScript', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/97-backend-javascript/diploma/detalle/",
      img: require('../../assets/img/diplomas/Backend-JS.png')},
      { title: 'Desarrollo con Node.js', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/99-desarrollo-nodejs/diploma/detalle/",
      img: require('../../assets/img/diplomas/NodeJS.png')},
      { title: 'Diseño de Experiencia de Usuario', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/103-diseno-ux/diploma/detalle/",
      img: require('../../assets/img/diplomas/Diseno-UX.png')},
      { title: 'Diseño de Interfaces', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/102-interfaces-ui/diploma/detalle/",
      img: require('../../assets/img/diplomas/Diseno-UI.png')},
      { title: 'Ingles', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/81-idioma-ingles/diploma/detalle/",
      img: require('../../assets/img/diplomas/Ingles.png')},
      { title: 'Apps con React Native', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/94-react-native/diploma/detalle/",
      img: require('../../assets/img/diplomas/React-Native.png')},
      { title: 'Backend con Ruby', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/53-backend-ruby/diploma/detalle/",
      img: require('../../assets/img/diplomas/Backend-Ruby.png')},
      { title: 'Diseño de Producto', 
      company: 'Platzi',
      link: "https://platzi.com/@MetalSyntax/carrera/104-diseno-producto/diploma/detalle/",
      img: require('../../assets/img/diplomas/Diseno-Producto.png')},
      { title: 'Desarrollo de Apps multiplataforma',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/41-multiplataforma/diploma/detalle/",
      img: require('../../assets/img/diplomas/Apps-Multiplataformas.png')},
      { title: 'Diseño Grafico',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/69-diseno-grafico/diploma/detalle/",
      img: require('../../assets/img/diplomas/Diseno-Grafico.png')},
      { title: 'Email Marketing',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/59-email-marketing/diploma/detalle/",
      img: require('../../assets/img/diplomas/Email-Marketing.png')},
      { title: 'Estrategia y Marketing Digital',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/83-estrategia-marketing/diploma/detalle/",
      img: require('../../assets/img/diplomas/Estrategia-Marketing-Digital.png')},
      { title: 'Marketing Basado en Datos',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/63-data-marketing/diploma/detalle/",
      img: require('../../assets/img/diplomas/Marketing-Basado-Datos.png')},
      { title: 'Inbound Marketing',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/75-inbound-marketing/diploma/detalle/",
      img: require('../../assets/img/diplomas/Inbound-Marketing.png')},
      { title: 'Outbound Marketing',
      company: 'Platzi', 
      link: "https://platzi.com/@MetalSyntax/carrera/4-outbound-marketing/diploma/detalle/",
      img: require('../../assets/img/diplomas/Outbound-Marketing.png')},
      
      { title: 'Desarrollador de Ecosistemas',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/convirtete-en-desarrollador-de-ecosistemas",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Desarrollador Web Front-End',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-desarrollador-web-front-end",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Desarrollador multiplataforma para móviles',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-desarrollador-multiplataforma-para-moviles",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Especialista en seguridad de la información',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-especialista-en-seguridad-de-la-informacion",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Experto en marketing digital',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Gestor de proyectos',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Diseñador web front-end',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Desarrollador web full-stack',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Experto SEO',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
      img: require('../../assets/img/diplomas/linkedin.png')},
      { title: 'Experto en marketing en social media',
      company: 'LinkedIn Learning', 
      link: "http://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital",
      img: require('../../assets/img/diplomas/linkedin.png')},
      
      { title: 'Sistemas Informaticos', 
      company: 'Fundación Carlos Slim',
      link: "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtsi",
      img: require('../../assets/img/diplomas/dtsi.png')},
      { title: 'Integridad Web', 
      company: 'Fundación Carlos Slim',
      link: "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtiw",
      img: require('../../assets/img/diplomas/dtiw.png')},
      { title: 'Tecnico en Big Data', 
      company: 'Fundación Carlos Slim',
      link: "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtbd",
      img: require('../../assets/img/diplomas/dtbd.png')},
       { title: 'Gestión de AVA', 
       company: 'Fundación Carlos Slim',
      link: "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dtgava",
      img: require('../../assets/img/diplomas/dtgava.png')},
       { title: 'Desarrollo de sitios web', 
       company: 'Fundación Carlos Slim',
      link: "https://aprende.org/pages.php?r=.cfcs_oficial_infographic&diplomadoID=dswam",
      img: require('../../assets/img/diplomas/dswam.png')},
      ]
     }
   }
};
</script>


