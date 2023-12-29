// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxt/style-resources'],
  modules: ['nuxt-swiper'],
  styleResources: {
    scss: ['@/assets/scss/*.scss'],
  },
  css: ['@/assets/scss/style.scss'],
  plugins: ['@/plugins/click-outside.js'],
  devtools: {
    enabled: false,
  },
  app: {
    head: {
      title: 'Nuxt Test',
      meta: [
        {
          name: 'description',
          content: 'Nuxt 3 | Test',
        },
      ],
    },
  },
});
