
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#9ec928' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/webfont.js',
    '~/plugins/emptyTouchStarHandler.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxt.js/google-gtag',{
      id: 'UA-107703960-3',
      config: {
        anonymize_ip: true,// anonymize IP
      },
      // debug: true, //enable to track in dev mode
    }],
    ['nuxt-fontawesome',{
      component: 'fa',
      imports: [
        {
          set: '@fontawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fontawesome/free-brands-svg-icons',
          icons: ['fab']
        },
      ],
    }],
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    scss: [
      './assets/style/styleResources/*.scss',
    ]
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-attrs'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
