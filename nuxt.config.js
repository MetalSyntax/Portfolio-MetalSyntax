export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*mode: "universal",*/
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon-ms.ico"
      },
      {
        rel: "alternate",
        hreflang: "en",
        href: "http://metalsyntax.now.sh/"
      },
      {
        rel: "alternate",
        hreflang: "es",
        href: "http://metalsyntax.now.sh/es"
      },
      {
        rel: "alternate",
        hreflang: "pt",
        href: "http://metalsyntax.now.sh/pt"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   * Router
   */
  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/typed.js",
    {
      src: "@/plugins/aos",
      ssr: false
    },
    {
      src: "@/plugins/vue-awesome-swiper",
      mode: "client"
    },
    {
      src: "~/plugins/i18n.js"
    },
  ],
  /*
   ** Generates
   */
  generate: {
    dir: "dist",
    routes: [
      "/",
      "/portfolio",
      "/achievements",
      "/experience",
      "/es",
      "/es/portfolio",
      "/es/achievements",
      "/es/experience",
      "/pt",
      "/pt/portfolio",
      "/pt/achievements",
      "/pt/experience"
    ]
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics",
    "@aceforth/nuxt-optimized-images",
    ["@nuxtjs/pwa"],
    /*["nuxt-i18n"]*/
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-i18n",
    /*['@nuxtjs/pwa', {icon: false }]*/
  ],
  /*
   *
   */
  // Internationalization configuration
  i18n: {
    strategy: "prefix_and_default",
    // Set the default locale to "en"
    defaultLocale: "en",
    seo: true,
    // Configure browser language detection
    detectBrowserLanguage: {
      // Use a cookie to store the redirected language
      useCookie: true,
      cookieKey: "i18n_redirected",
      // Redirect only on the root page
      onlyOnRoot: true
    },
    parsePages: false,
    pages: {
      index: {
        en: "/",
        es: "/",
        pt: "/"
      },
      portfolio: {
        en: "/portfolio",
        es: "/portfolio",
        pt: "/portfolio"
      },
      achievements: {
        en: "/achievements",
        es: "/achievements",
        pt: "/achievements"
      },
      experience: {
        en: "/experience",
        es: "/experience",
        pt: "/experience"
      }
    },
   // Define a custom redirection function that changes the value of "defaultLocale"
    vueI18n: {
      fallbackLocale: "en"
    },
    locales: [{
        code: "en",
        name: "English",
        iso: "en-US",
        file: 'en-US.js'
      },
      {
        code: "es",
        name: "Español",
        iso: "es-ES",
        file: 'es-ES.js'
      },
      {
        code: "pt",
        name: "Portuguese",
        iso: "pt-PT",
        file: 'pt-PT.js'
      }
    ],
    lazy: true,
    langDir: 'lang/'
  },
  // Define a custom redirection function that changes the value of "defaultLocale"
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    // Redirect only on the root page
    onlyOnRoot: true,
    // Define a custom redirection function that changes the value of "defaultLocale"
    redirect: (/* String */ to, /* String */ from, /* Object */ context) => {
      // Get the browser language
      const browserLang = context.req.headers['accept-language'].split(',')[0].trim().substring(0, 2);
      // Change the value of "defaultLocale"
      context.app.i18n.defaultLocale = browserLang;
      // Redirect the user to the appropriate page in the correct language
      return `/${browserLang}${to}`;
    }
  },
  /*
   * Optimize Images
   */
  optimizedImages: {
    inlineImageLimit: 2000,
    imagesName: ({
        isDev
      }) =>
      isDev ?
      "[path][name][hash:optimized].[ext]" : "img/[contenthash:7].[ext]",
    responsiveImagesName: ({
        isDev
      }) =>
      isDev ?
      "[path][name]--[width][hash:optimized].[ext]" : "img/[contenthash:7]-[width].[ext]",
    handleImages: ["jpeg", "png", "webp"],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80
    },
    optipng: {
      optimizationLevel: 3
    },
    pngquant: false,
    webp: {
      preset: "default",
      quality: 80
    }
  },
  /*
   * Progressive Web Application
   */
  pwa: {
    manifest: {
      name: "Wonder Diaz Portfolio. MetalSyntax",
      short_name: "MetalSyntax PWA",
      background_color: "#000",
      description: "Wonder Diaz Portfolio. Developed by MetalSyntax with Vue.js, Nuxt.js and TailWindCss.",
      lang: "en",
      start_url: "/?standalone=true",
      display: "standalone"
    }
  },
  /*
   * Google Analytics
   */
  googleAnalytics: {
    id: "UA-86102577-2"
  },
  /*
   * Sitemap
   */
  sitemap: {
    hostname: "http://metalsyntax.now.sh/",
    routes: [
      "/",
      "/portfolio",
      "/achievements",
      "/experience",
      "/es",
      "/es/portfolio",
      "/es/achievements",
      "/es/experience",
      "/pt",
      "/pt/portfolio",
      "/pt/achievements",
      "/pt/experience"
    ],
    path: "/sitemap.xml",
    gzip: true,
    generate: false
  },
  /*
   *Robot.txt
   */
  robots: {
    /*UserAgent: '*',
    Disallow: '/'*/
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  }
};
