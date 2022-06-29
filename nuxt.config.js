module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Стандарт',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Сервис в области поставки крепежных изделий для производства сельхозтехники, ремонта машин и оборудования, для строительства, энергетики, нефтехимической отрасли, станков и машиностроения, а также троса стальные и арматуру для них, соединительные элементы для дерева производства стран ЕВРОСОЮЗА более 40000 наименований и типоразмеров. ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  telemetry: true,
  dev: process.env.NODE_ENV !== "production",
  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    baseURL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/"
        : "http://site.standart.by"
  },
  server: {
    port: 3000, // default: 3000npm
    host: 'localhost', // default: localhost,
    timing: false
  },
  serverMiddleware: [
    { path: "/api", handler: "~/server-middleware/rest.js" },
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    "@/assets/scss/main.scss"
  ],

  styleResources: {
    scss: ["~/assets/scss/_vars.scss"]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    '@nuxtjs/universal-storage',
    [
      "nuxt-mq",
      {
        defaultBreakpoint: "sm",
        breakpoints: {
          phone: 576,
          tabletSm: 768,
          tablet: 991,
          desktopSm: 1200,
          desktop: Infinity
        }
      }
    ]
  ],
  bootstrapVue: {
    icons: true
  },
  storage: {
    localStorage: {
      prefix: ''
    },
  },
  // loading: '~/components/LoadingBar.vue',
  // loading: {
  //   color: '#404c54',
  //   height: '5px',
  //   throttle: 200
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel' },
    // { src: '~/plugins/vue-lock-scroll', mode: "client" },
    { src: '~/plugins/vue-yandex-map-contacts', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/dotenv'
    '@nuxt/image',
    'nuxt-compress',
    '@nuxtjs/style-resources',
  ],

  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL
  // },
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // },





  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
