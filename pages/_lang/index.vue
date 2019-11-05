<template>
  <div class="Content">
    <div class="bg-gray-100">
        <div class="flex flex-wrap py-6 px-4">
            <div class="w-full">
                <h6 class="text-gray-900 text-center text-xl">{{ $t('home.toptitle') }}</h6>
                <h1 class="title_bg text-center text-4xl">{{ $t('home.title') }}</h1>
                <h3 class="text-gray-900 text-center text-2xl">{{ $t('home.subtitle') }}</h3>
            </div>
            <div class="flex flex-wrap py-4 px-4">
            <div class="sm:w-full md:w-1/6 lg:w-1/6 "></div>
            <div class="sm:w-full md:w-4/6 lg:w-4/6">
                <p class="text-gray-900 text-center text-base">{{ $t('home.heroparagraph1') }}<b>Wonder Diaz</b>. {{ $t('home.heroparagraph2') }}<b> HTML, CSS, JavaScript, PHP, SQL, NoSQL</b>. 
                {{ $t('home.heroparagraph3') }}<b> Vue, Angular, React, Bootstrap, WordPress</b>, 
                {{ $t('home.heroparagraph4') }}</p>
            </div>
            </div>
        </div>
    </div>
    <div class="py-4 px-2 bg-gray-100">
  <div class="flex flex-wrap -mx-2">
  <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
  <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">
      <img class="h-10 px-2 inline skills" src="../../assets/img/icons/engineering_100px.png" alt="Engineering">
      {{ $t('home.title1') }}
      </div>
    <p class="text-gray-700 text-base text-center">
      {{ $t('home.text1') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-6">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline skills" src="../../assets/img/icons/source_code_64px.png" alt="Engineering">
      {{ $t('home.title2') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('home.text2') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline skills" src="../../assets/img/icons/design_100px.png" alt="Engineering">
      {{ $t('home.title3') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('home.text3') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
  <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline skills" src="../../assets/img/icons/commercial_100px.png" alt="Engineering">
      {{ $t('home.title4') }}</div>
    <p class="text-gray-700 text-base text-center">
      {{ $t('home.text4') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-8 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline skills" src="../../assets/img/icons/graph_100px.png" alt="Engineering">
      {{ $t('home.title5') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('home.text5') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-8 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline skills" src="../../assets/img/icons/service_100px.png" alt="Engineering">
      {{ $t('home.title6') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('home.text6') }}
    </p>
  </div>
  </div>
  </div>
  </div>
</div>
<div class="flex mb-4">
  <div class="w-full bg-gray-500"></div>
</div>
  </div>
</template>

<script>
export default {
  head () {
    return { title: this.$t('head.home') }
  }
}
</script>

<style>
.title_bg{
  color:#00C08B;
}
.skills {
filter:grayscale(100);
}
.skills:hover{
filter: none;
}
</style>