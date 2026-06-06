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
    <div class="w-full px-4 pt-6 pb-4 bg-ui-bg relative z-40">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-4 max-w-5xl mx-auto">
        <!-- Year Filter -->
        <div class="w-full lg:w-1/4">
          <label class="block text-gray-400 text-sm font-bold mb-2">{{ $t("portfolio.filterYear") }}</label>
          <CustomSelect v-model="filterYear" :options="yearOptions" />
        </div>

        <!-- Client Filter -->
        <div class="w-full lg:w-1/4">
          <label class="block text-gray-400 text-sm font-bold mb-2">{{ $t("portfolio.filterClient") }}</label>
          <CustomSelect v-model="filterClient" :options="clientOptions" />
        </div>

        <!-- Tech Filter -->
        <div class="w-full lg:w-1/4">
          <label class="block text-gray-400 text-sm font-bold mb-2">{{ $t("portfolio.filterTech") }}</label>
          <CustomSelect v-model="filterTech" :options="techOptions" />
        </div>

        <!-- Sort By -->
        <div class="w-full lg:w-1/4">
          <label class="block text-gray-400 text-sm font-bold mb-2">{{ $t("portfolio.sort") }}</label>
          <CustomSelect v-model="sortBy" :options="sortOptions" />
        </div>
      </div>
    </div>
    <div class="p-4 px-2 bg-ui-bg min-h-screen">
      <div v-if="filteredItems.length === 0" class="text-center text-gray-400 py-12">
        <p class="text-xl">No projects found matching the selected filters.</p>
        <button @click="resetFilters" class="mt-4 text-nuxt-green hover:underline">Reset Filters</button>
      </div>
      <div class="flex flex-wrap justify-center -mx-2">
        <div
          v-for="item in filteredItems"
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
import CustomSelect from '~/components/CustomSelect.vue';

export default {
  components: { CustomSelect },
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
      filterClient: "All",
      filterYear: "All",
      filterTech: "All",
      sortBy: "date-desc",
      items: [],
    };
  },
  computed: {
    yearOptions() {
      const opts = [{ value: 'All', label: this.$t("portfolio.allYears") }];
      this.uniqueYears.forEach(y => opts.push({ value: y, label: y }));
      return opts;
    },
    clientOptions() {
      const opts = [{ value: 'All', label: this.$t("portfolio.allClients") }];
      this.uniqueClients.forEach(c => opts.push({ value: c, label: c }));
      return opts;
    },
    techOptions() {
      const opts = [{ value: 'All', label: this.$t("portfolio.allTech") }];
      this.uniqueTechs.forEach(t => opts.push({ value: t, label: t }));
      return opts;
    },
    sortOptions() {
      return [
        { value: 'date-desc', label: this.$t("portfolio.sortDateDesc") },
        { value: 'date-asc', label: this.$t("portfolio.sortDateAsc") },
        { value: 'name-asc', label: this.$t("portfolio.sortNameAsc") },
        { value: 'name-desc', label: this.$t("portfolio.sortNameDesc") },
      ];
    },
    uniqueClients() {
      const clients = this.items.map(item => item.company).filter(Boolean);
      return [...new Set(clients)].sort();
    },
    uniqueYears() {
      const years = this.items.map(item => item.year).filter(Boolean);
      return [...new Set(years)].sort((a, b) => b - a); // Descending order
    },
    uniqueTechs() {
      const techs = [];
      this.items.forEach(item => {
        if (item.icons) {
          item.icons.forEach(icon => techs.push(icon.title));
        }
      });
      return [...new Set(techs)].sort();
    },
    filteredItems() {
      let result = this.items.filter(item => {
        const matchClient = this.filterClient === "All" || item.company === this.filterClient;
        const matchYear = this.filterYear === "All" || item.year === this.filterYear;
        const matchTech = this.filterTech === "All" || (item.icons && item.icons.some(icon => icon.title === this.filterTech));
        return matchClient && matchYear && matchTech;
      });

      result.sort((a, b) => {
        if (this.sortBy === "date-desc") {
          return parseInt(b.year || 0) - parseInt(a.year || 0);
        } else if (this.sortBy === "date-asc") {
          return parseInt(a.year || 0) - parseInt(b.year || 0);
        } else if (this.sortBy === "name-asc") {
          return (a.title || "").localeCompare(b.title || "");
        } else if (this.sortBy === "name-desc") {
          return (b.title || "").localeCompare(a.title || "");
        }
        return 0;
      });

      return result;
    }
  },
  methods: {
    handleImageError(event) {
      event.target.style.display = "none";
    },
    resetFilters() {
      this.filterClient = "All";
      this.filterYear = "All";
      this.filterTech = "All";
      this.sortBy = "date-desc";
    }
  },
};
</script>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
