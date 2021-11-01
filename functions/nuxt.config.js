/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ParkerClassicWorks',
    title: 'PCW',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Parker Classic Works is Precision. Delivered. PCW is a brand-new restoration and servicing centre in the Midlands. It has a particular focus on Caterham and Porsche servicing, but all marques are catered for, with experienced Porsche mechanics utilising the skill and knowledge of Team Parker Racing’s almost quarter of a century of success competing with Porsche, Caterham, and other prestige manufacturers.',
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://apps.elfsight.com/p/platform.js', defer: true },
      {
        hid: 'mailchimp1',
        type: 'text/javascript',
        src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
      },
      {
        hid: 'mailchimp2',
        innerHTML: `
        ;(function ($) {
          window.fnames = new Array()
          window.ftypes = new Array()
          fnames[0] = 'EMAIL'
          ftypes[0] = 'email'
        })(jQuery)
        var $mcj = jQuery.noConflict(true);
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-6JHHPG2VWN',
        async: true,
      },
      {
        hid: 'gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6JHHPG2VWN');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
  },

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  plugins: [{ src: '~/plugins/vue-easy-lightbox.js', mode: 'client' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ['~/plugins/axios.js'],

  router: {
    middleware: ['auth'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#0A1B53',
          secondary: '#EAFF00',
          accent: '#9c27b0',
        },
        light: {
          primary: '#1B3F7A',
          secondary: '#5CB4E5',
          accent: '#707070',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
