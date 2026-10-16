// Adventure Retail 官网 · Nuxt 3 + Cloudflare Pages
export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Adventure Retail · 库存变现 × 品牌兑现 × 渠道加速',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Adventure Retail — 库存变现、品牌兑现、渠道加速。十一款 Agent 产品、十三条能力线、42 个渠道情报库，覆盖近 50 个平台。' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap' }
      ],
      script: [
        { src: 'https://trtc.io/knocket-sdk/sdk.js?identifier=3f372c6318b0189bb3', async: true, tagPosition: 'bodyClose' }
      ]
    }
  },
  nitro: {
    preset: 'cloudflare-pages'
  },
  runtimeConfig: {
    // 业务平台打通：adventure-platform API
    platformApiBase: process.env.PLATFORM_API_BASE || '',
    platformApiToken: process.env.PLATFORM_API_TOKEN || ''
  },
  compatibilityDate: '2026-10-16'
})
