<template>
  <div>
    <div class="w-full p-4 mt-24 bg-ui-bg">
      <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('experience.title')
            ]"
            :loop="true"
            :showCursor="false"
            :typeSpeed="100"
          >
            <h1 class="text-nuxt-green font-medium text-center items-center text-3xl lg:text-4xl font-mono">
              &lt;
              <span class="typing"></span>/&gt;
            </h1>
          </vue-typed-js>
    </div>
    <div class="w-full px-6 py-4 text-center bg-ui-bg">
      <span class="text-gray-400 font-base text-xl lg:text-2xl">
        {{ $t("experience.heroparagraph") }}
      </span>
    </div>
    <div class="py-4 px-2 h-full bg-ui-bg">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="item in items"
          v-bind:key="item.id"
          class="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-2 py-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="md:flex md:flex-wrap rounded-xl overflow-hidden shadow-lg mx-2 my-2 bg-ui-bg-muted border border-gray-800 hover:border-nuxt-green transition-colors duration-300 h-full">
            <picture class="px-2 py-2 w-3/4 md:w-1/3 m-auto">
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/${item.image}?webp`)"
                  type="image/webp"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/${item.image}`)"
                  type="image/png"
                />
                <img
                  class="mx-auto rounded-lg bg-white"
                  :src="require(`~/assets/${item.image}`)"
                  :alt="item.title"
                  :title="item.title"
                />
              </picture>
            <div
              class="md:flex md:flex-wrap px-4 py-4 md:w-2/3 justify-center lg:justify-start items-center"
            >
              <h2
                class="font-bold text-xl mb-2 text-center md:text-left w-full text-white"
              >
                {{ item.title }}
              </h2>
              <p
                class="text-gray-400 text-base text-center md:text-left w-full"
              >
                {{ item.yearfirst }} - {{ item.yearlast }}
              </p>
              <a :href="item.website !== '#' ? `https://${item.website}` : item.website" :target="item.website == '#' ? '' : '_blank'" class="w-full">
              <p
                class="text-base text-center md:text-left w-full text-nuxt-green hover:text-nuxt-green/80 transition-colors"
              >
                {{ item.company }}
              </p>
              </a>
              <ul class="list-disc text-center md:text-left w-full text-gray-300 pl-4 mt-2">
                <li class="list-none mb-1 text-sm">{{ item.task1 }}</li>
                <li class="list-none mb-1 text-sm">{{ item.task2 }}</li>
                <li class="list-none mb-1 text-sm">{{ item.task3 }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const itemsRaw = await $content('experience').fetch()
    const locale = app.i18n.locale
    const sfx = ['es', 'es-ES'].includes(locale) ? '_es'
      : ['pt', 'pt-PT'].includes(locale) ? '_pt'
      : '_en'
    
    const items = itemsRaw.map(p => ({
      ...p,
      title: p[`title${sfx}`],
      yearlast: p[`yearlast${sfx}`],
      task1: p[`task1${sfx}`],
      task2: p[`task2${sfx}`],
      task3: p[`task3${sfx}`]
    }))

    return { items }
  },
  head() {
    return {
      title: this.$t("head.experience"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("description.experience")
        }
      ]
    };
  },
  data() {
    return {
      items: []
    };
  }
};
</script>

<style>

</style>
