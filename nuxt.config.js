export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-portfolio',
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
  plugins: [
    {
    src: '~plugins/vue-scrollmagic.js',
    ssr: false,
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    'nuxt-fullpage.js',
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },
  i18n: {
    defaultLocale: 'kr',
    langDir: 'locales/',
    locales: [{
      code: 'en',
      iso: 'en',
      file: 'en.json'
    },
    {
      code: 'kr',
      iso: 'en',
      file: 'kr.json'
    }
    ],
 
  },
  loading: '@/layouts/loading.vue',
  pdf: {
    // custom configuration
    /*
    * Output folder for generated pdf.
    */
    dir: "static",
    pdf: {
      // Change the format of the pdfs.
      format: "A4", // This is optional 
      printBackground: true // Include background in pdf.
    },
    /*
    * Function options for page.setViewport([options])
    * Read more: https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-pagesetviewportviewport
    */
    viewport: {
      // override the default viewport
      width: 1280,
      height: 800
    },

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: [
      '@/assets/scss/main.scss',
      ]
  }
}
