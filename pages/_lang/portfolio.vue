<template>
<div>
 <div class="w-full p-4">
  <h1 class="text-gray-800 text-center text-3xl">&lt;{{ $t('portfolio.title') }}/&gt;</h1>
 </div>
<div class="py-4 px-2">
 <div class="flex flex-wrap justify-center -mx-2">
  <div v-for="item in items" v-bind:key="item.id" class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-2" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="500">
  <a :href="item.link">
    <div class="rounded-lg overflow-hidden shadow-lg my-2 max-w-xs bg-black projects">
    <img class="w-full" :src="item.image" :alt="item.title">
   </div>
  </a>
  <p class="font-semibold text-gray-900 text-xl pl-2 pt-2">{{ item.title }}</p>
  <p class="text-gray-700 block opacity-75 pl-2 pb-2 text-sm">{{ item.company }} - {{ item.year }}</p>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
   head () {
    return { 
    title: this.$t('head.portfolio'),
    meta: [
    { hid: 'description', name: 'description', content: this.$t('description.portfolio')}
    ]
    }
  },
   data(){
     return {
       items: [
        {title: 'Radio Caribe', year:'2019',
        company: 'Independiente',
        link: 'http://www.radiocaribe.com/',
        image: require('../../assets/img/projects/caribe-radio.png')},
        {title: 'Mi Secretaria Virtual',
        company: 'kainver', year:'2019',
        link: '#',
        image: require('../../assets/img/projects/mi-secretaria-virtual.png')},
        {title: 'Renderizados',
        company: 'kainver', year:'2019',
        link: '#',
        image: require('../../assets/img/projects/renderizados.png')},
        {title: 'Soluciones Web',
        company: 'kainver', year:'2019',
        link: 'https://solucionesweb.tech/',
        image: require('../../assets/img/projects/Soluciones-Web.png')},
        { title: 'Traductores Malaga', 
        company: 'kainver',year:'2018',
        link: 'https://www.behance.net/gallery/72284307/Traductores-Malaga', 
        image: require('../../assets/img/projects/Traductores-Malaga.png') },
        { title: 'AW Travel Guides',
        company: 'kainver', year:'2019',
        link: 'https://www.behance.net/gallery/79183575/AW-Travel-Guides', 
        image: require('../../assets/img/projects/AW-Travel-Guides.png')},
        { title: 'Life Fitness', 
        company: 'kainver', year:'2018',
        link: 'https://www.behance.net/gallery/76360309/Tiendas-de-Webs-Gimnasio-1', 
        image: require('../../assets/img/projects/LifeFitness.png')},
        { title: 'MediaOrbit', 
        company: 'kainver', year:'2018',
        link: '#', 
        image: require('../../assets/img/projects/MediaOrbit.png')},
        { title: 'Starlines', 
        company: 'kainver', year:'2018',
        link: 'https://www.behance.net/gallery/76362391/Tiendas-de-Webs-Inmobiliarias-2', 
        image: require('../../assets/img/projects/Starlines.png')},
        { title: 'Netcoms', 
        company: 'kainver', year:'2018',
        link: 'https://www.behance.net/gallery/76361415/Tienda-de-Webs-Inmobiliarias-3', 
        image: require('../../assets/img/projects/Netcoms.png')},
        { title: 'Gearworks', 
        company: 'kainver', year:'2018',
        link: '#', 
        image: require('../../assets/img/projects/Gearworks.png')},
        { title: 'MediaBurn', 
        company: 'kainver', year:'2018',
        link: 'https://www.behance.net/gallery/73168833/Tienda-de-Webs-Marketing-2', 
        image: require('../../assets/img/projects/MediaBurn.png')},
        { title: 'App-Market',
        company: 'kainver', year:'2018', 
        link: 'https://www.behance.net/gallery/73164583/Tienda-de-Webs-Marketing-3', 
        image: require('../../assets/img/projects/App-Market.png')},
        { title: 'Domiserver', 
        company: 'Domiserver', year:'2018',
        link: 'https://www.behance.net/gallery/66801367/DomiServer', 
        image: require('../../assets/img/projects/Domiserver.png') },
        { title: 'Latin Talents', 
        company: 'Domiserver', year:'2018',
        link: 'https://www.behance.net/gallery/66800623/LatinTalents', 
        image: require('../../assets/img/projects/Latin-Talents.png')},
        {title: 'Methods', 
        company: 'Personal', year:'2017',
        link: 'https://metalsyntax.github.io/Methods/', 
        image: require('../../assets/img/projects/Methods.png')},
        { title: 'Code of Paid', 
        company: 'Personal', year:'2017',
        link: 'https://www.behance.net/gallery/66803173/Code-of-Paid', 
        image: require('../../assets/img/projects/Code-of-Paid.png')},
        { title: 'Syntax Note',
        company: 'Personal', year:'2019',
        link: 'https://metalsyntax.github.io/Notes/', 
        image: require('../../assets/img/projects/Syntax-Notes.png')},
        { title: 'Syntax Monitor', 
        company: 'Personal', year:'2019',
        link: 'https://metalsyntax.github.io/Syntax-Monitor/', 
        image: require('../../assets/img/projects/Syntax-Monitor.png')}
      ]
     }
   }
};
</script>

<style>
.projects:hover{
  /*box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);*/
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.50);
}
</style>