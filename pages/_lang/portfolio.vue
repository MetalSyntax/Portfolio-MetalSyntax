<template>
  <div>
    <div class="w-full p-4 mt-24 bg-ui-bg">
      <vue-typed-js
        class="justify-center py-2"
        :strings="[$t('portfolio.title')]"
        :loop="true"
        :showCursor="false"
        :typeSpeed="100"
      >
        <h1
          class="text-nuxt-green font-medium text-center items-center text-3xl lg:text-4xl font-mono"
        >
          &lt;
          <span class="typing"></span>/&gt;
        </h1>
      </vue-typed-js>
    </div>
    <div class="w-full px-6 py-4 text-center bg-ui-bg">
      <span class="text-gray-400 font-base text-xl lg:text-2xl">
        {{ $t("portfolio.heroparagraph") }}
      </span>
    </div>
    <div class="w-full px-2 pt-6 bg-ui-bg">
      <ul class="hidden lg:flex flex-wrap justify-center">
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#all"
            @click="itemsFilterkey = 'All'"
            :class="{ active: itemsFilterkey == 'All' }"
            >{{ $t("portfolio.filter") }}</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#Komax"
            @click="itemsFilterkey = 'Komax'"
            :class="{ active: itemsFilterkey == 'Komax' }"
            >Komax</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#genesis"
            @click="itemsFilterkey = 'genesis'"
            :class="{ active: itemsFilterkey == 'genesis' }"
            >Genesis Agency</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#equipo360"
            @click="itemsFilterkey = 'equipo360'"
            :class="{ active: itemsFilterkey == 'equipo360' }"
            >Equipo 360</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#virtually"
            @click="itemsFilterkey = 'virtually'"
            :class="{ active: itemsFilterkey == 'virtually' }"
            >Virtually Present</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#kainver"
            @click="itemsFilterkey = 'kainver'"
            :class="{ active: itemsFilterkey == 'kainver' }"
            >Kainver</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#domiserver"
            @click="itemsFilterkey = 'Domiserver'"
            :class="{ active: itemsFilterkey == 'Domiserver' }"
            >Domiserver</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#personal"
            @click="itemsFilterkey = 'Personal'"
            :class="{ active: itemsFilterkey == 'Personal' }"
            >Personal</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#freelance"
            @click="itemsFilterkey = 'Freelance'"
            :class="{ active: itemsFilterkey == 'Freelance' }"
            >Freelance</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#alcancevirtual"
            @click="itemsFilterkey = 'alcancevirtual'"
            :class="{ active: itemsFilterkey == 'alcancevirtual' }"
            >Alcance Virtual</a
          >
        </li>
        <li class="flex-1 mr-2 max-w-xs">
          <a
            class="button-filter-project"
            href="#multipro"
            @click="itemsFilterkey = 'multipro'"
            :class="{ active: itemsFilterkey == 'multipro' }"
            >Multipro</a
          >
        </li>
      </ul>
      <select
        name="items"
        class="lg:hidden flex w-full justify-center mx-auto text-center rounded border border-gray-700 bg-ui-bg-muted text-white focus:border-nuxt-green shadow-lg py-2 px-4 outline-none"
        v-model="itemsFilterkey"
      >
        <option class="bg-ui-bg-muted text-white" value="All">{{ $t("portfolio.filter") }}</option>
        <option class="bg-ui-bg-muted text-white" value="Komax">Komax</option>
        <option class="bg-ui-bg-muted text-white" value="genesis">Genesis Agency</option>
        <option class="bg-ui-bg-muted text-white" value="equipo360">Equipo 360</option>
        <option class="bg-ui-bg-muted text-white" value="virtually">Virtually Present</option>
        <option class="bg-ui-bg-muted text-white" value="kainver">Kainver</option>
        <option class="bg-ui-bg-muted text-white" value="domiserver">DomiServer</option>
        <option class="bg-ui-bg-muted text-white" value="personal">Personal</option>
        <option class="bg-ui-bg-muted text-white" value="freelance">Freelance</option>
        <option class="bg-ui-bg-muted text-white" value="alcancevirtual">Alcance Virtual</option>
        <option class="bg-ui-bg-muted text-white" value="multipro">Multipro</option>
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
        itemsFilterkey == 'alcancevirtual' ? 'lg:h-screen' : '',
        itemsFilterkey == 'multipro' ? 'lg:h-screen' : '',
      ]"
      class="p-4 px-2 bg-ui-bg min-h-screen"
    >
      <div class="flex flex-wrap justify-center -mx-2">
        <div
          v-for="item in itemFilter"
          v-bind:key="item.id"
          class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 justify-center py-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div
            class="rounded-xl overflow-hidden shadow-xl mx-auto my-2 bg-ui-bg-muted border border-gray-800 hover:border-nuxt-green transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group"
          >
            <a :href="item.link" target="_blank" class="relative overflow-hidden block">
              <picture>
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="
                    require(`~/assets/${item.image}?webp`)
                  "
                  type="image/webp"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/${item.image}`)"
                  type="image/jpeg"
                />
                <img
                  class="w-full transition-transform duration-500 group-hover:scale-105"
                  :src="require(`~/assets/${item.image}`)"
                  :alt="item.title"
                  :title="item.title"
                />
              </picture>
              <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </a>
            <div class="px-4 py-4 flex-grow">
              <a :href="item.link" target="_blank">
                <p
                  class="text-center text-white text-xl pt-2 font-semibold hover:text-nuxt-green transition-colors"
                >
                  {{ item.title }}
                </p>
              </a>
              <p
                class="text-center text-nuxt-green font-semibold text-sm block opacity-90 mt-1"
              >
                {{ item.company }} - {{ item.year }}
              </p>
              <p class="text-gray-400 text-base text-center p-2 line-clamp-3">
                {{ item.description }}
              </p>
              <div
                class="flex flex-nowrap justify-center overflow-x-auto py-2 hide-scrollbar"
              >
                <div
                  v-for="(icon, index) in item.icons"
                  :key="index"
                  class="flex-shrink-0 mx-1"
                >
                  <div class="bg-gray-800 rounded-full p-2" :title="icon.title">
                    <picture>
                      <source
                        :title="icon.title"
                        :alt="icon.title"
                        :srcset="
                          require(`~/assets/${icon.image}?webp`)
                        "
                        type="image/webp"
                      />
                      <source
                        :title="icon.title"
                        :alt="icon.title"
                        :srcset="require(`~/assets/${icon.image}`)"
                        type="image/png"
                      />
                      <img
                        class="w-6 h-6 object-contain"
                        :title="icon.title"
                        :src="require(`~/assets/${icon.image}`)"
                        :alt="icon.title"
                        loading="lazy"
                        width="24"
                        height="24"
                      />
                    </picture>
                  </div>
                </div>
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
  async asyncData({ $content, app }) {
    const itemsRaw = await $content('projects').fetch()
    const locale = app.i18n.locale
    const key = ['es', 'es-ES'].includes(locale) ? 'description_es'
      : ['pt', 'pt-PT'].includes(locale) ? 'description_pt'
      : 'description_en'
    const items = itemsRaw.map(p => ({ ...p, description: p[key] }))
    return { items }
  },
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
      items: [],
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
    alcancevirtual() {
      return this.items.filter(function (item) {
        return item.company == "Alcance Virtual SPA";
      });
    },
    multipro() {
      return this.items.filter(function (item) {
        return item.company == "Multipro Consulting";
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
  @apply block text-center rounded border border-gray-700 bg-ui-bg-muted text-gray-300 py-2 px-4 transition-colors;
}
.button-filter-project:hover {
  @apply border-nuxt-green text-nuxt-green;
}
.button-filter-project.active {
  @apply border-nuxt-green text-nuxt-green bg-ui-bg-accented;
}
</style>
