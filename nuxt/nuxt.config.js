const axios = require('axios')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    WUXT_PORT_BACKEND: process.env.WUXT_PORT_BACKEND || '3080'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/wp-api-docker-connector', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '~/modules/static/',
    ["nuxt-buefy"],
    [
      '~/modules/wp-api/index',
      {
        endpoint: 'http://' + (process.env.WUXT_WP_CONTAINER ? process.env.WUXT_WP_CONTAINER : 'wp.wuxt') + ':80/wp-json/'
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  generate: {
    routes: function() {
      return axios
        .get('http://' + (process.env.WUXT_WP_CONTAINER ? process.env.WUXT_WP_CONTAINER : 'wp.wuxt') + ':80/wp-json/wuxt/v1/generate')
        .then(({ data }) => data)
    }
  }
}
