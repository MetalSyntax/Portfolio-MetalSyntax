
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-ms.ico' },
      { rel: 'alternate', hreflang: 'en', href: 'http://metalsyntax.000webhostapp.com/' },
      { rel: 'alternate', hreflang: 'es', href: 'http://metalsyntax.000webhostapp.com/es' },
      { rel: 'alternate', hreflang: 'pt', href: 'http://metalsyntax.000webhostapp.com/pt' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  * 
  */ 
 router: {
  middleware: 'i18n',
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/typed.js',
    {src: "@/plugins/aos", ssr: false}
  ],
  /*
  ** Generates
  */
  generate: {
    routes: [
    '/', 
    '/portfolio',
    '/achievements',
    '/experience',
    '/es', 
    '/es/portfolio',
    '/es/achievements',
    '/es/experience', 
    '/pt', 
    '/pt/portfolio',
    '/pt/achievements',
    '/pt/experience'
  ]
  },
  /*
  ** Detect Browser Language
  */
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss','@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/robots','@nuxtjs/sitemap','@nuxtjs/pwa'
  ],
  /*
  *
  */
 pwa: {
  manifest: {
    name: 'Wonder Diaz Portfolio. MetalSyntax',
    short_name: 'MetalSyntax PWA',
    background_color: "#000",
    description: "Wonder Diaz Portfolio. Develop by MetalSyntax with Vue.js and TailWindCss.",
    lang: 'en',
    display: 'standalone'
    }
  },
  /*
  *
  */
  googleAnalytics: {
    id: 'UA-86102577-2'
  },
  /* 
   * Sitemap 
  */
 sitemap: {
  hostname: 'http://metalsyntax.000webhostapp.com/',
  routes: [
    '/',
    '/portfolio',
    '/achievements',
    '/experience',
    '/es',
    '/es/portfolio',
    '/es/achievements',
    '/es/experience',
    '/pt', 
    '/pt/portfolio',
    '/pt/achievements',
    '/pt/experience'
  ],
  path: '/sitemap.xml',
  gzip: true,
  generate: false,
  },
  /*
  *
  */
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['vue-i18n'],
    extend (config, ctx) {
    }
  }
}
