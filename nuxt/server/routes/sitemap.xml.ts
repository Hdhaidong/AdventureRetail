// GEO: sitemap.xml — 单页官网，主页 + 核心锚点
export default defineEventHandler((event) => {
  const base = 'https://adventureretail.com'
  const lastmod = '2026-10-29'
  const urls = [
    { loc: `${base}/`, priority: '1.0' },
    { loc: `${base}/#brands`, priority: '0.9' },
    { loc: `${base}/#solutions`, priority: '0.8' },
    { loc: `${base}/#how`, priority: '0.8' },
    { loc: `${base}/#roi`, priority: '0.7' },
    { loc: `${base}/#results`, priority: '0.7' },
    { loc: `${base}/#markets`, priority: '0.7' },
    { loc: `${base}/#qualify`, priority: '0.8' },
    { loc: `${base}/#faq`, priority: '0.7' },
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
