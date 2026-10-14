export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Adventure Retail · 从工厂车间到全球货架',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: { crawlLinks: false }
  }
})
