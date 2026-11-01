// Adventure Retail 官网 · Nuxt 3 + Cloudflare Pages
const SITE = 'https://adventureretail.com'
const DESC_ZH = 'Adventure Retail — 用 AI、渠道与营销把业绩做出来：ODM 联合开发、OEM 定牌生产、OBM 品牌操盘三种合作模式。AI 选品企划与 7×24 盯店定方向，近 50 个电商平台与 300+ 线下零售连锁资源给货架，种草投放做动销——所有措施只对 GMV 负责。48 小时出第一份兑现评估。'
const DESC_EN = 'Adventure Retail — performance delivered through AI, channels and marketing: three engagement models (ODM co-design, OEM private label, OBM brand operation). AI product planning and 7×24 shelf-watch set direction, ~50 online marketplaces plus 300+ retail chains provide the shelves, seeding and paid ads drive sell-through — every measure accountable to GMV. First assessment in 48 hours.'

// GEO：FAQPage 结构化数据（口径与首页五段结构一致）
const FAQ: [string, string][] = [
  ['Adventure Retail 是做什么的？',
   'Adventure Retail 用 AI、渠道、营销三组措施帮品牌与工厂拿到业绩（GMV）。合作模式有三种：ODM 联合开发、OEM 定牌生产、OBM 品牌操盘。AI 负责选品企划、货架情报与内容素材；渠道侧握有近 50 个电商平台与 300+ 线下连锁的入驻与分销资源；营销侧做种草、投放与每周放量。渠道对我们是资源与措施，不是业务——一切措施只对 GMV 负责。'],
  ['你们覆盖哪些平台与渠道？',
   '线上覆盖 Amazon、Walmart、Target+、Lowe\'s、The Home Depot、Best Buy、Wayfair、Mirakl、Mercado Libre、Bol 等近 50 个电商平台；线下覆盖美国、加拿大、澳洲、新西兰、日本、韩国与欧洲（东西双线）300+ 主流零售连锁，包括 Costco、Woolworths、Coles、AEON、Coupang、Lidl、Carrefour、Tesco 等。每个渠道都有持续更新的情报库支撑。'],
  ['想进美国大商超（Target、Lowe\'s、The Home Depot），怎么开始？',
   '从一次免费初评开始：我们评估你的产品、资质与目标渠道的差距，给出准入门槛、合规清单与时间表。确认合作后，由所选模式的渠道措施承接——资料制作、合规代建、买手对接、上架跟进全流程陪跑，直到产品摆上货架。'],
  ['ODM、OEM、OBM 三种模式怎么选？',
   '看你要的控制权与投入深度：OEM 定牌生产——渠道需求明确、按单生产，最快见流水；ODM 联合开发——你的产品基础加上我们的渠道与货架洞察，联合改款后再上架；OBM 品牌操盘——从品牌定位、内容素材到全渠道铺货与库存清销，全案交给我们运营。不确定时，从一份免费初评开始，48 小时内给出模式建议——包括「建议不合作」。'],
  ['你们怎么收费？',
   '按措施明码标价，不按人头计费。渠道侧：资料制作与 AI 评估收费，提交入驻本身免费；OBM / ODM 操盘：按结果或周期收费，交付物与验收标准写进合同；OEM 定牌：按订单与生产批次结算。人工咨询需预约，单独计费。'],
  ['你们和传统代运营有什么区别？',
   '三个区别：第一，交付物是措施与结果，不是工时——每项措施有明确交付物，能力持续更新；第二，AI 智能体 7×24 盯店，只有异常与决策点推给人，效率和响应速度不在一个量级；第三，我们同时握有渠道资源与营销措施，上架之后继续管 GMV——代运营管店，我们管结果。'],
  ['供应链侧怎么协同？',
   '中国运营中心（上海 + 深圳）承接供应链协同：选厂、验厂、打样、质检与物流跟进，只推通过验厂的工厂，打样真实下厂。供应链进度与渠道交付串联——试点阶段的上架排期与备货对齐，避免货到无架或架等货。从一个询价开始，48 小时内给出工厂短名单与报价区间。']
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': SITE + '/#org',
      name: 'Adventure Retail',
      url: SITE + '/',
      logo: SITE + '/assets/hero-port.jpg',
      description: DESC_EN,
      email: 'Info@adventureretail.com',
      sameAs: []
    },
    {
      '@type': 'WebSite',
      '@id': SITE + '/#site',
      url: SITE + '/',
      name: 'Adventure Retail',
      publisher: { '@id': SITE + '/#org' },
      inLanguage: ['zh-CN', 'en']
    },
    {
      '@type': 'FAQPage',
      '@id': SITE + '/#faq',
      mainEntity: FAQ.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    }
  ]
}

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Adventure Retail · ODM × OEM × OBM · 措施兑现业绩',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: DESC_ZH },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Adventure Retail' },
        { property: 'og:title', content: 'Adventure Retail · ODM × OEM × OBM · 措施兑现业绩' },
        { property: 'og:description', content: DESC_ZH },
        { property: 'og:url', content: SITE + '/' },
        { property: 'og:image', content: SITE + '/assets/hero-port.jpg' },
        { property: 'og:locale', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Adventure Retail · ODM × OEM × OBM · Measures That Deliver GMV' },
        { name: 'twitter:description', content: DESC_EN },
        { name: 'twitter:image', content: SITE + '/assets/hero-port.jpg' }
      ],
      link: [
        { rel: 'canonical', href: SITE + '/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap' }
      ],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) },
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
