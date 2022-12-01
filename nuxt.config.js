export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eternal',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-[#121117]',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/qr.js', ssr: false },
    { src: '@/plugins/api.js' },
    { src: '@/plugins/redreamerApi.js' },
    { src: '@/plugins/loading.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
        defaultImage: '/images/default-image.gif',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    uglify: {
      uglifyOptions: {
        comments: false,
        compress: {
          drop_console: true,
        },
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: false,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: false,
        removeEmptyAttributes: true,
        removeOptionalTags: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        removeTagWhitespace: false,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },
  googleFonts: {
    families: {
      'Noto+Sans+TC': [400, 500, 700, 900],
    },
    base64: false,
  },
  env: {
    baseUrl: 'http://phoenix.un05.com',
  },
  publicRuntimeConfig: {
    redreamerApiUrl: 'https://testnet-api.redreamer.io',
  },
  privateRuntimeConfig: {
    redreamerApiUrl: 'https://mainnet-api.redreamer.io',
  },
}
