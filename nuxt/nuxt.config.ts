// Adventure Retail 官网 · Nuxt 3 + Cloudflare Pages
const SITE = 'https://adventureretail.com'
const DESC_ZH = 'Adventure Retail — AI 驱动的零售洞察加速平台。品牌洞察 × 渠道加速 × 全托管 × 数字工具 × 数字运营，覆盖近 50 个电商平台与 300+ 线下零售连锁。'
const DESC_EN = 'Adventure Retail — AI-driven retail insight & acceleration platform. Brand insight, channel acceleration, managed services, digital tools and digital operations across ~50 platforms and 300+ retail chains.'

// 与首页 #faq 区块保持一致（GEO：FAQPage 结构化数据）
const FAQ: [string, string][] = [
  ['Adventure Retail 是做什么的？',
   'Adventure Retail 是 AI 驱动的零售洞察加速平台。我们帮品牌与工厂把产品摆上全球货架：库存变现（收库存）、品牌兑现（ODM 新品）、渠道加速（平台产品）三条业务线，覆盖入驻上架、广告投放、内容种草、运营答疑与平台情报——能力落到你目标平台上的具体产品，开箱即用。'],
  ['你们覆盖哪些平台与渠道？',
   '线上覆盖 Amazon、Walmart、TikTok Shop、Temu 等近 50 个电商平台；线下覆盖美国、加拿大、澳洲、新西兰、日本、韩国与欧洲（东西双线）300+ 主流零售连锁，包括 Target+、Lowe\'s、The Home Depot、Best Buy、Costco、Woolworths、Coles、AEON、Coupang、Lidl、Carrefour、Tesco 等。每个渠道都有持续更新的情报库支撑。'],
  ['想进美国大商超（Target、Lowe\'s、The Home Depot），怎么开始？',
   '从一次免费初评开始：我们评估你的产品、资质与目标渠道的差距，给出准入门槛、合规清单与时间表。确认合作后，由对应平台的入驻产品承接——资料制作、合规代建、买手对接、上架跟进全流程陪跑，直到产品摆上货架。'],
  ['收库存怎么合作？',
   '你把库存清单（品类、数量、批次、仓储地）发给我们，AI 先跑一遍渠道匹配与动销测算，48 小时内给出收购或分销两套方案：收购一次性回款；分销按动销结算。库存出手之后，渠道侧的上架与动销由我们承接。'],
  ['你们怎么收费？',
   '按产品明码标价，不按人头计费。入驻类产品：资料制作与 AI 评估收费，提交入驻本身免费；托管类产品：按结果或周期收费，交付物与验收标准写进合同；收库存：收购价或分销佣金，方案确认后签约。人工咨询需预约，单独计费。'],
  ['你们和传统代运营有什么区别？',
   '三个区别：第一，交付物是产品不是工时——每个平台一款产品，能力持续下发更新；第二，AI 智能体 7×24 盯店，只有异常与决策点推给人，效率和响应速度不在一个量级；第三，我们同时持有渠道情报与分销网络，上架之后继续管动销——代运营管店，我们管结果。']
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
      title: 'Adventure Retail · 库存变现 × 品牌兑现 × 渠道加速',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: DESC_ZH },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Adventure Retail' },
        { property: 'og:title', content: 'Adventure Retail · 库存变现 × 品牌兑现 × 渠道加速' },
        { property: 'og:description', content: DESC_ZH },
        { property: 'og:url', content: SITE + '/' },
        { property: 'og:image', content: SITE + '/assets/hero-port.jpg' },
        { property: 'og:locale', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Adventure Retail · Inventory, Brands & Channel Acceleration' },
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
