export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LibraryFE',
    htmlAttrs: {
      lang: 'en',
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
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // router: {
  //    middleware: ['auth']
  // },
  auth: {
    watchLoggedIn: true,
    rewriteRedirects: true,
    fullPathRedirect: true,
    plugins: [ '~/plugins/auth.js' ],   
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post'   },
          user: { url: '/users/me', method: 'get'  },
          logout: { url: '/auth/logout', method: 'post'}
          
        }
      },
      
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/dashboard',
      user:'/dashboard'
    },
  },
//   auth: {
//     redirect: {
//         login: "/login",
//         logout: "/login",
//         home: "/"
//     },
//     watchLoggedIn: true,
//     strategies: {
//         local: {
//             token: {
//                 property: "jwt"
//             },
//             user: {
//                 property: false
//             },
//             endpoints: {
//                 login: {
//                     url: "auth/local",
//                     method: "post"
//                 },
//                 user: {
//                     url: "users/me",
//                     method: "get"
//                 },
//                 logout: false
//             }
//         }
//     }
// },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8055',
  },
}
