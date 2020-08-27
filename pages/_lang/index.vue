<template>
  <div class="Content">
    <div class="bg-gray-100">
      <div class="flex flex-wrap content-center py-8 px-4 bg-white shadow-xl full-display">
        <div class="w-full">
          <h1
            class="text-gray-900 font-semibold items-center text-center text-4xl lg:text-5xl py-2"
          >Wonder Díaz</h1>
          <vue-typed-js
            class="justify-center py-2"
            :strings="[$t('home.titletyped1'),$t('home.titletyped2'),$t('home.titletyped3')]"
            :loop="true"
            :showCursor="false"
            :typeSpeed="100"
          >
            <h2 class="title_bg font-medium text-center items-center text-3xl lg:text-4xl">
              &lt;
              <span class="typing"></span>/&gt;
            </h2>
          </vue-typed-js>
          <h3
            class="text-gray-900 font-regular text-center items-center text-2xl lg:text-3xl py-2"
          >{{ $t('home.subtitle') }}</h3>
        </div>
      </div>
    </div>
    <div class="sm:py-2 sm:px-2 lg:py-4 lg:px-4 lighten">
      <div class="flex flex-wrap py-4 px-4">
        <div class="sm:w-full md:w-1/6 lg:w-1/6"></div>
        <div class="sm:w-full md:w-4/6 lg:w-4/6">
          <p class="text-gray-900 text-center text-xl">
            {{ $t('home.heroparagraph2') }}
            <strong>HTML5, CSS3, JavaScript, JSON, PHP, SQL, NoSQL</strong>
            .
            {{ $t('home.heroparagraph3') }}
            <strong>JQuery, WebPack, Vue, Nuxt, React, Next.js, Node.js, Sass, Materialize, Bootstrap, TailWindCss, WordPress</strong>
            ,
            {{ $t('home.heroparagraph4') }}
          </p>
        </div>
      </div>
          <div class="flex flex-wrap w-4/5 ml-auto mr-auto content-center justify-center">
           <div
            class="justify-center w-24 md:w-3/12 lg:w-2/12 xl:w-1/12"
            v-for="icon in icons"
            v-bind:key="icon"
            data-aos="fade">
                <img class="w-full p-1 px-2 inline" :title="icon.title" :src="icon.image" :alt="icon.title" />
            </div>
          </div>
      <div class="py-4 px-2">
        <div class="flex flex-wrap -mx-2">
          <div
            v-for="item in items"
            v-bind:key="item.id"
            class="sm:w-full md:w-1/2 lg:w-1/3 px-4 py-2"
            data-aos="fade"
          >
            <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
              <div class="px-4 py-4">
                <div class="font-bold text-xl mb-2 text-center">
                  <img class="h-10 lg:h-16 px-2 inline skills" :src="item.image" :alt="item.title"/>
                  <h3>{{ item.title }}</h3>
                </div>
                <p class="text-gray-900 text-base text-center">{{ item.text }}</p>
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
  head() {
    return {
      title: this.$t("head.home"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("description.home")
        }
      ]
    };
  },
  data() {
    return {
      icons: [
        {
          title:"WordPress",
          image: require("../../assets/img/tech/WordPress.png")
        },
        {
          title:"Nuxt",
          image: require("../../assets/img/tech/Nuxt.png")
        },
        {
          title:"Next",
          image: require("../../assets/img/tech/Nextjs.png")
        },
        {
          title:"Python",
          image: require("../../assets/img/tech/python.png")
        },
        {
          title:"Flask",
          image: require("../../assets/img/tech/flask.png")
        },
        {
          title:"TailWind",
          image: require("../../assets/img/tech/tailwindcss.png")
        },
        {
          title:"Bootstrap",
          image: require("../../assets/img/tech/bootstrap4.png")
        },
        {
          title:"MongoDB",
          image: require("../../assets/img/tech/Mongodb-new.png")
        },
        {
          title:"Adobe XD",
          image: require("../../assets/img/tech/experience.png")
        },
        {
          title:"Figma",
          image: require("../../assets/img/tech/Figma-1.png")
        },
      ],
      items: [
        {
          title: this.$t("home.title1"),
          text: this.$t("home.text1"),
          alt: "Engineering",
          image: require("../../assets/img/icons/engineer.png")
        },
        {
          title: this.$t("home.title2"),
          text: this.$t("home.text2"),
          alt: "Source Code",
          image: require("../../assets/img/icons/interface.png")
        },
        {
          title: this.$t("home.title3"),
          text: this.$t("home.text3"),
          alt: "Design",
          image: require("../../assets/img/icons/tool.png")
        },
        {
          title: this.$t("home.title4"),
          text: this.$t("home.text4"),
          alt: "Commercial",
          image: require("../../assets/img/icons/tools-and-utensils.png")
        },
        {
          title: this.$t("home.title5"),
          text: this.$t("home.text5"),
          alt: "Graph",
          image: require("../../assets/img/icons/seo-and-web.png")
        },
        {
          title: this.$t("home.title6"),
          text: this.$t("home.text6"),
          alt: "Service",
          image: require("../../assets/img/icons/communications.png")
        }
      ]
    };
  }
};
</script>

<style>
.full-display {
  height: 100vh;
  background-image: url("../../assets/img/background/home-background-white.jpg");
  background-color: #e4e4e4;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: normal;
}
.title_bg {
  color: #00c08b;
}
.skills {
  filter: none;
}
.skills:hover {
  filter: grayscale(100);
}
@media (min-width: 1023px) {
  .full-display {
    height: calc(100vh - 72px);
  }
}
/*.glitch{
  background: transparent !important;
}*/
.lighten{
  background:#f5f5f5;
}
</style>
