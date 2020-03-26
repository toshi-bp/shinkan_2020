export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/2020/favicon.ico' },
      // { rel: 'apple-touch-icon-precomposed', href: 'https://welcome-tus.grats.jp/2020/symbol.png'}ブックマークされる用の画像
    ]
  },
  router: {
    base: "/2020/",
    trailingSlash: true
  },
  generate: {
    routes: ["404"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#97c031" },
  /*
   ** Global CSS
   */
  css: ["~/assets/style/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/webfonts.js", "~/plugins/emptyTouchStartHandler.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-gtag",
      {
        id: "UA-111290134-3",
        config: {
          anonymize_ip: true // anonymize IP
        }
        // debug: true, //enable to track in dev mode
      }
    ],
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-regular-svg-icons",
            icons: ["far"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    "@nuxtjs/style-resources",
    "@nuxtjs/markdownit"
  ],
  styleResources: {
    scss: ["./assets/style/styleResources/*.scss"]
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: ["markdown-it-attrs"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
