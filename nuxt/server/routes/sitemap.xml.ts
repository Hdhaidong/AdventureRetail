// GEO: sitemap.xml — 单页官网，主页 + 核心锚点
export default defineEventHandler((event) => {
  const base = 'https://adventureretail.com'
  const lastmod = '2026-10-18'
  const urls = [
    { loc: `${base}/`, priority: '1.0' },
    { loc: `${base}/#products`, priority: '0.9' },
    { loc: `${base}/#capabilities`, priority: '0.8' },
    { loc: `${base}/#catalog`, priority: '0.8' },
    { loc: `${base}/#markets`, priority: '0.7' },
    { loc: `${base}/#insight`, priority: '0.7' },
    { loc: `${base}/#faq`, priority: '0.7' },
    { loc: `${base}/#report`, priority: '0.8' },
    { loc: `${base}/#portal`, priority: '0.6' },
    { loc: `${base}/#contact`, priority: '0.8' }
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`
  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})
