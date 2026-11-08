export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    apiBase: process.env.API_BASE || 'http://127.0.0.1:8080',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://127.0.0.1:8080'
    }
  },
  app: {
    head: {
      title: '织衡',
      meta: [
        { name: 'description', content: '布料纺织与房屋建筑工程的行业 AI' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Figtree:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
