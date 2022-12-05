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
    analyze: true,
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
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        cacheGroups: {
          vendor: {
            // chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            priority: 10,
          },
          // libs: {
          //   // 第三方库
          //   name: 'chunk-libs',
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: 10,
          // },
          web3: {
            name: 'chunk-web3',
            test: /[\\/]node_modules[\\/]web3[\\/]/,
            priority: 20,
          },
          web3modal: {
            name: 'chunk-web3modal',
            test: /[\\/]node_modules[\\/]web3modal[\\/]/,
            priority: 30,
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 3,
            maxInitialRequests: 5,
            priority: 0,
          },
          // commons: {
          //   // 公共模块包
          //   name: 'chunk-commons',
          //   minChunks: 2,
          //   priority: 0,
          //   reuseExistingChunk: true,
          // },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true,
          },
          // runtimeChunk: {
          //   name: 'manifest',
          // },
        },
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
