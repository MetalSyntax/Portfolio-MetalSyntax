<template>
  <div>
    <div class="w-full p-4 mt-24 bg-ui-bg">
      <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('achievements.title')
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
        {{ $t("achievements.heroparagraph") }}
      </span>
    </div>
    <div class="w-full px-2 pt-6 bg-ui-bg relative z-40">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-4 max-w-5xl mx-auto">
        <!-- Client Filter -->
        <div class="w-full lg:w-1/2">
          <label class="block text-gray-400 text-sm font-bold mb-2">{{ $t("achievements.filterClient") }}</label>
          <CustomSelect v-model="itemsFilterkey" :options="clientOptions" />
        </div>

        <!-- Sort By -->
        <div class="w-full lg:w-1/2">
          <label class="block text-gray-400 text-sm font-bold mb-2">{{ $t("achievements.sort") }}</label>
          <CustomSelect v-model="sortBy" :options="sortOptions" />
        </div>
      </div>
    </div>
    <div
    :class="[
    itemsFilterkey == 'LinkedIn' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Aprende' ? 'lg:h-screen' : '',
    itemsFilterkey == 'Universidad' ? 'h-screen' : '']"
    class="py-4 px-2 bg-ui-bg h-full min-h-screen">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="item in itemFilter"
          v-bind:key="item.id"
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="flex items-center shadow-lg overflow-hidden bg-ui-bg-muted rounded-xl mx-auto my-2 border border-gray-800 hover:border-nuxt-green transition-all duration-300 p-4">
            <a :href="item.link" target="_blank" class="flex-shrink-0">
              <picture>
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
                class="w-20 h-20 rounded-full border-2 border-gray-700"
                :src="require(`~/assets/${item.image}`)"
                :alt="item.title"
                :title="item.title"
              />
            </picture>
            </a>
            <div class="text-sm ml-4">
              <a :href="item.link" target="_blank">
                <p class="text-white font-bold sm:text-sm md:text-lg hover:text-nuxt-green transition-colors">{{ item.title }}</p>
                <p class="text-nuxt-green block opacity-90 text-sm font-medium">
                  {{ item.company }}
                  <span v-if="item.date" class="text-gray-400 ml-1 font-normal text-xs">| {{ item.date }}</span>
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
import CustomSelect from '~/components/CustomSelect.vue';

export default {
  components: { CustomSelect },
  async asyncData({ $content }) {
    const items = await $content('achievements').fetch()
    return { items }
  },
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
      sortBy: "date-desc",
      items: [],
    };
  },
  computed: {
    clientOptions() {
      const opts = [{ value: 'All', label: this.$t("achievements.filter") }];
      this.uniqueClients.forEach(c => opts.push({ value: c, label: c }));
      return opts;
    },
    sortOptions() {
      return [
        { value: 'date-desc', label: this.$t("achievements.sortDateDesc") },
        { value: 'date-asc', label: this.$t("achievements.sortDateAsc") },
        { value: 'name-asc', label: this.$t("achievements.sortNameAsc") },
        { value: 'name-desc', label: this.$t("achievements.sortNameDesc") },
      ];
    },
    uniqueClients() {
      const clients = this.items.map(item => item.company || item.academy).filter(Boolean);
      return [...new Set(clients)].sort();
    },
    itemFilter() {
      let result = this.items.filter(item => {
        return this.itemsFilterkey === "All" || item.company === this.itemsFilterkey || item.academy === this.itemsFilterkey;
      });

      result.sort((a, b) => {
        if (this.sortBy === "date-desc") {
          return new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0);
        } else if (this.sortBy === "date-asc") {
          return new Date(a.date || a.createdAt || 0) - new Date(b.date || b.createdAt || 0);
        } else if (this.sortBy === "name-asc") {
          return (a.title || "").localeCompare(b.title || "");
        } else if (this.sortBy === "name-desc") {
          return (b.title || "").localeCompare(a.title || "");
        }
        return 0;
      });

      return result;
    }
  }
};
</script>

<style>
.button-filter {
 @apply block text-center rounded border border-gray-700 bg-ui-bg-muted text-gray-300 py-2 px-4 transition-colors;
}
.button-filter:hover {
  @apply border-nuxt-green text-nuxt-green;
}
.button-filter.active {
  @apply border-nuxt-green text-nuxt-green bg-ui-bg-accented;
}
</style>


