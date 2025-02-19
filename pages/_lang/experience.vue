<template>
  <div>
    <div class="w-full p-4 bg-white">
      <vue-typed-js
            class="justify-center py-2"
            :strings="[
              $t('experience.title')
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
    <div class="py-4 px-2 h-full">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="item in items"
          v-bind:key="item.id"
          class="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-2 py-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div class="md:flex md:flex-wrap rounded overflow-hidden shadow-lg mx-2 my-2 bg-white border-2 border-white rounded-lg hover:border-aqua-100">
            <picture class="px-2 py-2 w-3/4 md:w-1/3 m-auto">
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/bussines/${item.image}.png?webp`)"
                  type="image/webp"
                />
                <source
                  :title="item.title"
                  :alt="item.title"
                  :srcset="require(`~/assets/img/bussines/${item.image}.png`)"
                  type="image/png"
                />
                <img
                  class="mx-auto"
                  :src="require(`~/assets/img/bussines/${item.image}.png`)"
                  :alt="item.title"
                  :title="item.title"
                />
              </picture>
            <div
              class="md:flex md:flex-wrap px-2 py-2 md:w-2/3 justify-center lg:justify-start items-center"
            >
              <h2
                class="font-bold text-xl mb-2 text-center md:text-left w-full"
              >
                {{ item.title }}
              </h2>
              <p
                class="text-gray-700 text-base text-center md:text-left w-full"
              >
                {{ item.yearfirst }} - {{ item.yearlast }}
              </p>
              <a :href="item.website !== '#' ? `https://${item.website}` : item.website" :target="item.website == '#' ? '' : '_blank'">
              <p
                class="text-gray-700 text-base text-center md:text-left w-full text-aqua-100"
              >
                {{ item.company }}
              </p>
              </a>
              <ul class="list-disc text-center md:text-left w-full">
                <li class="list-none">{{ item.task1 }}</li>
                <li class="list-none">{{ item.task2 }}</li>
                <li class="list-none">{{ item.task3 }}</li>
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
      items: [
        {
          title: this.$t("experience.redgage"),
          yearfirst: "2021",
          yearlast: this.$t("experience.status"),
          company: "RedGage, LLC.",
          website: "www.redgage.com",
          task1: this.$t("experience.task1redgage"),
          task2: this.$t("experience.task2redgage"),
          task3: this.$t("experience.task3redgage"),
          image: "RG"
        },
        {
          title: this.$t("experience.uts"),
          yearfirst: "2024",
          yearlast: "2024",
          company: "Instituto Universitario de tecnología Antonio José de Sucre",
          website: "www.uts.edu.ve",
          task1: this.$t("experience.task1uts"),
          task2: this.$t("experience.task2uts"),
          task3: this.$t("experience.task3uts"),
          image: "uts"
        },
        {
          title: this.$t("experience.komax"),
          yearfirst: "2023",
          yearlast: "2024",
          company: "Komax, S.A.",
          website: "www.komax.cl",
          task1: this.$t("experience.task1komax"),
          task2: this.$t("experience.task2komax"),
          task3: this.$t("experience.task3komax"),
          image: "komax_sa"
        },
        {
          title: this.$t("experience.genesisagency"),
          yearfirst: "2022",
          yearlast: "2023",
          company: "Genesis",
          website: "genesisagency.digital/",
          task1: this.$t("experience.task1genesisagency"),
          task2: this.$t("experience.task2genesisagency"),
          task3: this.$t("experience.task3genesisagency"),
          image: "Genesis"
        },
        {
          title: this.$t("experience.equipo360"),
          yearfirst: "2022",
          yearlast: "2022",
          company: "Equipo360 S.L.",
          website: "www.equipo360.com",
          task1: this.$t("experience.task1equipo360"),
          task2: this.$t("experience.task2equipo360"),
          task3: this.$t("experience.task3equipo360"),
          image: "Team360"
        },
        {
          title: this.$t("experience.virtuallypresent"),
          yearfirst: "2019",
          yearlast: "2021",
          company: "Virtually Present, LLC.",
          website: "virtuallypresent.net",
          task1: this.$t("experience.task1virtuallypresent"),
          task2: this.$t("experience.task2virtuallypresent"),
          task3: this.$t("experience.task3virtuallypresent"),
          image: "VP"
        },
        {
          title: this.$t("experience.sigloglobal"),
          yearfirst: "2018",
          yearlast: "2021",
          company: "Siglo Global, S.L.U.",
          website: "#",
          task1: this.$t("experience.task1sigloglobal"),
          task2: this.$t("experience.task2sigloglobal"),
          task3: this.$t("experience.task3sigloglobal"),
          image: "SG"
        },
        {
          title: this.$t("experience.kainver"),
          yearfirst: "2018",
          yearlast: "2019",
          company: "Kainver Venezuela",
          website: "www.kainver.com",
          task1: this.$t("experience.task1kainver"),
          task2: this.$t("experience.task2kainver"),
          task3: this.$t("experience.task3kainver"),
          image: "kainver"
        },
        {
          title: this.$t("experience.domiserver"),
          yearfirst: "2018",
          yearlast: "2018",
          company: "Domiserver",
          website: "domiserver.com",
          task1: this.$t("experience.task1domiserver"),
          task2: this.$t("experience.task2domiserver"),
          task3: this.$t("experience.task3domiserver"),
          image: "DomiServer"
        },
        {
          title: this.$t("experience.sanofi"),
          yearfirst: "2017",
          yearlast: "2018",
          company: "Sanofi Venezuela",
          website: "www.sanofi.com.ve",
          task1: this.$t("experience.task1sanofi"),
          task2: this.$t("experience.task2sanofi"),
          task3: this.$t("experience.task3sanofi"),
          image: "Sanofi"
        }
      ]
    };
  }
};
</script>

<style>

</style>
