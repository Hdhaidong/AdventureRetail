// 免费渠道洞察报告申请：转发业务平台
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = String(body?.email || '').trim()
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'invalid email' })
  }

  const lead = {
    kind: 'report',
    name: String(body?.name || ''),
    email,
    category: String(body?.category || ''),
    market: String(body?.market || ''),
    ts: Date.now()
  }
  const fwd = await forwardToPlatform('/api/leads/report', lead)
  if (!fwd.forwarded) console.log('[lead:report]', JSON.stringify(lead))

  return { ok: true }
})
